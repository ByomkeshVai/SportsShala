import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from "react-router";
import Loader from '../components/Frontend/shared/Loader';
import useStudent from '../hooks/useStudent';


const StudentRoute = () => {
   const { user, loading } = useAuth();
    const [isStudent, StudentLoading] = useStudent();
    const location = useLocation();

    if(loading || StudentLoading){
        return <Loader></Loader>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default StudentRoute;