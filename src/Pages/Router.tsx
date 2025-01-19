import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import AuthGuard from '../utils/AuthDefender'
const ForgotPassword = React.lazy(() => import('./Auth/ForgotPassword'))
const Auth = React.lazy(() => import('../Pages/Auth/Auth'))
const Login = React.lazy(() => import('../Pages/Auth/Login'))
const Signup = React.lazy(() => import('../Pages/Auth/Signup'))
const DashBoard = React.lazy(() => import('../Pages/DashBoard/DashBoard'))
const MainLayout = React.lazy(() => import('../Pages/DashBoard/Mainlayout'))
const Profile = React.lazy(() => import('../Pages/DashBoard/Profile'))
const Router = () => {
  const router = [
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        { path: 'Signup', element: <Signup /> },
        {
          path: 'forgot-password',
          element: <ForgotPassword />,
        },
      ],
    },
    {
      path: '/app',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'dashboard',
          element: <DashBoard />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/',
      element: <Navigate to={'auth/login'} />,
    },
  ]
  return useRoutes(router)
}

export default Router
