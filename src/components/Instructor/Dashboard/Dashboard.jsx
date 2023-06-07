import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Frontend/shared/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
     const { user, loading } = useAuth();
    return (
        <>
            <div className='relative min-h-screen md:flex'>
                
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