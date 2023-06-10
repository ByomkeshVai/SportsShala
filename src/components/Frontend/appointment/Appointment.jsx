import React from 'react';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import call from '../../../assets/appointment/call.json'
import Lottie, { useLottie } from "lottie-react"

const Appointment = () => {

    const appointment =() => {
        Swal.fire({
  title: 'Your Response Is Submitted',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
    }
    return (
        <div className='lg:py-8 lg:px-5'>
            <div className="content flex justify-around mx-auto items-center flex flex-col lg:flex lg:flex-row">
<div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 p-12">
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
          <p className="w-full lg:text-3xl text-2xl font-medium text-center leading-snug font-serif">Book Appointment For Support</p>
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Your Name</p>
              <input placeholder="Enter Your Name" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Phone Number</p>
              <input placeholder="Enter Phone Number" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <a className="w-full inline-block lg:pt-4 lg:pr-5 lg:pb-4 lg:pl-5 py-2 px-2 lg:text-xl text-lg font-medium text-center text-white bg-blue-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease cursor-pointer"  onClick={appointment}>Book Appointment</a>
            </div>
          </div>
        </div>
            </div>
            <div className="imgarea ">
                <Lottie animationData={call} loop={true} className='' />;
            </div>
           </div>
        </div>
    );
};

export default Appointment;