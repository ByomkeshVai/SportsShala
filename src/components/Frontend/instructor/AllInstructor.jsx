import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SingleInstructor from './SingleInstructor';
import EmptyState from '../shared/EmptyState';

const AllInstructor = () => {
    const [showAll, setShowAll] = useState(false);
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    
      // For Show Fixed Instructor
  const handleShowAll = () => {
        setShowAll(true);
  };

  const { refetch, data: instructors = [] } = useQuery({
    queryKey: ['instructors'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        "/instructors"
      )
      return res.data
    },
  })
    
    return (
    <>
         {instructors && Array.isArray(instructors) && instructors.length > 0 ? (
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                {instructors &&
                      instructors?.slice(0, showAll ? instructors.length : 10).map(instructors => (
                        <SingleInstructor
                          key={instructors?._id}
                          instructors={instructors}
                          refetch={refetch}
                        />
                      ))}
                
            </div>
             <div className="text-center">
                  
                          {!showAll && (
                              <button className="btn m-auto flex mt-8" onClick={handleShowAll}> Show All</button>
                            )}
                    </div>
            </div>
            ) : (
                <EmptyState
                    message='No Room Instructor available.'
                />
            )}
                </>
        
    );
};

export default AllInstructor;