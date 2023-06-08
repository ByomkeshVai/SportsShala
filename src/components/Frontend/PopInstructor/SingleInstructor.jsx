import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const SingleInstructor = ({ instructors }) => {

    return (
         
                      <div className="card w-64 bg-base-100 shadow-xl ml-6 hover:scale-110">
                        <figure className="px-2 pt-3">
                            <img src={instructors?.photo} alt="Shoes" className="mx-auto object-cover h-56 w-64 rounded-xl  " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mt-[-24px]">{instructors.name}</h2>
                            <h2 className="">Our Senior Instructor</h2>
                            <div className="card-actions">
                            <button className="btn btn-sm btn-primary mt-3"><Link to={`/instructor/classes/${instructors.email}`}>Show Class</Link></button>
                            </div>
                        </div>
                        </div>
                    
    );
};

export default SingleInstructor;