import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface ITypeProps {
  type: 'income' | 'outcome'
}

interface IBorderProps {
  isActive: boolean
}

interface IButtonProps extends ITypeProps {
  isActive: boolean
}

export const Border = styled.View<IBorderProps>`
  width: 48%;
  border-radius: 5px;

  ${({ isActive }) =>
    !isActive &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.border};
    `};
`

export const Button = styled(RectButton)<IButtonProps>`
  padding: ${RFValue(16)}px;
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.shape};

  ${({ isActive, type }) =>
    isActive &&
    type === 'income' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === 'outcome' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`

export const Title = styled.Text`
  margin-left: ${RFValue(16)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const Icon = styled(Feather)<ITypeProps>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === 'income' ? theme.colors.success : theme.colors.attention};
`
