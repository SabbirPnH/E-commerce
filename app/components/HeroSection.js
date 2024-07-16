import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='py-10 bg-slate-100'>
      <h2 className='text-[22px] sm:text-[32px] font-semibold px-5 text-center break-all sm:px-20 tracking-widest'>ARE YOU LOOKING FOR THE BEST ECOMMERCE DEVELOPMENT COMPANY FOR MAKING AN ONLINE BUSINESS PLATFORM?</h2>
      <p className='break-all px-5 text-md text-gray-700 sm:px-20 text-center py-5'>Well, then you are in the exact place now. <span className='text-[#000] font-bold'>PnH Data Systems Limited</span> is one of the best eCommerce website development companies in Bangladesh. Our well-experienced team with high coding standards and best practices make us focus on providing exceptional eCommerce websites for our customers worldwide, no matter what their business types & sizes are! Our support team provides consultancy to our clients to enrich their business growth and helps them to keep pace with the changing business trends in the era of eCommerce, whenever they need us.  <span className='text-[#182B50] font-semibold'>So get ready to be succeded with us!</span></p>
        <div className='flex justify-center'>
        <button class="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-[#E9FF97] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#A7E6FF] hover:text-black  before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56">
      <Link href={'/contact'}><span class="relative  z-10">CONTACT US</span></Link>
    </button>
        </div>
    </div>
  );
};

export default HeroSection;
