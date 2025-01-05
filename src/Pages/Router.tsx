import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import AuthGuard from '../utils/AuthDefender'
const Auth = React.lazy(() => import('../Pages/Auth/Auth'))
const Login = React.lazy(() => import('../Pages/Auth/Login'))
const Signup = React.lazy(() => import('../Pages/Auth/Signup'))
const DashBoard = React.lazy(() => import('../Pages/DashBoard/DashBoard'))

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        { path: 'Signup', element: <Signup /> },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <DashBoard />,
        </AuthGuard>
      ),
    },
    {
      path: '/',
      element: <Navigate to={'auth/login'} />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
