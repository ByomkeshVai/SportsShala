import React from 'react';
import { GrUserSettings } from 'react-icons/Gr';
import { MdSportsCricket } from 'react-icons/Md';
import { SiGithubsponsors } from 'react-icons/Si';
import { AiOutlineFileProtect } from 'react-icons/Ai';



const SliderBottom = () => {
    return (
         <div className='max-w-screen-xl lg:mx-auto text-center lg:text-left rounded-xl lg:mt-[-70px] lg:absolute lg:bottom-0 lg:left-0 bg-slate-50 lg:relative center mx-auto'>
            <div className="main lg:p-8 p-4 rounded-xl lg:flex lg:flex-row flex flex-row lg:gap-6 shadow-lg shadow-gray-500/50 justify-items-center ;lg:items-center">
                 <div className="text1 lg:mx-auto text-center lg:text-left" >
                    <div className="student lg:flex ;lg:items-center lg:gap-4">
                        <div className="logo invisible lg:visible mb-[-38px] lg:mb-0 ">
                            <GrUserSettings size={52}></GrUserSettings>
                        </div>
                        <div className="text-area">
                        <h3 className='lg:text-4xl text-2xl lg:mb-3'>25K+</h3>
                    <p className='lg:text-xl text-lg'>Students</p>
                        </div>
                   </div>
                </div>
                <div className="text2  lg:mx-auto text-center lg:text-left">
                    <div className="student lg:flex ;lg:items-center lg:gap-4">
                        <div className="logo invisible lg:visible mb-[-38px] lg:mb-0">
                            <MdSportsCricket size={52}></MdSportsCricket>
                        </div>
                        <div className="text-area">
                            <h3 className='lg:text-4xl text-2xl lg:mb-3'>100+</h3>
                            <p className='lg:text-xl text-lg'>Experts Sports Man</p>
                        </div>
                   </div>
                    
                </div>
                <div className="text3 lg:mx-auto text-center lg:text-left">
                    <div className="student lg:flex ;lg:items-center lg:gap-4">
                        <div className="logo invisible lg:visible mb-[-38px] lg:mb-0">
                            <SiGithubsponsors size={52}></SiGithubsponsors>
                        </div>
                        <div className="text-area">
                       <h3 className='lg:text-4xl text-2xl lg:mb-3'>5k+</h3>
                    <p className='lg:text-xl text-lg'>Sponsors</p>
                        </div>
                   </div>
                   
                </div>
                <div className="text4 lg:mx-auto text-center lg:text-left">
                    <div className="student lg:flex ;lg:items-center lg:gap-4">
                        <div className="logo invisible lg:visible mb-[-38px] lg:mb-0">
                            <AiOutlineFileProtect size={52}></AiOutlineFileProtect>
                        </div>
                        <div className="text-area">
                        <h3 className='lg:text-4xl text-2xl lg:mb-3'>500</h3>
                            <p className='lg:text-xl text-lg'>Professional Player</p>
                        </div>
                   </div>
                    
                </div>
           </div>
        </div>
    );
};

export default SliderBottom;