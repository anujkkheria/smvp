import React, { useState } from 'react'
import Input from '../../components/Input'
const Login = () => {
  interface Iloginoptions {
    email: string
    password: string
  }
  const [loginOptions, setLoginOptions] = useState<Iloginoptions>({
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
  return (
    <div className='size-3/4 bg-slate-200 p-5'>
      <h2 className='text-center'>Login</h2>
      <div className='flex flex-col gap-5'>
        <Input label={'email'} value={loginOptions.email} onChange={onChange} />
        <Input
          label={'password'}
          value={loginOptions.password}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
export default Login
