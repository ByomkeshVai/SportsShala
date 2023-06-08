// Delete a Selection
export const deleteSelect = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/select/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  })
  const result = await response.json()
  return result
}



// update Enrolled status
export const updateStatus = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/select/status/${id}`,
    {
      method: 'PATCH',
      headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
      body: JSON.stringify({ status }),
    }
  )
  const data = await response.json()
  return data
}