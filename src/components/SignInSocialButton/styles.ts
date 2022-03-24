import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  height: ${RFValue(56)}px;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${RFValue(16)}px;

  border-radius: 5px;

  background-color: ${props => props.theme.colors.shape};
`

export const SVGContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;

  border-color: ${props => props.theme.colors.background};
  border-right-width: 1px;
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${props => props.theme.colors.title};
`
