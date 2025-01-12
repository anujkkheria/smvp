import React, { useState } from 'react'
import Input from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import RoundedButton from '../../components/RoundedButton'
import { ILoginOptions } from '../../types/interfaces'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [loginOptions, setLoginOptions] = useState<ILoginOptions>({
    email: '',
    password: '',
  })
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginOptions((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleClick = async () => {
    await login(loginOptions)
    navigate('/app/dashboard')
  }
  return (
    <div className='max-w-md mx-auto bg-slate-200 p-8 flex flex-col justify-center'>
      <h2 className='text-center'>Login</h2>
      <div className='flex flex-col gap-10 justify-center'>
        <Input label={'email'} value={loginOptions.email} onChange={onChange} />
        <Input
          label={'password'}
          value={loginOptions.password}
          onChange={onChange}
        />
        <div className='flex justify-between gap-12 px-3'>
          <div>Remember me</div>
          <div>
            <a href='/auth/forgot-password'>Forgot Password</a>
          </div>
        </div>
        <RoundedButton label={'Submit'} onClick={() => handleClick()} />
        <div className='flex justify-center'>
          <a href='/auth/signup'>Signup</a>
        </div>
      </div>
    </div>
  )
}
export default Login
