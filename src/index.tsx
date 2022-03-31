import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway'

import Routes from './routes/Routes'
import theme from './global/theme'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  )
}
