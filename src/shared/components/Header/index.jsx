import {
  Container,
  Logo,
  LogoSection,
  Item,
  UserIcon,
  PopoverContainer,
  PopoverItem,
} from './style'
import React from 'react'
import Popover from '../../../Generics/Popover'
import { useAuth } from '../../../hooks/auth'

const Header = () => {
  const { logout } = useAuth()

  const content = {
    Trigger: <UserIcon />,
    Content: (
      <PopoverContainer>
        <PopoverItem>Perfil</PopoverItem>
        <PopoverItem>Configurações</PopoverItem>
        <PopoverItem onClick={() => logout()}>Sair</PopoverItem>
      </PopoverContainer>
    ),
  }
  return (
    <Container>
      <LogoSection>
        <Logo>Blog</Logo>
        <Item>Home</Item>
        <Item>Sobre</Item>
      </LogoSection>
      <Popover content={content} />
    </Container>
  )
}

export default Header
