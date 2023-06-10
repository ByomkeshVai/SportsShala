import React from 'react';
import Header from '../shared/Header';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import SingleInstructor from './SingleInstructor';

const PopInstructor = () => {
     const [axiosSecure] = useAxiosSecure()
  const { loading } = useContext(AuthContext)
  const { refetch, data: instructors = [] } = useQuery({
    queryKey: ['instructors'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        "/enroll-stats"
      )
      return res.data
      },
    
  })



    return (
        <div>
        <div class="w-full bg-gray-100 px-10 py-10">
                      <Header slogan={"Meet Our Popular Instructor"}></Header>
                    <div class="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " class="lg:flex lg:flex-row md:flex flex flex-col gap-7 items-center xl:justify-center flex-wrap md:justify-center sm:justify-center lg:justify-center lg:gap-5">
                        
                            {
                instructors?.slice(0, 6).map(instructors => (<SingleInstructor
                    key={instructors._id}
                    instructors = {instructors}
                ></SingleInstructor>))
            
            }

                        </div>
                    </div>
                </div>

        </div>
        
    );
};

export default PopInstructor;



