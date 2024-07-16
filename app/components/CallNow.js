import Link from "next/link";
import React from "react";

export default function CallNow() {
  return (
    <div className="py-5 bg-[#daf2fc]">
      <h2 className=" text-[22px] sm:text-[30px] text-center px-4 sm:px-20 font-semibold break-all">
        Why PnH Corporation is The Best eCommerce Development Company in
        Bangladesh?
      </h2>
      <p className="text-[14px] font-semibold text-center break-all px-4 sm:px-20 pt-2">
        We help you sell your product and achieve monetary benefits from your
        website- In recent periods, an eCommerce web design platform or website
        is the most demanding service worldwide. PnH Corporation Data Systems
        Limited provides the best eCommerce development platforms for all types
        of entrepreneurs and businesses worldwide with a professional website
        with secure payment integration and shipment configuration.
      </p>
      <div className="flex justify-center pt-5">
       <Link href={'/service'}>
       <button class="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-[#E9FF97] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#E9FF97] hover:text-black  before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56">
          <span class="relative  z-10">READ MORE</span>
        </button>
       </Link>
      </div>
    </div>
  );
}
