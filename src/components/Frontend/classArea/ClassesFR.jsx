import React, { useEffect, useState } from 'react';
import Loader from './../shared/Loader';
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Heading from '../shared/Heading';
import ClassCard from './ClassCard';
import { getAllClasses } from '../../../api/class';

const ClassesFR = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [axiosSecure] = useAxiosSecure();
    const [allClass, setAllClass] = useState([])
    const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllClasses()
      .then(data => {
        if (category) {
          const filtered = data.filter(classes => classes.category === category)
          setAllClass(filtered)
        } else {
          setAllClass(data)
        }

        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [category])



//     const { data: classes = [] } = useQuery(['classes'], async () => {
//             const res = await axiosSecure.get('/classes')
//             return res.data;
//     })


//      useEffect(() => {
//    setLoading(true)
//         if (category) {
//             const filtered = classes.filter(data => data.category === category)
//             setAllClass(filtered)
//         }
//         else {
//             setLoading(false)
//           setAllClass(data)
//         }
//         setLoading(false)
//      }, [category])
    
    
//         console.log(allClass);

    
      if (loading) {
    return <Loader />
  }
    return (
        <div className='max-w-screen-xl mx-auto'>
      {allClass && allClass.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {allClass.map((allClass, index) => (
            <ClassCard key={index} allClass={allClass} />
          ))}
        </div>
      ) : (
        <div className='pt-12'>
          <Heading
            title='No Classes Available In This Category!'
            center={true}
          />
        </div>
      )}
        </div>
    );
};

export default ClassesFR;