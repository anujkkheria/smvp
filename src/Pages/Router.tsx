import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Auth = React.lazy(() => import('../Pages/Auth/Auth'))
const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Auth />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
