import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login'
import Teste from '../pages/Teste'
import ProtectedLayout from '../layouts/ProtectedLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/teste"
        element={
          <ProtectedLayout>
            <Teste />
          </ProtectedLayout>
        }
      />
    </Routes>
  )
}
