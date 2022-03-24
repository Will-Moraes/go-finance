import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, Title } from './styles'

interface IButtonProps extends RectButtonProperties {
  title: string
  // to solve problem with hook form
  onPress: () => void
}

export function Button({ title, onPress, ...rest }: IButtonProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
