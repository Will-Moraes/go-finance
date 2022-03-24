import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '../Input'

import { Container, Error } from './styles'

interface IControlledInput extends TextInputProps {
  error: string
  control: Control
  name: string
}

export function ControlledInput({
  error,
  control,
  name,
  ...rest
}: IControlledInput) {
  return (
    <Container>
      {error && <Error>{error}</Error>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </Container>
  )
}
