import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Frontend/shared/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Logo from '../../Frontend/shared/Logo';

const Dashboard = () => {
     const { user, loading } = useAuth();
    return (
        <>
            <Helmet>
          <title>SportsShala - Instructor Dashboard</title>
            </Helmet>  
            <div className='relative min-h-screen md:flex'>
                
                <Sidebar />
                <div className='flex-1  md:ml-64'>
                      <div className='flex flex-row items-center mt-6 -mx-2'>
                <h4 className='mx-2 mt-2 text-xl text-blue-900 font-medium text-gray-800 mx-auto text-center hover:underline'>
                  Instructor Area - {user?.displayName}
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