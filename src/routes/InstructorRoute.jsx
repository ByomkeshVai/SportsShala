import React from 'react';
import useInstructor from '../hooks/useInstructor';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from "react-router";
import Loader from '../components/Frontend/shared/Loader';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, InstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || InstructorLoading){
        return <Loader></Loader>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;