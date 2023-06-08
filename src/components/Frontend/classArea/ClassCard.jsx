import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useSelect from '../../../hooks/useSelect';

const ClassCard = ({ allClass }) => {
    
    const { image, name, price, seats, _id } = allClass;
    
    const { user } = useContext(AuthContext);
    const [refetch] = useSelect();
    const navigate = useNavigate();
    const location = useLocation();

     const handleAddToSelect = allClass => {
        console.log(allClass);
        if(user && user.email){
            const selectItem = {selectItemId: _id, name, image, price, email: user.email, instructor: allClass.instructor.email }
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
                if(data.insertedId){
                    refetch();
                   toast("Class Selected, Check Dashboard")
                }
            })
        }
        else{
            navigate('/login', {state: {from: location}})

        }
    }



    return (
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
                <p className="text-gray-700 text-base mx-auto">Price: {price}</p>
                <button className="btn btn-sm btn-info mt-3" onClick={() => handleAddToSelect(allClass)}>Select Class</button>
      </div>
    </div>
    );
};

export default ClassCard;