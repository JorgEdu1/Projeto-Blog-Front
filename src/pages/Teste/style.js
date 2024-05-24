import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88.5vh;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.TEXT};
`
