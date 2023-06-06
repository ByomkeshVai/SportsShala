import React from 'react';

const SliderBottom = () => {
    return (
         <div className=' rounded-xl min-h-[calc(100vh-80vh)] mt-[-80px] z-10 border border-1 bg-slate-50 absolute '>
            <div className="main pt-12 flex align-center gap-6 ">
                 <div className="text1 mx-auto" >
                    <h3>25k+</h3>
                    <p>Students</p>
                </div>
                <div className="text2 mx-auto">
                    <h3>100+</h3>
                    <p>Experts Sports Man</p>
                </div>
                <div className="text3 mx-auto">
                    <h3>5k+</h3>
                    <p>Sponsors</p>
                </div>
                <div className="text4 mx-auto">
                    <h3>500</h3>
                    <p>Professional Player</p>
                </div>
           </div>
        </div>
    );
};

export default SliderBottom;