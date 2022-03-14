import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Button } from '../../components/Button'
import { RouteProps } from '../../routes/Routes.props'
import { Container, Title } from './styles'

type NavigationProp = NativeStackNavigationProp<RouteProps, 'Home'>

export function Home() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <Container>
      <Title>Loteria</Title>

      <Button onPress={() => navigation.navigate('SelectGame')}>Checar</Button>
    </Container>
  )
}
