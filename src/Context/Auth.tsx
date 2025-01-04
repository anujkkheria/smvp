import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  signup: (
    email: string,
    password: string,
    name: string,
    role: string
  ) => Promise<void>
}

interface User {
  id: string
  email: string
  name: string
  token: string
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const Baseurl = import.meta.env.VITE_BASE_URL
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  // useEffect(() => {
  //   // Check for stored token on mount
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     validateToken(token)
  //   } else {
  //     setIsLoading(false)
  //   }
  // }, [])

  // const validateToken = async (token: string) => {
  //   try {
  //     const response = await fetch('YOUR_API_URL/auth/validate', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })

  //     if (response.ok) {
  //       const userData = await response.json()
  //       setUser({ ...userData, token })
  //     } else {
  //       localStorage.removeItem('token')
  //     }
  //   } catch (error) {
  //     localStorage.removeItem('token')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${Baseurl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)
      setUser(data)
      navigate('/dashboard')
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    try {
      const response = await fetch(`${Baseurl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)
      setUser(data)
      navigate('/dashboard')
    } catch (error) {
      throw new Error('Registration failed')
    }
  }

  const logout = async () => {
    try {
      // Optional: Call logout endpoint if your API requires it
      if (user?.token) {
        await fetch('YOUR_API_URL/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
      }
    } finally {
      localStorage.removeItem('token')
      setUser(null)
      navigate('/login')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}
