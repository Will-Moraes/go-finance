import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled(RectButton)`
  width: 100%;
  margin: 8px 0;
  padding: ${RFValue(18)}px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`
