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