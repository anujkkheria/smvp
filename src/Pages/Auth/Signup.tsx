import React, { useState } from 'react'
import Input from '../../components/Input'
import RoundedButton from '../../components/RoundedButton'
const Signup = () => {
  interface ISignupoptions {
    email: string
    password: string
    confirmPassword: string
    role: string
    organization: string
  }
  const [signupOptions, setLoginOptions] = useState<ISignupoptions>({
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    organization: '',
  })
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginOptions((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className='size-11/12  bg-slate-200 p-4 flex flex-col'>
      <h2 className='text-center'>Signup</h2>
      <div className='size-full flex flex-col gap-6 justify-center'>
        <Input
          label={'email'}
          value={signupOptions.email}
          onChange={onChange}
        />
        <Input
          label={'password'}
          value={signupOptions.password}
          onChange={onChange}
        />
        <Input
          label='confirmPassword'
          value={signupOptions.confirmPassword}
          onChange={onChange}
        />
        <Input
          label='role'
          value={signupOptions.confirmPassword}
          onChange={onChange}
        />
        <Input
          label='organization'
          value={signupOptions.organization}
          onChange={onChange}
        />
        <RoundedButton label={'Submit'} onClick={() => {}} />
      </div>
    </div>
  )
}
export default Signup
