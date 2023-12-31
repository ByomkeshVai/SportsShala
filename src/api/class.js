// add a class
export const addClassData = async classData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(classData),
  })

  const data = await response.json()
  return data
}

// Delete a Class
export const deleteClass = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  })
  const result = await response.json()
  return result
}

// update Class status
export const UpdateClass = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/class/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(status),
    }
  )
  const data = await response.json()
  return data
}


// // update Class status
// export const UpdateSeats = async (classId) => {
//   const response = await fetch(
//     `${import.meta.env.VITE_API_URL}/api/payments/success`,
//     {
//       method: 'PUT',
//       headers: {
//         'content-type': 'application/json',
//         authorization: `Bearer ${localStorage.getItem('access-token')}`,
//       },
//       body: JSON.stringify(classId),
//     }
//   )
//   const data = await response.json()
//   return data
// }

// get all classes
export const getAllClasses = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
     headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
  })
  const data = await response.json()
  return data
}



