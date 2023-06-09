import React from 'react';
import { Link } from 'react-router-dom';

const InstructorCard = ({instructorsClass}) => {
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
                    <button className="btn btn-sm btn-info mt-3">Learn More</button>
      </div>
    </div>
    );
};

export default InstructorCard;