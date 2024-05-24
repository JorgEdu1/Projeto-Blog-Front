import styled from 'styled-components'

import { UserCircle } from 'phosphor-react'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -1rem;
  z-index: 0;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  color: ${({ theme }) => theme.Colors.TEXT};
  padding: 1.2rem;
  border-radius: 0 0 10px 10px;
`

export const LogoSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
`

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.Colors.TEXT};

  transition: 0.2s ease-in-out all;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.Colors.OUTLINE};
  }
`

export const Item = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.Colors.TEXT};

  transition: 0.2s ease-in-out all;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.Colors.OUTLINE};
  }
`

export const UserIcon = styled(UserCircle)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.Colors.TEXT};
  margin-right: 0.5rem;

  transition: 0.2s ease-in-out all;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.Colors.OUTLINE};
  }
`

export const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.TEXT};
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 0.5rem;
`

export const PopoverItem = styled.button`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.Colors.TEXT};
  transition: 0.2s ease-in-out all;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.Colors.OUTLINE};
  }
`
