import React from 'react'

import { Container, CategoryName, Amount } from './styles'

interface IChartCardProps {
  color: string
  categoryName: string
  amount: string
}

export function ChartCard({ color, categoryName, amount }: IChartCardProps) {
  return (
    <Container color={color}>
      <CategoryName>{categoryName}</CategoryName>
      <Amount>{amount}</Amount>
    </Container>
  )
}
