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
        
        <div className='col-span-2 cursor-pointer group shadow-xl border border-2 p-8 rounded-xl'>
      <div className='flex flex-col gap-3 w-full '>
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
            src={instructorsClass.image}
            alt='Class'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
          </div>
        </div>
                <div className='font-semibold text-lg text-center '>Available: {instructorsClass.seats}</div>
                <div className='font-semibold text-lg text-center '>Category: {instructorsClass.category}</div>
    
                    <div className='font-semibold text-center'>Price: $ {instructorsClass.price}</div>
                    <button className="btn btn-sm btn-info mt-3" disabled={isAdmin || instructorsClass.instructor.email == user.email} onClick={() => handleAddToSelect(instructorsClass)}>Select Class</button>
      </div>
    </div>
    );
};

export default InstructorCard;