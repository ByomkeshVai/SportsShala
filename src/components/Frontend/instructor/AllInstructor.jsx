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
        "/all/instructors"
      )
      return res.data
    },
  })
    
    return (
    <>
         {instructors && Array.isArray(instructors) && instructors.length > 0 ? (
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
   <div class="w-full bg-gray-100 px-10 pt-10 mx-auto">
                    <div class="container mx-auto mb-8">
                        <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-center sm:justify-center lg:justify-center">
                            <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div class="rounded overflow-hidden shadow-md bg-white">
                                    <div class="absolute -mt-20 w-full flex justify-center">
                                        <div class="h-32 w-32">
                                            <img src="https://st2.depositphotos.com/5479794/8039/i/600/depositphotos_80390852-stock-photo-sports-teacher.jpg" alt="Display Picture of Andres Berlin" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div class="px-6 mt-16">
                                            <h1 class="font-bold text-3xl text-center mb-1">Meet Our Instractors</h1>
                                    </div>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-screen-lg lg:gap-10">
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