import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import img2 from '../../../assets/bg.png'
import { Link } from 'react-router-dom';
import { FcSportsMode } from 'react-icons/fc';
import { RiCompassDiscoverLine } from 'react-icons/Ri';


const Slider = () => {
    return (
        <div className='z-0 relative'>
          <div className="carousel w-full mx-auto">
    <div id="slide1" className="carousel-item relative w-full">
    <img src={img2} className="max-w-screen-xl " />
       <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='lg:text-6xl text-3xl font-bold'>Learn Your Favourite Sports On Free Time</h2>
                        <div className='items-center align-center flex mt-8 gap-4'>
                                <div className="btn1">
                                    <button className="btn "><FcSportsMode size={28}/><Link to="/">  Start Learning</Link></button>
                            </div>
                                <div className="btn2">
                                    <button className="btn  btn-neutral"><RiCompassDiscoverLine size={28}/> Discover More</button>
                                </div>
                        </div>
                    </div>
                </div>
    </div> 
            
</div>
        </div>
    );
};

export default Slider;