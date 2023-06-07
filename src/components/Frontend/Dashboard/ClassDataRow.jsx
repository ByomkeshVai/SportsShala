import React from 'react';
import { deleteClass } from '../../../api/class';
import { useState } from 'react';
import DeleteModal from '../../Modal/DeleteModal';

const ClassDataRow = ({ classes, refetch }) => {
      let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    }
      const modalHandler = id => {
    deleteClass(id)
      .then(data => {
        refetch()
        toast.success('Class deleted')
      })
      .catch(err => console.log(err))
    closeModal()
  }
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={classes?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>

        </div>
        
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{classes?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{classes?.category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{classes?.seats}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${classes?.price}</p>
            </td>
              <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{(classes?.status).toUpperCase()}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{(classes.feedback) ? (classes.feedback) : <p>No Feedback Yet</p> }</p>
            </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-slate-50 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-600  rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </span>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={classes._id}
        />
      </td>
    </tr>
    );
};

export default ClassDataRow;