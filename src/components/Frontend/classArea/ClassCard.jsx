import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';

const ClassCard = ({ allClass }) => {

  const [isAdmin] = useAdmin();

    
    const { image, name, price, seats, _id, enroll } = allClass;
    
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToSelect = allClass => {
        if(user && user.email){
          const selectItem = { selectItemId: _id, name, image, price, student_name: user.name, email: user.email, instructor: allClass.instructor.email, status: "unpaid" }
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
      <div className='flex flex-col gap-2 w-full border border-2 bg-red-300 shadow-xl rounded-xl p-6'>
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
         <div className='font-semibold text-lg text-center '>{name}</div>
                <p className="text-gray-700 text-base mx-auto">Instructor: {allClass.instructor.name}</p>
          <p className="text-gray-700 text-base mx-auto">Available Seats: {seats}</p>
          <p className="text-gray-700 text-base mx-auto">Total Enrolled: {enroll}</p>
                <p className="text-gray-700 text-base mx-auto">Price: {price}</p>
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
         <div className='font-semibold text-lg text-center '>{name}</div>
                <p className="text-gray-700 text-base mx-auto">Instructor: {allClass.instructor.name}</p>
          <p className="text-gray-700 text-base mx-auto">Available Seats: {seats}</p>
          <p className="text-gray-700 text-base mx-auto">Total Enrolled: {enroll}</p>
                <p className="text-gray-700 text-base mx-auto">Price: {price}</p>
                <button className="btn btn-sm btn-info mt-3" disabled={isAdmin || allClass.instructor.email == user.email} onClick={() => handleAddToSelect(allClass)}>Select Class</button>
      </div>
    </div>
    )
    }
    
    </>
         
    );
};

export default ClassCard;