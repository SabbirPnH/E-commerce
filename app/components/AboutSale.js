import React from "react";

export default function AboutSale() {
  return (
    <div className="py-5 bg-[#daf2fc]">
      <h2 className=" text-[28px] sm:text-[40px]  px-4 sm:px-20 font-semibold break-all">
       What Do You Sell?
      </h2>
      <p className="text-[16px] sm:text-[24px] font-semibold   px-4 sm:px-20 pt-2">
      Choosing the right software for your business may be an overwhelming experience, but we are here to help every step of the way.
      </p>
      <div className="flex gap-5 px-5 sm:px-20 pt-5">
        <button class="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-[#E9FF97] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#E9FF97] hover:text-black  before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56">
          <span class="relative  z-10">CONTACT US</span>
        </button>
        <button class="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-[#E9FF97] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#E9FF97] hover:text-black  before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56">
          <span class="relative  z-10">SERVICES</span>
        </button>
      </div>
    </div>
  );
}