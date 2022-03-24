import React from 'react'

import { Button } from '../../components/Form/Button'
import { categories } from '../../utils/categories'

import {
  Container,
  Header,
  Title,
  List,
  ListSeparetor,
  ListItem,
  Icon,
  Name,
  Footer
} from './styles'

export type ICategoryProps = typeof categories[0]

interface ICategoryModalProps {
  category: Omit<ICategoryProps, 'icon' | 'color'>
  setCategory: (category: Omit<ICategoryProps, 'icon' | 'color'>) => void
  toggleVisibility: () => void
}

export function CategoryModal({
  category,
  setCategory,
  toggleVisibility
}: ICategoryModalProps) {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <List
        data={categories}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <ListSeparetor />}
        renderItem={({ item }) => (
          <ListItem onPress={() => setCategory(item)}>
            <Icon name={item.icon} />
            <Name isItemSelected={item.key === category.key}>{item.name}</Name>
          </ListItem>
        )}
      />

      <Footer>
        <Button title="Selecionar" onPress={toggleVisibility} />
      </Footer>
    </Container>
  )
}
