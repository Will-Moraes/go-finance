import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { Container, SVGContainer, Title } from './styles'

interface ISignInSocialButtonProps extends RectButtonProperties {
  title: string
  svg: React.FC<SvgProps>
}

export function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: ISignInSocialButtonProps) {
  return (
    <Container {...rest}>
      <SVGContainer>
        <Svg />
      </SVGContainer>

      <Title>{title}</Title>
    </Container>
  )
}
