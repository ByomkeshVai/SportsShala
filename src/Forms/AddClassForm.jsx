import React from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import { categories } from '../components/categories/CategoryData'

const AddClassForm = ({
    handleSubmit,
  loading,
  handleImageChange,
  uploadButtonText,
}) => {
    return (
        <div className='max-w-screen-xl mx-auto min-h-[calc(100vh-40px)] flex flex-col justify-center  text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto'>
            <div className='space-y-6'>
              
 <div className='space-y-1 text-sm mx-auto'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='Class Name'
                required
              />
                        </div>
                        </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={event => {
                        handleImageChange(event.target.files[0])
                      }}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-[#085885] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-info-500'>
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='seats' className='block text-gray-600'>
                  Available Seats
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='seats'
                  id='seats'
                  type='number'
                  placeholder='Total seats'
                  required
                />
              </div>
              </div>
               <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#085885]'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
           
                    </div>
                    </div>
       
      </form>
    </div>
                
    );
};

export default AddClassForm;