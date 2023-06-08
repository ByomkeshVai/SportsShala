import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({allClass}) => {
    return (
         <Link to={`/rooms/${allClass?._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
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
            alt='Room'
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
        <div className='font-semibold text-lg'>{allClass?.name}</div>

        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {allClass?.price}</div>
          <div className='font-light'>{allClass?.seats}</div>
        </div>
      </div>
    </Link>
    );
};

export default ClassCard;