import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { saveUser } from '../../../api/auth';
import { Helmet } from 'react-helmet';
import { TbFidgetSpinner } from 'react-icons/tb'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/Ai';

const Login = () => {

     const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { loading, setLoading, signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const [passwordShown, setPasswordShown] = useState(false);
     const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

     const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true })
        })
        .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)
        })
    };


     const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        // save user to db
        saveUser(result.user)
        navigate(from, { replace: true })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }
    
    return (
        <>
            <div>
              <Helmet>
                <title>Sports Shala - Login</title>
            </Helmet>
             <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={passwordShown ? "text" : "password"}  {...register("password", {
                                    required: true,
                                 
                                })} placeholder="password" className="input input-bordered relative" />
                                    <AiOutlineEye onClick={togglePassword} className='absolute right-10 bottom-48 top-40 cursor-pointer'>Show Password</AiOutlineEye>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                            >
                            {loading ? (
                                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                            ) : (
                                'Continue'
                            )}
            </button>
                                </div>
                                 <div
                                onClick={handleGoogleSignIn}
                                className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                                >
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                                </div>
                        </form>
                        <p><small>Don't Have a Account <Link to="/register">Register</Link></small> Here</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;