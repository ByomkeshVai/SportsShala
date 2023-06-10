import React from 'react';
import useSelect from '../../../hooks/useSelect';
import EmptyState from '../../Frontend/shared/EmptyState';
import SelectDataRow from './SelectDataRow';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import StudentPayment from './StudentPayment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SelectedClass = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: select = [] } = useQuery({
        queryKey: ['select', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/select?email=${user?.email}`)
            return res.data;
        },
    })
    
    

    return (
      <>
        <Helmet>
          <title>SportsShala - Selected Class</title>
        </Helmet>  
      {select && Array.isArray(select) && select.length > 0 ? (
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
                        Price
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
                                        {select &&
                                            select.map(select => (
                                                <SelectDataRow
                                                    key={select?._id}
                                                    select={select}
                                                refetch={refetch}
                                                user={user}
                                                    
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

export default SelectedClass;