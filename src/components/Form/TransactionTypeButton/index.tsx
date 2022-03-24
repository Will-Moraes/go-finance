import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Border, Button, Icon, Title } from './styles'

interface ITransactionTypeButton extends RectButtonProperties {
  title: string
  type: 'income' | 'outcome'
  isActive: boolean
}

const icons = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle'
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: ITransactionTypeButton) {
  return (
    <Border isActive={isActive}>
      <Button type={type} isActive={isActive} {...rest}>
        <Icon name={icons[type]} type={type} />

        <Title>{title}</Title>
      </Button>
    </Border>
  )
}
