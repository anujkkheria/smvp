import React, { useState } from 'react'
import Input from '../../components/Input'
import RoundedButton from '../../components/RoundedButton'
import { useAuth } from '../../hooks/useAuth'
import { ISignupoptions } from '../../types/interfaces'

const Signup = () => {
  const [signupOptions, setLoginOptions] = useState<ISignupoptions>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  })
  const { signup } = useAuth()
  const handleClick = () => {
    signup(signupOptions)
  }
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginOptions((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className='max-w-md mx-auto h-auto bg-slate-200 p-6 flex flex-col justify-center'>
      <h2 className='text-center'>Signup</h2>
      <div className='flex flex-col gap-6 justify-center'>
        <Input
          label={'name'}
          value={signupOptions.name}
          onChange={onChange}
          type='text'
        />
        <Input
          label={'email'}
          value={signupOptions.email}
          onChange={onChange}
          type='text'
        />
        <Input
          label={'password'}
          value={signupOptions.password}
          onChange={onChange}
          type='password'
        />
        <Input
          label='confirmPassword'
          value={signupOptions.confirmPassword}
          onChange={onChange}
          type='password'
        />
        <Input
          label='role'
          value={signupOptions.role}
          onChange={onChange}
          type='text'
        />
        <RoundedButton label={'Submit'} onClick={() => handleClick()} />
      </div>
    </div>
  )
}
export default Signup
