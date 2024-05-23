import { Navigate } from 'react-router-dom'
import LoadingComponent from '../shared/components/LoadingComponent'
import { useAuth } from '../hooks/auth'

function ProtectecLayout({ children }) {
  const { isAutenticado, loading } = useAuth()

  if (loading) {
    return <LoadingComponent />
  } else {
    if (isAutenticado) {
      return children
    }
    return <Navigate to="/login" />
  }
}

export default ProtectecLayout
