import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { ITrasactionDataProps } from '../../components/TransactionCard'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  width: 100%;
  align-items: flex-start;
  flex-direction: row;

  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0px 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 5px;
`

export const User = styled.View`
  margin-left: 17px;
`

export const UserGreenting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const LogOutButton = styled(BorderlessButton)`
  border-radius: 5px;
  padding: ${RFValue(10)}px;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const CardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 24
  }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(21)}px;
`

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`

export const Title = styled.Text`
  margin-bottom: ${RFValue(16)}px;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`

export const TransactionList = styled(
  FlatList as new () => FlatList<ITrasactionDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() }
})``
