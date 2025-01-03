import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
      path: '/DashBoard',
      element: <DashBoard />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
