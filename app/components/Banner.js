'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import '../globals.css'

export default function Banner() {
  return (
    <div className="bg-[#182b50] px-5 sm:px-20 py-5 font-[sans-serif]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 md:!leading-[55px] tracking-widest">
            ECOMMERCE WEBSITE DEVELOPMENT
          </h2>
          <p className="text-lg lg:text-[16px] text-white mb-8">
            Reach more customers with our fast-selling <span className='text-[#E9FF97]'>E-Commerce Website Development</span>
          </p>
          <a href="#" className="text-[#E9FF97] text-lg lg:text-2xl font-semibold ease-in-out transform inline-block">
            AN ALL-IN-ONE
            <TypeAnimation
              sequence={[
                '  ONLINE PLATFORM!! ',
                1000,
                ' SOLUTION',
                1000,
                ' ONLINE PLATFORM!!',
                1000,
                ' SOLUTION',
                1000,
              ]}
              speed={20}
              style={{ fontSize: '1em', color: '#A7E6FF' }}
              repeat={Infinity}
            />
          </a>
        </div>
        <div className="text-center smooth-bounce">
          <div className="w-11/12 mx-auto">
            <Image
              src="/img/feature-img.png"
              alt="Shopping Logo"
              width={600}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
