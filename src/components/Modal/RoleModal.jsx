import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { toast } from 'react-hot-toast';
import { UpdateRole } from '../../api/user';

const RoleModal = ({ setIsEditModalOpen, isOpen, refetch, classes, id }) => {
    
    const [role, setRole] = useState("")
         const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
    
    const handleSubmit = event => {
        event.preventDefault()
        setLoading(true)
        const roleData = {
          role: role,
        }
        UpdateRole(id, roleData)
         .then(data => {
        if (data.modifiedCount == 1) {
             setLoading(false)
            toast.success('Role Updated!')
              navigate('/admin/dashboard/users')
             refetch()
            setIsEditModalOpen(false)
        } 
          })
          .catch(err => console.log(err))

        setLoading(false)
    }
    return (
          <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Set User Role
                                </Dialog.Title>
                                
                                <form onSubmit={handleSubmit}>
                <hr className='mt-8 ' />
                <div className='mt-2 flex mt-2 justify-around'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2' 
                    onClick={() => setRole("instructor")}
                  >
                    instructor
                                    </button>
                                     <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setRole("admin")} 
                  >
                    admin
                  </button>
                </div>
                                </form>
                                

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default RoleModal;