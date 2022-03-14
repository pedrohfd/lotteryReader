import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { ButtonList, Container } from './styles'

export function SelectGame() {
  const data = [
    'Mega-Sena',
    'Lotofacil',
    'Quina',
    'Lotomania',
    'Timemania',
    'Dupla-Sena',
    'Loteria-Federal',
    'Dia-de-Sorte',
    'Super-Sete',
  ]

  return (
    <Container>
      <Header />

      <ButtonList
        data={data}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => <Button onPress={() => {}}>{item}</Button>}
      />
    </Container>
  )
}
