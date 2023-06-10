import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const InstructorCard = ({ instructorsClass, user }) => {

  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();


  const { image, name, price, seats, _id, enroll } = instructorsClass;



   const handleAddToSelect = instructorsClass => {
        if(user && user.email){
          const selectItem = { selectItemId: _id, name, image, price, student_name: user.name, email: user.email, instructor: instructorsClass.instructor.email, status: "unpaid" }
            fetch(`${import.meta.env.VITE_API_URL}/select`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`,
                },
                body: JSON.stringify(selectItem)
            })
           .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                   toast.success('Class Saved, Check Your Dashboard')
                                   
                                }
                            })
        }
        else{
            navigate('/login', {state: {from: location}})

        }
    }


  return (

     <>
      {
        seats == 0 ? (<div className='col-span-2 shadow-xl group'>
      <div className='flex flex-col gap-2 w-full border border-2 bg-red-300 shadow-xl rounded-xl p-6 pointer-default'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={image}
            alt='Class'
          />
        </div>
         <div className='font-semibold text-lg text-center '>{instructorsClass?.name}</div>
          <p className="text-gray-700 text-base mx-auto">Available Seats: {instructorsClass?.seats}</p>
          <p className="text-gray-700 text-base mx-auto">Total Enrolled: {instructorsClass?.enroll}</p>
                <p className="text-gray-700 text-base mx-auto">Price: {instructorsClass?.price}</p>
                <button className="btn btn-sm btn-info mt-3 disabled:btn-error" disabled>Select Class</button>
      </div>
        </div>) :
          
          (
            <div className='col-span-2 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full border border-2 shadow-xl rounded-xl p-6'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={image}
            alt='Class'
          />
        </div>
         <div className='font-semibold text-lg text-center '>{instructorsClass?.name}</div>
          <p className="text-gray-700 text-base mx-auto">Available Seats: {instructorsClass?.seats}</p>
          <p className="text-gray-700 text-base mx-auto">Total Enrolled: {instructorsClass?.enroll}</p>
                <p className="text-gray-700 text-base mx-auto">Price: {instructorsClass?.price}</p>
                <button className="btn btn-sm btn-info mt-3" disabled={isAdmin || instructorsClass?.instructor.email == user?.email} onClick={() => handleAddToSelect(allClass)}>Select Class</button>
      </div>
    </div>
    )
    }
    
    </>
  )
};

export default InstructorCard;