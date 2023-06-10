import React from 'react';
import { useState } from 'react';
import { UpdateClass, deleteClass } from '../../../api/class';
import DeleteModal from '../../Modal/DeleteModal';
import StatusModal from '../../Modal/StatusModal';


const ClassDataRowAdmin = ({ classes, refetch }) => {
    let [isOpen, setIsOpen] = useState(false)
    let [status, setStatus] = useState(" ")
    let [isEditModalOpen, setIsEditModalOpen] = useState(false)
     const [buttonDisabled, setButtonDisabled] = useState('Approved' || 'Denied');



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

              
          let classPending = classes.status ==='pending' ? "className" : "bg-gray-600";
          let classActive = classes.status === 'approved' ? "className" : "bg-green-600";
          let classDenied = classes?.status === 'denied' ? "className" : "bg-blue-600";
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
        <p className='text-gray-900 whitespace-no-wrap'>{classes.instructor.name}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{classes.instructor.email}</p>
            </td>
<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button disabled={classes?.status == 'Approved' || classes?.status == 'Denied'}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-slate-50 leading-tight disabled:text-gray-900'
        >
          <span
            aria-hidden='true'
            className={`absolute inset-0 ${classPending ? classActive : classDenied} rounded-full`}
          ></span>
          <span className='relative' onClick={() => setIsEditModalOpen(true)}>{classes?.status}</span>
        </button>
        <StatusModal
          isOpen={isEditModalOpen}
          closeModal={() => setIsEditModalOpen(false)}
          classes={classes}
          id={classes._id}
          refetch={refetch}
                    setIsEditModalOpen={setIsEditModalOpen}
                  
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
          id={classes._id}
        />
      </td>
    </tr>
    );
};

export default ClassDataRowAdmin;