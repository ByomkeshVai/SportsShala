import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './slider/Slider';
import SliderBottom from './sliderBottom/SliderBottom';
import FrontSlider from './FrontSlider/FrontSlider';
import PopInstructor from './PopInstructor/PopInstructor';
import Academic from './academic/Academic';
import Appointment from './appointment/Appointment';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <SliderBottom></SliderBottom>
            <FrontSlider></FrontSlider>
            <PopInstructor></PopInstructor>
            <Academic></Academic>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;