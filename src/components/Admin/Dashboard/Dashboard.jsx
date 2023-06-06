import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <>
             <h2 className="text-3xl">Hi, {user.displayName}</h2>
       
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