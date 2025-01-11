import { useState } from 'react'
import Input from '../../components/Input'
import RoundedButton from '../../components/RoundedButton'
import { IForgotPass } from '../../types/interfaces'
const ForgotPassword = () => {
  const [Restoptions, setResetpassword] = useState<IForgotPass>({
    email: '',
    newpassword: '',
  })

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResetpassword((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className=' bg-white h-1/2 w-3/4 md:w-1/2 lg:w-1/3 flex flex-col items-center  border-white'>
      <h3>Forgot Password</h3>
      <div className='w-full h-full flex flex-col justify-between p-5 gap-4'>
        <Input value={Restoptions.email} label='email' onChange={onChange} />
        <Input
          value={Restoptions.newpassword}
          label='newpassword'
          onChange={onChange}
        />
        <RoundedButton label='Reset Password' />
      </div>
    </div>
  )
}
export default ForgotPassword
