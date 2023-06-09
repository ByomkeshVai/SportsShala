import React from 'react';
import AddClassForm from '../../../Forms/AddClassForm';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { imageUpload } from './../../../api/utlits';
import { addClassData } from '../../../api/class';
import { useContext } from 'react';
import { AuthContext } from './../../../providers/AuthProvider';

const AddClass = () => {
     const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  // handle form submit
  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
    const name = event.target.name.value
    const price = event.target.price.value
    const seats = event.target.seats.value
    const image = event.target.image.files[0]
    const category = event.target.category.value
    setUploadButtonText('Uploading...')
    // Upload image
    imageUpload(image)
      .then(data => {
        const classData = {
          name,
          seats: parseInt(seats),
          price: parseFloat(price),
          image: data.data.display_url,
          instructor: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
            },
          category,
          status: 'pending',
          enroll: parseInt(0)
        }

        // post room data to server
        addClassData(classData)
          .then(data => {
            setUploadButtonText('Uploaded!')
            setLoading(false)
            toast.success('Class Added!')
            navigate('/instructor/dashboard/myclass')
          })
          .catch(err => console.log(err))

        setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
      })
  }

  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }

    return (
        <div className=''>
            <AddClassForm
             handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
            ></AddClassForm>
        </div>
    );
};

export default AddClass;