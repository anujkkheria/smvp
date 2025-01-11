import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Drawer from '../../components/Drawer'
const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className='p-12'>
        <Drawer />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
