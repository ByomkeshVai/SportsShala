import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({allClass}) => {
    return (
         <Link to={`/class/${allClass?._id}`} className='col-span-2 cursor-pointer group'>
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
            src={allClass.image}
            alt='Class'
          />
        </div>
         <div className='font-semibold text-lg text-center '>{allClass.name}</div>
                <p className="text-gray-700 text-base mx-auto">Instructor: {allClass.instructor.name}</p>
        <p className="text-gray-700 text-base mx-auto">Available Seats: {allClass.seats}</p>
                <p className="text-gray-700 text-base mx-auto">Price: {allClass.price}</p>
                <button className="btn btn-sm btn-info mt-3">Learn More</button>
      </div>
    </Link>
    );
};

export default ClassCard;