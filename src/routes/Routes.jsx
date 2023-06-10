import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../components/Frontend/authentication/Login'
import Home from '../components/Frontend/Home'
import Signup from '../components/Frontend/authentication/Signup'
import AllInstructor from '../components/Frontend/instructor/AllInstructor'
import Payment from './../components/Student/Dashboard/Pyament';
import ADashboard from '../components/Admin/Dashboard/Dashboard'
import ManageClass from '../components/Admin/Dashboard/ManageClass'
import ManageInstructor from '../components/Admin/Dashboard/ManageInstructor'

import SDashboard from './../components/Student/Dashboard/Dashboard';
import SelectedClass from './../components/Student/Dashboard/SelectedClass';
import EnrolledClass from './../components/Student/Dashboard/EnrolledClass';

import IDashboard from './../components/Instructor/Dashboard/Dashboard';
import AddClass from './../components/Instructor/Dashboard/AddClass';
import MyClass from './../components/Instructor/Dashboard/MyClass';
import DetailsInstructor from '../components/Frontend/DetailsInstructor/DetailsInstructor'
import ClassArea from '../components/Frontend/classArea/ClassArea'
import ErrorPage from '../layouts/ErrorPage'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
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
      },
       {
        path: '/classes',
        element: <ClassArea></ClassArea>
      },
      {
        path: 'instructor/classes/:email',
        element: <DetailsInstructor></DetailsInstructor>,
        loader: ({params}) => fetch(`import.meta.env.VITE_API_URL/instructor/classes/${params.email}`)
      },
    ]
  },
  {
    path: '/admin/dashboard',
    element: (
        <ADashboard />
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/admin/dashboard/classes', element: <ManageClass /> },
      { path: '/admin/dashboard/users', element: <ManageInstructor /> },

    ],
  },
   {
    path: '/instructor/dashboard',
    element: (
        <IDashboard />
     ),
    errorElement: <ErrorPage />,
     children: [
      { path: '/instructor/dashboard/classes/', element: <AddClass /> },
      { path: '/instructor/dashboard/myclass', element: <MyClass /> },

    ],
  },
    {
    path: '/student/dashboard',
    element: (
        <SDashboard />
      ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/student/dashboard/classes/', element: <SelectedClass /> },
      { path: '/student/dashboard/enrolled', element: <EnrolledClass /> },

    ],
  },
])
