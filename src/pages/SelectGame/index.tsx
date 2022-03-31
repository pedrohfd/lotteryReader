import React from 'react'
import { Button } from '../../components/Button'
import useGameStore from '../../store/game.store'
import { ButtonList, Container } from './styles'

export function SelectGame() {
  const { games } = useGameStore()

  return (
    <Container>
      <ButtonList
        data={games}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => <Button onPress={() => {}}>{item}</Button>}
      />
    </Container>
  )
}
