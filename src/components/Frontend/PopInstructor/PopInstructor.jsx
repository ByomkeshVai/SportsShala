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
        "/all/instructors"
      )
      return res.data
      },
    
  })

    return (
        <div>
            <Header slogan={"Meet Our Popular Instructor"}></Header>

                <div class="w-full bg-gray-100 px-10 pt-10">
                    <div class="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-center sm:justify-center lg:justify-center gap-5">
                        
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


