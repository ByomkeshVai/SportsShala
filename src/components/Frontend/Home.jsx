import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './slider/Slider';
import SliderBottom from './sliderBottom/SliderBottom';
import FrontSlider from './FrontSlider/FrontSlider';
import PopInstructor from './PopInstructor/PopInstructor';
import Academic from './academic/Academic';
import Appointment from './appointment/Appointment';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Sports Shala - Summer Camp Sports School</title>
            </Helmet>
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