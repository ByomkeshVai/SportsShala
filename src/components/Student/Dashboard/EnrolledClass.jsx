import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import EmptyState from '../../Frontend/shared/EmptyState';
import StudentDataRow from './StudentDataRow';

const EnrolledClass = () => {
         const [axiosSecure] = useAxiosSecure()
  const { user, loading } = useContext(AuthContext)
  const { refetch, data: enroll = [] } = useQuery({
    queryKey: ['enroll', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
       `${import.meta.env.VITE_API_URL}/select/${user?.email}`
      )

      return res.data
    },
  })
    
    
    
    return (
         <>
      {enroll && Array.isArray(enroll) && enroll.length > 0 ? (
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
                        Your Email
                                            </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Date
                                            </th>
                                            <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Selected Classes
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Total Price
                                            </th>
                                             <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Transaction Id
                                            </th>
                                            <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Status
                                            </th>
                    </tr>
                  </thead>
 <tbody>
                    {enroll &&
                      enroll.map(enroll => (
                        <StudentDataRow
                          key={enroll?._id}
                          enroll={enroll}
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

export default EnrolledClass;