import React from 'react'
import zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginService } from '../../shared/services/Login/LoginService'
import { useNavigate } from 'react-router-dom'
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
import { useToast } from '../../hooks/toast'

const schema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Pelo menos 3 caracteres' })
    .max(15, { message: 'No máximo 20 caracteres' }),
  email: zod.string().email({ message: 'E-mail inválido' }),
  password: zod.string().min(6, { message: 'Pelo menos 6 caracteres' }),
})

const RegisterPage = () => {
  const { addToast } = useToast()
  const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const response = await LoginService.register(
        data.username,
        data.email,
        data.password,
      )
      if (response) {
        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Usuário registrado, faça login!',
        })
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <Container>
      <LoginBox>
        <Title>Registrar</Title>
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
            <Input type="e-mail" placeholder="E-mail" {...register('email')} />
            <ErrorContainer>
              {errors.email && <Error>{errors.email.message}</Error>}
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
              <Button type="submit">Registrar</Button>
              <Button type="button" onClick={() => Navigate('/login')}>
                Logar
              </Button>
            </ButtonSection>
          </LoginSection>
        </form>
      </LoginBox>
    </Container>
  )
}

export default RegisterPage
