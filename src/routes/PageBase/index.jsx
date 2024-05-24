import { Outlet } from 'react-router-dom'

import Header from '../../shared/components/Header'

import { Container } from './style'

export function PageBase() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default PageBase
