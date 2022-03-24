import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IContainerProps {
  color: string
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  padding: ${RFValue(13)}px ${RFValue(24)}px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
`

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`
