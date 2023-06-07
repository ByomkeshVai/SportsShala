// Delete a Class
export const deleteUser = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`, {
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
export const UpdateRole = async (id, role) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(role),
    }
  )
  const data = await response.json()
  return data
}
