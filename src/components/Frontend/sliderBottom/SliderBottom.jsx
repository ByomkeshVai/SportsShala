import React from 'react';
import { GrUserSettings } from 'react-icons/Gr';
import { MdSportsCricket } from 'react-icons/Md';
import { SiGithubsponsors } from 'react-icons/Si';
import { AiOutlineFileProtect } from 'react-icons/Ai';



const SliderBottom = () => {
    return (
         <div className='max-w-screen-xl mx-auto rounded-xl mt-[-70px] absolute bottom-0 left-0 bg-slate-50 relative center mx-auto'>
            <div className="main p-8 rounded-xl  flex gap-6 shadow-lg shadow-gray-500/50  justify-items-center items-center">
                 <div className="text1 mx-auto" >
                    <div className="student flex items-center gap-4">
                        <div className="logo">
                            <GrUserSettings size={52}></GrUserSettings>
                        </div>
                        <div className="text-area">
                        <h3 className='text-4xl mb-3'>25K+</h3>
                    <p className='text-xl'>Students</p>
                        </div>
                   </div>
                </div>
                <div className="text2  mx-auto">
                    <div className="student flex items-center gap-4">
                        <div className="logo">
                            <MdSportsCricket size={52}></MdSportsCricket>
                        </div>
                        <div className="text-area">
                            <h3 className='text-4xl mb-3'>100+</h3>
                            <p className='text-xl'>Experts Sports Man</p>
                        </div>
                   </div>
                    
                </div>
                <div className="text3 mx-auto">
                    <div className="student flex items-center gap-4">
                        <div className="logo">
                            <SiGithubsponsors size={52}></SiGithubsponsors>
                        </div>
                        <div className="text-area">
                       <h3 className='text-4xl mb-3'>5k+</h3>
                    <p className='text-xl'>Sponsors</p>
                        </div>
                   </div>
                   
                </div>
                <div className="text4 mx-auto">
                    <div className="student flex items-center gap-4">
                        <div className="logo">
                            <AiOutlineFileProtect size={52}></AiOutlineFileProtect>
                        </div>
                        <div className="text-area">
                        <h3 className='text-4xl mb-3'>500</h3>
                            <p className='text-xl'>Professional Player</p>
                        </div>
                   </div>
                    
                </div>
           </div>
        </div>
    );
};

export default SliderBottom;