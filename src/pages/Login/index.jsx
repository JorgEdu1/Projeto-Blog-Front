import React from 'react'
import zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/auth'
import LoadingComponent from '../../shared/components/LoadingComponent'
import {
  Container,
  LoginBox,
  LoginSection,
  Title,
  Input,
  ButtonSection,
  Button,
  Error,
  ErrorContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

const schema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Pelo menos 3 caracteres' })
    .max(15, { message: 'No máximo 20 caracteres' }),
  password: zod.string().min(6, { message: 'Pelo menos 6 caracteres' }),
})

const LoginPage = () => {
  const Navigate = useNavigate()
  const { logado, login, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password)
    } catch (error) {
      console.log('Error:', error)
    }
  }

  if (loading) {
    return <LoadingComponent />
  } else if (logado) {
    window.location.href = '/teste'
  }

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginSection>
            <Input
              type="text"
              placeholder="Username"
              {...register('username')}
            />
            <ErrorContainer>
              {errors.username && <Error>{errors.username.message}</Error>}
            </ErrorContainer>
            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <ErrorContainer>
              {errors.password && <Error>{errors.password.message}</Error>}
            </ErrorContainer>
            <ButtonSection>
              <Button type="submit">Logar</Button>
              <Button type="button" onClick={() => Navigate('/register')}>
                Registro
              </Button>
            </ButtonSection>
          </LoginSection>
        </form>
      </LoginBox>
    </Container>
  )
}

export default LoginPage
