import React from 'react'
import { RNButtonText, RNButton } from './styles'

export function Button({ children, onPress }) {
  return (
    <RNButton onPress={onPress}>
      <RNButtonText>{children}</RNButtonText>
    </RNButton>
  )
}
