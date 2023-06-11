import React from 'react';
import { Link } from 'react-router-dom';

const SingleInstructor = ({ instructors }) => {

    return (
         
                      <div className="card w-64 bg-base-100 shadow-xl ml-6 hover:scale-110 mx-auto">
                        <figure className="px-2 pt-3 text-center">
                            <img src={instructors?.imageUrl} alt="Shoes" className="object-cover h-56 w-64 rounded-xl  " />
                        </figure>
                        <div className="card-body items-center text-center mx-auto">
                <h2 className="card-title mt-[-24px]">{instructors?.user}</h2>
                <h2 className="">Total Student: {instructors?.total}</h2>
                            <h2 className="">Our Senior Instructor</h2>
                            <div className="card-actions">
                            <button className="btn btn-sm btn-primary mt-3"><Link to={`/instructor/classes/${instructors?.name}`}>Show Class</Link></button>
                            </div>
                        </div>
                        </div>
                    
    );
};

export default SingleInstructor;