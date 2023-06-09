import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import './CheckoutForm.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import useAuth from '../../../../hooks/useAuth'
import { UpdateSeats } from '../../../../api/class'


const CheckoutForm = ({ select, closeModal }) => {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
    const { user } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (select.price > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: select.price })
          .then(res => {
            console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [select, axiosSecure])

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
        card,

    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            type: 'card',
          card: card,
          billing_details: {
            email: user?.email || 'Unknown',
            name: user?.displayName || 'Anonymous',
          },
        },
      })

      

      if (confirmError) {
        console.log(confirmError);
      setCardError(confirmError.message)
      }
      
      console.log('payment intent', paymentIntent)
      
      // save payment information to the server
       if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
        //  save payment information to the server
            const payment = {
                transactionId: paymentIntent.id,
                date: new Date(),
            }
            axiosSecure.patch(`/select/${select._id}`, payment)
              .then(res => {
                    setProcessing(false)
              const text = `Payment Successful!, TransactionId: ${paymentIntent.id}`
                    toast.success(text)
                    navigate('/student/dashboard/enrolled')
                    closeModal()
                })
    }
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
           type="submit"
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
              Pay ${select.price}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm
