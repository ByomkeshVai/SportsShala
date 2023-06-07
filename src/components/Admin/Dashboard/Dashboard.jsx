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
            <div className='relative min-h-screen md:flex'>
                <h2 className="text-3xl">Hi, {user.displayName}</h2>
                <Sidebar />
                <div className='flex-1  md:ml-64'>
                    <div className='p-5'>
                    <Outlet />
                    </div>
                </div>
                </div>
        </>
    );
};

export default Dashboard;