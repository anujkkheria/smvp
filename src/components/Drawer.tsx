import { useState } from 'react'
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { logout } = useAuth()

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/app/dashboard' },
    { text: 'Profile', icon: <SettingsIcon />, path: '/app/profile' },
  ]

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <MUIDrawer anchor='left' open={open} onClose={toggleDrawer}>
        <List className=' h-1/2 w-full'>
          {menuItems.map((item) => (
            <ListItem
              component='div'
              key={item.text}
              onClick={() => {
                navigate(item.path)
                toggleDrawer()
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider />
          <ListItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </MUIDrawer>
    </>
  )
}

export default Sidebar
