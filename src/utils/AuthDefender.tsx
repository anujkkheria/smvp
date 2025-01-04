import React, { ReactNode, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
interface IAuthGuard {
  children: ReactNode
}
const AuthGuard: React.FC<IAuthGuard> = ({ children }) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth/login', { replace: true })
    }
  }, [isLoggedIn])
  return children
}
export default AuthGuard
