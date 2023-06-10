import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../shared/Heading';
import InstructorCard from './InstructorCard';
import Header from '../shared/Header';
import { Helmet } from 'react-helmet';

const DetailsInstructor = () => {

    const classData = useParams()

         const [axiosSecure] = useAxiosSecure()
  const { user, loading } = useContext(AuthContext)
  const { refetch, data: instructorsClass = [] } = useQuery({
    queryKey: ['instructorsClass'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `instructor/classes/${classData.email}`
      )
      return res.data
      },
  })

   

    return (
      <div className='max-w-screen-xl mx-auto '>
      
            {
                instructorsClass?.slice(0, 1).map((ins) => <>
                <div class="w-full bg-gray-100 px-10 pt-10 mx-auto">
                    <div class="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-center sm:justify-center lg:justify-center">
                            <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div class="rounded overflow-hidden shadow-md bg-white">
                                    <div class="absolute -mt-20 w-full flex justify-center">
                                        <div class="h-32 w-32">
                                            <img src={ins.image} alt="Display Picture Instructor" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div class="px-6 mt-16">
                                            <h1 class="font-bold text-3xl text-center mb-1">{ins.name}</h1>
                                            <h1 class="font-bold text-xl text-center mb-1">Total Classes: {instructorsClass.length}</h1>
                                    </div>
                                </div>
                        </div>
                          <Helmet>
                      <title>Sports Shala - {ins.name}</title>
                    </Helmet>
                                
                        </div>
                    </div>
                </div>
                
                </>)
            }
           
            
      {instructorsClass && instructorsClass.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {instructorsClass.map((instructorsClass, index) => (
            <InstructorCard key={index} instructorsClass={instructorsClass} user={ user} />
          ))}
            
        </div>
      ) : (
        <div className='min-h-[calc(100vh-300px)] flex items-center justify-center'>
          <Heading
            title='No Sports Available For This Instructor!'
            subtitle='Select Other Instructor.'
            center={true}
          />
            </div>
            
      )}
        </div>
    );
};

export default DetailsInstructor;