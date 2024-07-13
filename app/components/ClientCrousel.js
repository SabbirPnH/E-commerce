
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import "../globals.css";
// import { Autoplay,Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import Devider from '../components/Devider';

// export default function ClientCrousel() {
//     const image=[
//         '/img/client (1).png',
//         '/img/client (2).png',
//         '/img/client (3).png',
//         '/img/client (4).png',
//         '/img/client (5).png',
//         '/img/client (6).png',
//     ]
//   return (
//     <div className='px-5 sm:px-20'>
//     <h1 className='text-[22px] sm:text-[32px] font-semibold pt-7 '>Client</h1>
//      <Devider/>
//      <p className='text-[18px] sm:text-md '>Our esteemed customers</p>
//       <Swiper
//         slidesPerView={5}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
          
//         modules={[Autoplay,Pagination]}
//         className="mySwiper py-10 "
//       >
//        {
//         image.map((img,i)=>(
//             <SwiperSlide key={i}>
          
//           <Image
//                   src={img}
//                   alt="Shopping Logo"
//                   width={100}
//                   height={100}
//                   className="object-cover  sm:px-4 "
//                 />
          
//             </SwiperSlide>
//         ))
//        }
       
//       </Swiper>
//     </div>
//   );
// }




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Devider from '../components/Devider';

const ClientCrousel=()=>{
  const images = [
    '/img/client (1).png',
    '/img/client (2).png',
    '/img/client (3).png',
    '/img/client (4).png',
    '/img/client (5).png',
    '/img/client (6).png',
  ];
  return(
    <div className='px-5 sm:px-20'>
    <h1 className='text-[22px] sm:text-[32px] font-semibold pt-7'>Client</h1>
    <Devider />
    <p className='text-[18px] sm:text-md'>Our esteemed customers</p>
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper py-10"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            src={img}
            alt={`Client Logo ${i + 1}`}
            width={100}
            height={100}
            className="object-cover sm:px-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
export default ClientCrousel;