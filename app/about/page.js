import React from 'react';
import '../../app/globals.css'
import AboutContent from '../components/AboutContent';
import AboutCard from '../components/AboutCard';
import AboutSale from '../components/AboutSale';
import AboutBorderCard from '../components/AboutBorderCard';
const AboutUs = () => {
    return (
       <div>
         <div className="relative px-4  sm:px-20 py-10 sm:py-16 lg:py-28  bg-custom  bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="relative z-10">
                <h2 className="text-[26px] sm:text-32px] text-[#E9FF97]">About Us</h2>
                <p className="text-white py-2 lg:w-1/2">
                    PnH Corporation is a reputable software company with years of rich experience developing web design development and software for their customers on demand.
                </p>
            </div>
        </div>
        <AboutContent/>
        <AboutCard/>
        <AboutBorderCard/>
        <AboutSale/>

       </div>
    );
};

export default AboutUs;
