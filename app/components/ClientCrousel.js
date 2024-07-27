
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Devider from '../components/Devider';

const ClientCrousel=()=>{
  const images = [
    '/img/client (7).png',
    '/img/client (8).png',
    '/img/client (9).png',
    '/img/client (10).png',
    '/img/client (11).png',
    '/img/client (12).png',
    '/img/client (13).png',
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
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image 
            src={img}
            alt=''
            width={150}
            height={150}
            className="object-cover sm:px-4 "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
export default ClientCrousel;