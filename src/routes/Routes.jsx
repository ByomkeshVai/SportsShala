import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../components/Frontend/authentication/Login'
import Home from '../components/Frontend/Home'
import Signup from '../components/Frontend/authentication/Signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
    {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Signup></Signup>
      }
    ]
  },
])
