import React from 'react';

const StudentDataRow = ({ enroll }) => {
    
    const { email, date, price, transactionId, status, name } = enroll
    
    

    return (
         <tr>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{enroll.info.date}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{price}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{enroll.info.transactionId }</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
            </td>

            
     
    </tr>
    );
};

export default StudentDataRow;