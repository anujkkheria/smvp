import React, { createContext, useState } from 'react'
import { useSnackbar } from 'notistack'
import {
  AuthContextType,
  ILoginOptions,
  ISignupoptions,
  User,
  IForgotPass,
} from '../types/interfaces'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { enqueueSnackbar } = useSnackbar()
  const Baseurl = import.meta.env.VITE_BASE_URL
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
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
      enqueueSnackbar('Successfully Created', { variant: 'success' })
      const data = await response.json()
      // localStorage.setItem('user', .token)
      setUser(data.body.user)
      navigate('/app/dashboard')
      // navigate('/dashboard')
    } catch (error) {
      enqueueSnackbar('Failed to Signup', { variant: 'error' })
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
    setIsLoggedIn(false)
    // }
  }
  const forgotpassword = async (Resetoptions: IForgotPass) => {
    try {
      const data = await fetch(`${Baseurl}/auth/forgot-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Resetoptions),
      })
      console.log(data)
    } catch (e) {
      alert(`Failed to update password ${e}`)
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, login, logout, signup, forgotpassword }}
    >
      {children}
    </AuthContext.Provider>
  )
}
