import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

import { AuthProvider, useAuth } from './src/hooks/auth'
import { Routes } from './src/routes'
import { SignIn } from './src/screens/SignIn'
import theme from './src/global/styles/theme'

export function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular
  });

  const { userStorageLoading } = useAuth();

  if (!isFontsLoaded || userStorageLoading) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}
