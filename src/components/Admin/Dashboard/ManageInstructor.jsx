import React from 'react';
import UserDataRowAdmin from './UserDataRowAdmin';
import { useQuery } from '@tanstack/react-query';
import ClassDataRowAdmin from './ClassDataRowAdmin';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import EmptyState from '../../Frontend/shared/EmptyState';

const ManageInstructor = () => {
     const [axiosSecure] = useAxiosSecure()
  const { user, loading } = useContext(AuthContext)
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        "/user"
      )
      return res.data
    },
  })
    return (
          <>
      {users && Array.isArray(users) && users.length > 0 ? (
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                                        <tr>
                                             <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Name
                                            </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Email
                                            </th>
                                            <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Role
                      </th>

                                            <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
 <tbody>
                    {users &&
                      users.map(users => (
                        <UserDataRowAdmin
                          key={users?._id}
                          users={users}
                          refetch={refetch}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          message='No Class data available.'
        />
      )}
    </>
    );
};

export default ManageInstructor;