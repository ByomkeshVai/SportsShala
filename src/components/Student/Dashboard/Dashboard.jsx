import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Frontend/shared/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    return (
        <>
           
        </>
    );
};

export default Dashboard;