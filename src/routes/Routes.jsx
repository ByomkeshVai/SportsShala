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
import AdminRoute from './AdminRoute'
import InstructorRoute from './InstructorRoute'
import PrivateRoute from './PrivateRoute'
import StudentRoute from './StudentRoute'


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
        <AdminRoute><ADashboard /></AdminRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/admin/dashboard/classes', element:  <AdminRoute><ManageClass /></AdminRoute> },
      { path: '/admin/dashboard/users', element: <AdminRoute><ManageInstructor /></AdminRoute> },

    ],
  },
   {
    path: '/instructor/dashboard',
    element: (
        <InstructorRoute><IDashboard /></InstructorRoute>
     ),
    errorElement: <ErrorPage />,
     children: [
      { path: '/instructor/dashboard/classes/', element: <InstructorRoute><AddClass /></InstructorRoute> },
      { path: '/instructor/dashboard/myclass', element: <InstructorRoute><MyClass /></InstructorRoute> },

    ],
  },
    {
    path: '/student/dashboard',
    element: (
        <StudentRoute><PrivateRoute><SDashboard /></PrivateRoute></StudentRoute>
      ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/student/dashboard/classes/', element: <StudentRoute><PrivateRoute>
          <SelectedClass />
        </PrivateRoute></StudentRoute>
      },
      {
        path: '/student/dashboard/enrolled', element: <StudentRoute><PrivateRoute>
          <EnrolledClass />
        </PrivateRoute></StudentRoute>
      },

    ],
  },
])
