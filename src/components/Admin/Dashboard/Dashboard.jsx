import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Frontend/shared/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    return (
        <>
            <Helmet>
          <title>SportsShala - Admin Dashboard</title>
        </Helmet>  
            <div className='relative min-h-screen md:flex'>
                
                <AdminSidebar />
                <div className='flex-1  md:ml-64'>
                     <div className='flex flex-row items-center mt-6 -mx-2'>
                <h4 className='mx-2 mt-2 text-xl text-blue-900 font-medium text-gray-800 mx-auto text-center hover:underline'>
                  Admin Area - {user?.displayName}
                </h4>
                        </div>
                    <div className='p-5'>
                    <Outlet />
                    </div>
                </div>
                </div>
        </>
    );
};

export default Dashboard;