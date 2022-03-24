import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(70)}px;

  background-color: ${props => props.theme.colors.primary};

  justify-content: flex-end;
  align-items: center;
`

export const TitleWrapper = styled.View`
  align-items: center;
`

export const Title = styled.Text`
  text-align: center;
  margin-top: ${RFValue(40)}px;

  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${props => props.theme.colors.shape};
`

export const SignInTitle = styled.Text`
  text-align: center;
  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(40)}px;

  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${props => props.theme.colors.shape};
`

export const Footer = styled.View`
  flex: 1;

  background-color: ${props => props.theme.colors.secondary};
`
export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 ${RFValue(32)}px;

  justify-content: space-between;
`
