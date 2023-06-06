import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './slider/Slider';
import SliderBottom from './sliderBottom/SliderBottom';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <SliderBottom></SliderBottom>
        </div>
    );
};

export default Home;