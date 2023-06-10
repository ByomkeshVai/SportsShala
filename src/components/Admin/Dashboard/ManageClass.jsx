import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ClassDataRowAdmin from './ClassDataRowAdmin';
import EmptyState from '../../Frontend/shared/EmptyState';
import { Helmet } from 'react-helmet';

const ManageClass = () => {
     const [axiosSecure] = useAxiosSecure()
  const { user, loading } = useContext(AuthContext)
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ['classes', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        "/class"
      )

      return res.data
    },
  })
    return (
      <>
        <Helmet>
          <title>SportsShala - Manage Class</title>
        </Helmet>  
      {classes && Array.isArray(classes) && classes.length > 0 ? (
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
                        Image
                                            </th>
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
                        Category
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Seats
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Price
                                            </th>
                                             <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Instructor Name
                                            </th>
                                             <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Instructor Email
                                            </th>
                    <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Status
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
                    {classes &&
                      classes.map(classes => (
                        <ClassDataRowAdmin
                          key={classes?._id}
                          classes={classes}
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

export default ManageClass;