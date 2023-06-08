import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './slider/Slider';
import SliderBottom from './sliderBottom/SliderBottom';
import FrontSlider from './FrontSlider/FrontSlider';
import PopInstructor from './PopInstructor/PopInstructor';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <SliderBottom></SliderBottom>
            <FrontSlider></FrontSlider>
            <PopInstructor></PopInstructor>
        </div>
    );
};

export default Home;