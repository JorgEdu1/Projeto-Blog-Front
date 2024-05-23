import { useEffect, useState, createContext, useContext } from 'react'
import { api } from '../shared/services/api/axios'
import { LoginService } from '../shared/services/Login/LoginService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAutenticado, setIsAutenticado] = useState(false)

  const autenticado = async () => {
    try {
      const tokenStoraged = localStorage.getItem('token')
      if (!tokenStoraged) {
        return false
      }
      api.defaults.headers.common.authorization = `${tokenStoraged}`
      const response = await LoginService.autenticar()
      if (response?.status !== 200) {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        return false
      }
      return true
    } catch (error) {
      console.error('Error:', error)
      return false
    }
  }

  useEffect(() => {
    const auth = async () => {
      const userStoraged = localStorage.getItem('user')
      const userAutenticado = await autenticado()
      if (userAutenticado) {
        setUsuario(JSON.parse(userStoraged))
      } else {
        setUsuario(null)
      }
      setIsAutenticado(userAutenticado)
      setLoading(false)
    }

    auth()
  }, [])

  const login = async (username, password) => {
    try {
      const response = await LoginService.login(username, password)
      const user = {
        username: response.username,
      }
      const token = response.token
      setUsuario(user)
      setIsAutenticado(true)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
      api.defaults.headers.common.authorization = `${token}`

      return true
    } catch (error) {
      console.log('Error:', error)
      return false
    }
  }

  const logout = () => {
    setUsuario(null)
    setIsAutenticado(false)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    api.defaults.headers.common.authorization = undefined
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        usuario,
        loading,
        logado: !!usuario,
        autenticado,
        isAutenticado,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
