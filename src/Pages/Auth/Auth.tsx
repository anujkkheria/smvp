import { Outlet } from 'react-router-dom'
const Auth = () => {
  return (
    <div className=' w-screen h-screen bg-slate-900 flex justify-center items-center'>
      <Outlet />
    </div>
  )
}

export default Auth
