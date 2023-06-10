import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SingleInstructor from './SingleInstructor';
import EmptyState from '../shared/EmptyState';
import Banner from '../shared/Banner';
import { Helmet } from 'react-helmet';
import Loader from '../shared/Loader';

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

        if (loading) {
    return <Loader />
  }
    
    return (
      <>
        <Helmet>
          <title>SportsShala - All Instructor</title>
        </Helmet>  
            <Banner title={"Our Professional Instructor"}></Banner>
         {instructors && Array.isArray(instructors) && instructors.length > 0 ? (
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-screen-lg lg:gap-10 ">
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
                    message='No Instructor Is available.'
                />
            )}
                </>
        
    );
};

export default AllInstructor;