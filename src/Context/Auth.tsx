import React, { createContext, useState } from 'react'

import {
  AuthContextType,
  ILoginOptions,
  ISignupoptions,
  User,
} from '../types/interfaces'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const Baseurl = import.meta.env.VITE_BASE_URL
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  // const navigate = useNavigate()

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

  const login = async (loginOptions: ILoginOptions) => {
    try {
      const response = await fetch(`${Baseurl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...loginOptions }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      setIsLoggedIn(true)
      console.log(data, data.data)
      setUser(data.data)
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const signup = async (signupOptions: ISignupoptions) => {
    try {
      const response = await fetch(`${Baseurl}/auth/Signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupOptions),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const data = await response.json()
      console.log('data', data)
      // localStorage.setItem('user', .token)
      // setUser(data)
      // navigate('/dashboard')
    } catch (error) {
      throw new Error('Registration failed')
    }
  }

  const logout = async () => {
    // try {
    // Optional: Call logout endpoint if your API requires it
    //   if (user?.token) {
    //     await fetch(`${Baseurl}/auth/logout`, {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     })
    //   }
    // } finally {
    //   localStorage.removeItem('token')
    setUser(null)
    // }
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}
