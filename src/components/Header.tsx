import { AppBar } from '@mui/material'
import { useAuth } from '../hooks/useAuth'
import { Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const HandleLogout = () => {
    logout()
    navigate('/auth/login')
  }
  return (
    <AppBar className='h-12 w-screen px-4 flex flex-row justify-between items-center'>
      <h2>Logo</h2>
      <h3 className='h-4 text-white'>{user?.name}</h3>
      <button className='rounded-full h-10 w-10' onClick={() => HandleLogout()}>
        <Logout />
      </button>
    </AppBar>
  )
}

export default Header
