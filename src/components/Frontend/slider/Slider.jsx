import React from 'react';
import { Link } from 'react-router-dom';
import { FcSportsMode } from 'react-icons/fc';
import { RiCompassDiscoverLine } from 'react-icons/Ri';
import ac from '../../../assets/ac.png'



const Slider = () => {
    return (
        <div className="z-0 relative banner bg-gradient-to-r from-sky-800 to-indigo-900 ">
            <div className="banner-area lg:flex items-center align-center max-w-screen-xl mx-auto w-full lg:h-[600px] ">
                 <div className="text-area p-12 lg:p-0">
        <div className='text-white lg:space-y-7'>
                                <h2 className='lg:text-6xl text-3xl font-bold w-60 mx-auto text-center items-center lg:w-full lg:text-left'>Learn Your Favourite Sports On Free Time</h2>
                                <div className='items-center lg:align-center lg:flex flex flex-col lg:flex-row mt-8 gap-4'>
                                        <div className="btn1">
                                            <button className="btn "><FcSportsMode size={28}/><Link to="/classes">  Start Learning</Link></button>
                                    </div>
                                        <div className="btn2">
                                            <button className="btn  btn-neutral"><RiCompassDiscoverLine size={28}/> Discover More</button>
                                        </div>
                                </div>
                            </div>
            </div>
            <div className="img-area">
                    <img src={ac} alt="" className="lg:w-[860px] rounded-xl lg:h-[560px] mt-[-80px] lg:mt-0" />
            </div>
           </div>
        </div>
    );
};

export default Slider;