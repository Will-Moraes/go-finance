import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  padding-bottom: ${RFValue(19)}px;

  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(24)}px;

  align-items: center;
  justify-content: space-between;
`

export const Fields = styled.View`
  flex: 1;
  width: 100%;
`

export const TransactionsType = styled.View`
  margin: 8px 0;

  flex-direction: row;
  justify-content: space-between;
`
