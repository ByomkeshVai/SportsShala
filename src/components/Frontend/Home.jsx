import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './slider/Slider';
import SliderBottom from './sliderBottom/SliderBottom';
import FrontSlider from './FrontSlider/FrontSlider';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <SliderBottom></SliderBottom>
            <FrontSlider></FrontSlider>
        </div>
    );
};

export default Home;