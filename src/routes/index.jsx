import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import Teste from '../pages/Teste'
import ProtectedLayout from '../layouts/ProtectedLayout'
import PageBase from './PageBase'
import { useAuth } from '../hooks/auth'

export const Router = () => {
  const { isAutenticado } = useAuth()
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {isAutenticado ? (
        <Route path="/" element={<PageBase />}>
          <Route
            path="/teste"
            element={
              <ProtectedLayout>
                <Teste />
              </ProtectedLayout>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedLayout>
                <Teste />
              </ProtectedLayout>
            }
          />
        </Route>
      ) : (
        <Route path="*" element={<LoginPage />} />
      )}
    </Routes>
  )
}
