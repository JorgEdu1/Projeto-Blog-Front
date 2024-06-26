import { LoginApi } from './api/LoginApi'

export class LoginService {
  static async login(username, password) {
    try {
      const response = await LoginApi.login(username, password)
      return response
    } catch (error) {
      console.error('Error:', error)
      return error
    }
  }

  static async autenticar() {
    try {
      const response = await LoginApi.autenticar()
      return response
    } catch (error) {
      console.error('Error:', error)
      return false
    }
  }

  static async register(username, email, password) {
    try {
      const response = await LoginApi.register(username, email, password)
      return response
    } catch (error) {
      console.error('Error:', error)
      return false
    }
  }
}
