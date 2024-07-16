import React from 'react';
import '../../app/globals.css'
import Contact from '../components/Contact';
const ContactPage = () => {
    return (
       <div>
         <div className="relative px-4  sm:px-20 py-10 sm:py-16 lg:py-28  bg-custom  bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="relative z-10">
                <h2 className="text-[26px] sm:text-36px] text-[#E9FF97]">Contact Us</h2>
              
            </div>
        </div>
       <Contact/>
       </div>
    );
};

export default ContactPage;
