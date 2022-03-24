import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, Title, Icon } from './styles'

interface ICategorySelectButtonProps extends RectButtonProperties {
  title: string
}

export function CategorySelectButton({
  title,
  ...rest
}: ICategorySelectButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  )
}
