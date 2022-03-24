import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, ActivityIndicator, Platform } from 'react-native';
import { useTheme } from 'styled-components';

import { useAuth } from '../../hooks/auth';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import LogoSVG from '../../assets/logo.svg';
import AppleSVG from '../../assets/apple.svg';
import GoogleSVG from '../../assets/google.svg';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles'

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { GoogleSignIn, AppleSignIn } = useAuth();

  const theme = useTheme();

  async function handleSingInGoogle() {
    try {
      setIsLoading(true);
      return await GoogleSignIn()
    } catch (error) {
      console.log(error);
      Alert.alert('Oops!', 'Não foi possível conectar sua conta Google');
      setIsLoading(false);
    }
      
  }

  async function handleSignInApple() {
    try {
      setIsLoading(true);
      return await AppleSignIn()
    } catch (error) {
      console.log(error)
      Alert.alert('Oops!', 'Não foi possível conectar sua conta Apple');
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSVG width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas{'\n'}
            finanças de forma{'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com{'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            svg={() => <GoogleSVG />}
            title="Entrar com Google"
            onPress={handleSingInGoogle}
          />
          {
            Platform.OS === 'ios' &&
          <SignInSocialButton
            svg={() => <AppleSVG />}
            title="Entrar com Apple"
            onPress={handleSignInApple}
          />
          }
        </FooterWrapper>

        {isLoading && 
          <ActivityIndicator 
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        }
      </Footer>
    </Container>
  )
}
