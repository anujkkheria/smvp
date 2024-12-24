import React, { useState } from 'react'
import Input from '../../components/Input'
import RoundedButton from '../../components/RoundedButton'
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
    <div className='size-4/5 bg-slate-200 p-8 flex flex-col justify-center'>
      <h2 className='text-center'>Login</h2>
      <div className='flex flex-col gap-10 justify-center'>
        <Input label={'email'} value={loginOptions.email} onChange={onChange} />
        <Input
          label={'password'}
          value={loginOptions.password}
          onChange={onChange}
        />
        <div className='flex justify-between px-3'>
          <div>Remember me</div>
          <div>Forgot Password</div>
        </div>
        <RoundedButton label={'Submit'} onClick={() => {}} />
      </div>
    </div>
  )
}
export default Login
