import React from 'react';
import { useState } from 'react';
import { deleteSelect } from '../../../api/select';
import DeleteModal from '../../Modal/DeleteModal';
import StudentPayment from './StudentPayment';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const SelectDataRow = ({ select, refetch, user }) => {

        let [isEditModalOpen, setIsEditModalOpen] = useState(false)

  let [isOpen, setIsOpen] = useState(false)

  


  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    }
      const modalHandler = id => {
    deleteSelect(id)
      .then(data => {
        refetch()
        toast.success('Class deleted')
      })
      .catch(err => console.log(err))
          closeModal()

  }

    // class state
  const [selectInfo, setSelectInfo] = useState({
    classId: select.selectItemId,
  })

  
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={select?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>

        </div>
        
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{select?.name}</p>
        </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{select?.price}</p>
        </td>
         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{select?.instructor}</p>
        </td>
    
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

         <span
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-slate-50 leading-tight'
        >
          <span
            aria-hidden='true'
            className="absolute inset-0 bg-blue-600 rounded-full"
          ></span>
                                <button className='relative' onClick={() => setIsEditModalOpen(true)}>Pay</button>
        </span>
       <StudentPayment
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        refetch={refetch}
        setIsEditModalOpen={setIsEditModalOpen}
            select={select}
            user={user}
            selectInfo={selectInfo}
        />
         
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
          id={select._id}
        />
      </td>
    </tr>
    );
};

export default SelectDataRow;