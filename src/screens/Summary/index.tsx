/* eslint-disable import/no-duplicates */

import React, { useState, useCallback } from 'react';
import { Alert, ScrollView, ActivityIndicator } from 'react-native';
import Storage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { subMonths, addMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ChartCard } from '../../components/ChartCard';
import { ITrasactionDataProps } from '../../components/TransactionCard';
import { categories } from '../../utils/categories';

import {
  Container,
  LoadingContainer,
  Header,
  Title,
  ChartContainer,
  Filter,
  Icon,
  Month
} from './styles';
import { useAuth } from '../../hooks/auth';

export interface ITotalByCategoryProps {
  name: string;
  formattedSum: string;
  unformattedSum: number;
  percentage: string;
  color: string;
};

export function Summary() {
  const theme = useTheme();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<
    ITotalByCategoryProps[]
  >([]);

  function handleDateChange(action: 'prev' | 'next') {
    setIsLoading(true);

    if (action === 'prev') {
      setSelectedDate(subMonths(selectedDate, 1));
    } else {
      setSelectedDate(addMonths(selectedDate, 1));
    }
  }

  function getSumAndPercentageByCategory(transactions: ITrasactionDataProps[]) {
    const totalByCategory: ITotalByCategoryProps[] = [];

    const outcomeAmount = transactions.reduce(
      (acc: number, item: ITrasactionDataProps) => {
        return (acc += Number(item.amount));
      },
      0
    )

    categories.forEach(category => {
      let categorySum = 0;

      transactions.forEach((transaction: ITrasactionDataProps) => {
        if (transaction.category === category.key) {
          return (categorySum += Number(transaction.amount));
        }
      })

      if (categorySum > 0) {
        const categorySumFormatted = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })

        const percent = `${((categorySum / outcomeAmount) * 100).toFixed(0)}%`;

        totalByCategory.push({
          name: category.name,
          formattedSum: categorySumFormatted,
          unformattedSum: categorySum,
          percentage: percent,
          color: category.color
        })
      }
    })

    return totalByCategory;
  }

  const loadDataFromStorage = useCallback(async () => {
    try {
      const dataKey = `@gofinances:transactions_user:${user.id}`;
      const response = await Storage.getItem(dataKey);
      const parsedTransactions = response ? JSON.parse(response) : [];

      const allOutcomeTransactions = parsedTransactions.filter(
        (transaction: ITrasactionDataProps) =>
          transaction.transactionType === 'outcome' &&
          new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
          new Date(transaction.date).getFullYear() ===
            selectedDate.getFullYear()
      );

      setTotalByCategories(
        getSumAndPercentageByCategory(allOutcomeTransactions)
      );
    } catch (error) {
      Alert.alert(
        'Oops!',
        'Não foi possível fazer o carregamento das informações.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [selectedDate]);

  useFocusEffect(
    useCallback(() => {
      loadDataFromStorage();
    }, [loadDataFromStorage])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      {isLoading === true ? (
        <LoadingContainer>
          <ActivityIndicator size={50} color={theme.colors.secondary} />
        </LoadingContainer>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: RFValue(24)
          }}
        >
          <Filter>
            <BorderlessButton onPress={() => handleDateChange('prev')}>
              <Icon name="chevron-left" />
            </BorderlessButton>

            <Month>
              {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}
            </Month>

            <BorderlessButton onPress={() => handleDateChange('next')}>
              <Icon name="chevron-right" />
            </BorderlessButton>
          </Filter>

          <ChartContainer>
            <VictoryPie
              data={totalByCategories}
              colorScale={totalByCategories.map(({ color }) => color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fill: theme.colors.shape,
                  fontWeight: 'bold'
                }
              }}
              labelRadius={110}
              x="percentage"
              y="unformattedSum"
            />
          </ChartContainer>

          {totalByCategories.map(({ name, color, formattedSum }) => (
            <ChartCard
              key={name}
              categoryName={name}
              color={color}
              amount={formattedSum}
            />
          ))}
        </ScrollView>
      )}
    </Container>
  )
}
