import React from 'react';

const StudentDataRow = ({ enroll }) => {
    
    const {email, date, total, transactionId, status, className} = enroll

    return (
         <tr>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{date}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                     {className.map((className) => (

        <div className="user">{className}</div>

      ))}
                </p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{total}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{transactionId}</p>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
            </td>

            
     
    </tr>
    );
};

export default StudentDataRow;