import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.Colors.ON_PRIMARY};
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.ON_PRIMARY};
`

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.TEXT};
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:hover {
    background-color: ${({ theme }) => theme.Colors.OUTLINE};
    color: ${({ theme }) => theme.Colors.ON_PRIMARY};
  }
`

export const ErrorContainer = styled.div`
  min-height: 25px;
`

export const Error = styled.span`
  color: red;
  font-size: 8px;
  margin-top: -5px;
`
