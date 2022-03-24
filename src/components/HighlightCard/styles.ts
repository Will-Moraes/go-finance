import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface ITypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<ITypeProps>`
  width: ${RFValue(300)}px;
  margin-right: 16px;
  padding: 19px 23px;
  padding-bottom: 42px;
  border-radius: 5px;

  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const Title = styled.Text<ITypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`

export const Icon = styled(Feather)<ITypeProps>`
  font-size: ${RFValue(40)}px;

  color: ${({ theme }) => theme.colors.success};

  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`

export const Footer = styled.View``

export const Amount = styled.Text<ITypeProps>`
  margin-top: 38px;
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`

export const LastTransaction = styled.Text<ITypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`
