import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLink } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Devider from "../components/Devider";
import Link from "next/link";
import "../globals.css";  

const PortfolioCard = () => {
    return (
        <div className="portfolio-card-container px-5 pb-5 sm:px-20">
            <h3 className="text-center text-[22px] sm:text-[32px] pt-4 font-semibold">Portfolio</h3>
            <div className='text-center'><Devider /></div>
            <div className="row mt-40 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="">
                    <div className="box1">
                    <Image
              src="/img/Screenshot_4.png"
              alt="Shopping Logo"
              width={600}
              height={200}
              className="object-cover  cursor-pointer "
            />
                        <h3 className="title ">picnpick</h3>
                        <ul className="icon">
                            <li><Link href={'https://www.picnpick.com/'} target='_blank'><FontAwesomeIcon icon={faLink} className="text-white" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="box1">
                    <Image
              src="/img/feature-img.png"
              alt="Shopping Logo"
              width={600}
              height={400}
              className="object-cover cursor-pointer "
            />
                        <h3 className="title">project title</h3>
                        <ul className="icon">
                            
                            <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="box1">
                    <Image
              src="/img/feature-img.png"
              alt="Shopping Logo"
              width={600}
              height={400}
              className="object-cover cursor-pointer "
            />
                        <h3 className="title">project title</h3>
                        <ul className="icon">
                           
                            <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;









// import React from 'react';
// import Image from 'next/image'; // Import Next.js Image component
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

// const PortfolioCard = () => {
//     return (
//         <div className="bg-gray-100 p-8">
//             <h3 className="text-center text-xl font-semibold mb-4">Hover Effect Style: Demo - 1</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="box1 relative overflow-hidden shadow-md">
//                     <Image src="/img/about-bg.jpg" alt="Avatar 1" width={300} height={300} className="object-cover" />
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300">
//                         <ul className="icon  space-x-2">
//                             <li><a href="#"><FontAwesomeIcon icon={faSearch} className="text-white" /></a></li>
//                             <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
//                         </ul>
//                     </div>
//                     <div className="absolute bottom-0 left-0 p-4 text-white">
//                         <h3 className="title text-lg font-semibold">Williamson</h3>
//                     </div>
//                 </div>
//                 <div className="box1 relative overflow-hidden shadow-md">
//                     <Image src="/img/about-bg.jpg" alt="Avatar 2" width={300} height={300} className="object-cover" />
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300">
//                         <ul className="icon flex space-x-2">
//                             <li><a href="#"><FontAwesomeIcon icon={faSearch} className="text-white" /></a></li>
//                             <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
//                         </ul>
//                     </div>
//                     <div className="absolute bottom-0 left-0 p-4 text-white">
//                         <h3 className="title text-lg font-semibold">Kristiana</h3>
//                     </div>
//                 </div>
//                 <div className="box1 relative overflow-hidden shadow-md">
//                     <Image src="/img/about-bg.jpg" alt="Avatar 3" width={300} height={300} className="object-cover" />
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300">
//                         <ul className="icon flex space-x-2">
//                             <li><a href="#"><FontAwesomeIcon icon={faSearch} className="text-white" /></a></li>
//                             <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
//                         </ul>
//                     </div>
//                     <div className="absolute bottom-0 left-0 p-4 text-white">
//                         <h3 className="title text-lg font-semibold">Kristiana</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PortfolioCard;
