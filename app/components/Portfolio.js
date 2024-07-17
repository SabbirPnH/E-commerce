import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons';
import "../globals.css";  // Assuming this file contains global styles

const PortfolioCard = () => {
    return (
        <div className="portfolio-card-container px-5 sm:px-20">
            <h3 className="text-center">portfolio</h3>
            <div className="row mt-40 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Avatar 1" />
                        <h3 className="title ">project title</h3>
                        <ul className="icon">
                            <li><a href="#"><FontAwesomeIcon icon={faSearch} className="text-white" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png" alt="Avatar 2" />
                        <h3 className="title">project title</h3>
                        <ul className="icon">
                            <li><a href="#"><FontAwesomeIcon icon={faSearch} className="text-white" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLink} className="text-white" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar5.png" alt="Avatar 3" />
                        <h3 className="title">project title</h3>
                        <ul className="icon">
                            <li><a href="#"><FontAwesomeIcon icon={faSearch} className="text-white" /></a></li>
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
