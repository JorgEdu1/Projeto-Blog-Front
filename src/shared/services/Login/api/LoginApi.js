import { api } from '../../api/axios'

export class LoginApi {
  static async login(username, password) {
    try {
      const response = await api.post('/login', { username, password })
      return response.data
    } catch (error) {
      console.error('Error:', error)
      return error
    }
  }

  static async autenticar() {
    try {
      const response = await api.get('/auth')
      return response
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }

  static async register(username, email, password) {
    try {
      const response = await api.post('/register', {
        username,
        email,
        password,
        role: 'reader',
      })
      return response.data
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }
}
