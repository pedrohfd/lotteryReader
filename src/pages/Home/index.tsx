import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Button } from '../../components/Button'
import { RouteProps } from '../../routes/Routes.props'
import { Container, Title } from './styles'
import useGameStore from '../../store/game.store'

type NavigationProp = NativeStackNavigationProp<RouteProps, 'Home'>

export function Home() {
  const navigation = useNavigation<NavigationProp>()
  const { getGames } = useGameStore()

  useEffect(() => {
    getGames()
  }, [])

  return (
    <Container>
      <Title>Loteria</Title>

      <Button onPress={() => navigation.navigate('SelectGame')}>Checar</Button>
    </Container>
  )
}
