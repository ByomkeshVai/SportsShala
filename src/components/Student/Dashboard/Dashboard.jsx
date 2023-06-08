import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Frontend/shared/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Outlet } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    return (
       <>
            <div className='relative min-h-screen md:flex'>
                <h2>Student Dashboard</h2>
                <StudentSidebar />
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