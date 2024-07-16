import React from 'react';
import '../../app/globals.css'
import Package from '../components/Package';

const EcommercePackage = () => {
    return (
       <div>
         <div className="relative px-4  sm:px-20 py-10 sm:py-16 lg:py-28  bg-custom  bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="relative z-10">
                <h2 className="text-[26px] sm:text-32px] text-[#E9FF97]">Ecommerce Price</h2>
                <p className="text-white py-2 lg:w-1/2">
                In Bangladesh alone there are about 10 million Internet users. You can easily reach your organization's contacts or products through the website to so many people.
                </p>
            </div>
        </div>
       <Package/>
       </div>
    );
};

export default EcommercePackage;
