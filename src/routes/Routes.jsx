import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../components/Frontend/authentication/Login'
import Home from '../components/Frontend/Home'
import Signup from '../components/Frontend/authentication/Signup'
import AllInstructor from '../components/Frontend/instructor/AllInstructor'

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
      },
      {
        path: '/instructor',
        element: <AllInstructor></AllInstructor>
      }
    ]
  },
])
