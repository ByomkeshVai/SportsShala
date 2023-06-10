import React from 'react';
import { deleteUser } from '../../../api/user';
import { useState } from 'react';
import DeleteModal from '../../Modal/DeleteModal';
import RoleModal from '../../Modal/RoleModal';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const UserDataRowAdmin = ({ users, refetch }) => {
    let [isOpen, setIsOpen] = useState(false)
    let [status, setStatus] = useState(" ")
  let [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const {user} = useContext(AuthContext)


  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    }
      const modalHandler = id => {
    deleteUser(id)
      .then(data => {
        refetch()
        toast.success('User deleted')
      })
      .catch(err => console.log(err))
          closeModal()
  }
  

    return (
        <tr>

             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{users?.name} { user.email === users.email ? <span className='text-red-300'>(me)</span> : <></>}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{users?.email}</p>
      </td>
 <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button disabled={user.email === users.email}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-slate-50 leading-tight disabled:text-gray-900'
        >
          <span
            aria-hidden='true'
            className="absolute inset-0 bg-blue-600 rounded-full "
          ></span>
          <span className='relative' onClick={() => setIsEditModalOpen(true)} >{users?.role}</span>
        </button>
        <RoleModal
          isOpen={isEditModalOpen}
          closeModal={() => setIsEditModalOpen(false)}
          users={users}
          id={users._id}
          refetch={refetch}
                    setIsEditModalOpen={setIsEditModalOpen}
        />
      </td>

        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button disabled={user.email === users.email}
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-slate-50 leading-tight disabled:text-gray-900'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-600  rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={users._id}
        />
      </td>
    </tr>
    );
};

export default UserDataRowAdmin;