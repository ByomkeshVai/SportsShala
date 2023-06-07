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