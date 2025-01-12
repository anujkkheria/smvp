import { useState } from 'react'
import Input from '../../components/Input'
import RoundedButton from '../../components/RoundedButton'
import { IForgotPass } from '../../types/interfaces'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
const ForgotPassword = () => {
  const [resetoptions, setResetpassword] = useState<IForgotPass>({
    email: '',
    newpassword: '',
  })
  const navigate = useNavigate()
  const { forgotpassword } = useAuth()
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResetpassword((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const onSubmit = () => {
    forgotpassword(resetoptions)
    navigate('/auth/login')
  }

  return (
    <div className=' bg-white h-1/2 w-3/4 md:w-1/2 lg:w-1/3 flex flex-col items-center  border-white'>
      <h3>Forgot Password</h3>
      <div className='w-full h-full flex flex-col justify-between p-5 gap-4'>
        <Input value={resetoptions.email} label='email' onChange={onChange} />
        <Input
          value={resetoptions.newpassword}
          label='newpassword'
          onChange={onChange}
        />
        <RoundedButton label='Reset Password' onClick={onSubmit} />
      </div>
    </div>
  )
}
export default ForgotPassword
