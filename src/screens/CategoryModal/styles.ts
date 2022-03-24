import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import {
  GestureHandlerRootView,
  RectButton
} from 'react-native-gesture-handler'

import { ICategoryProps } from './'

interface INameProps {
  isItemSelected: boolean
}

export const Container = styled(GestureHandlerRootView)`
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
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`

export const List = styled(
  FlatList as new () => FlatList<ICategoryProps>
).attrs({
  showsHorizontalScrollIndicator: false
})`
  width: 100%;
`
export const ListSeparetor = styled.View`
  align-self: flex-end;
  width: 95%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.border};
`
export const ListItem = styled(RectButton)`
  padding: ${RFValue(14)}px ${RFValue(24)}px;

  align-items: center;
  flex-direction: row;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const Name = styled.Text<INameProps>`
  margin-left: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ isItemSelected }) =>
    isItemSelected &&
    css`
      font-family: ${({ theme }) => theme.fonts.bold};
    `}
`

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(24)}px;
`
