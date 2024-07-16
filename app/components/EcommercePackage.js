import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Devider from "./Devider";
import Link from "next/link";
const EcommercePackage = () => {
  return (
    <div>
      <h2 className=" text-[22px] sm:text-[32px] text-[#182b50] text-center font-semibold">
        Ecommerce Package
      </h2>
      <div className="flex justify-center">
        <Devider />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-5 sm:gap-7 lg:gap-10 mb-10 sm:px-20">
        <div className="mt-4  sm:mt-10 ">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
              Ecommerce (Basic)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50] font-semibold">
                19,990 Taka / $180 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
                25,000 Taka / $220 USD
              </span>
              <hr className="mt-3" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Free Domain+Hosting</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Basic Design</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Technology: Woocommerce</p>
                </div>
              </div>
             <Link href={'/package'}>
             <h2 className="text-center font-bold my-2 border-t border-b cursor-pointer py-2">
                Read More
              </h2>
             </Link>
            </div>
            <div className="mt-4">
              <Link href={'/contact'} className="  font-bold pt-2 px-4 ">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4  sm:mt-10 ">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
              Ecommerce (Advanced)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50] font-semibold">
                39,990 Taka / $380 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
                50,000 Taka / $450 USD
              </span>
              <hr className="mt-3" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Domain+Hosting</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Advanced Design</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Technology: Woocommerce/PHP</p>
                </div>
              </div>
              <Link href={'/package'}>
             <h2 className="text-center font-bold my-2 border-t border-b cursor-pointer py-2">
                Read More
              </h2>
             </Link>
            </div>
            <div className="mt-4">
              <Link href={'/contact'} className="  font-bold pt-2 px-4 ">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4  sm:mt-10">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
              Ecommerce (Corporate)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50] font-semibold">
                74,990 Taka / $700 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
                99,990 Taka / $900 USD
              </span>
              <hr className="mt-3" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Free Domain+Hosting</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Premium Design</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Technology: PHP/Laravel</p>
                </div>
              </div>
              <Link href={'/package'}>
             <h2 className="text-center font-bold my-2 border-t border-b cursor-pointer py-2">
                Read More
              </h2>
             </Link>
            </div>
            <div className="mt-4">
              <Link href={'/contact'} className="  font-bold pt-2 px-4 ">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4  sm:mt-10 ">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
              Ecommerce (Premium)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50] font-semibold">
                1,49,990 Taka / $1200 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
                2,00,000 Taka / $1900 USD
              </span>
              <hr className="mt-3" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Domain+Hosting</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Junior UI/UX Designer</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Technology: Laravel/Next js/ Vuejs</p>
                </div>
              </div>
              <Link href={'/package'}>
             <h2 className="text-center font-bold my-2 border-t border-b cursor-pointer py-2">
                Read More
              </h2>
             </Link>
            </div>
            <div className="mt-4">
              <Link href={'/contact'} className="  font-bold pt-2 px-4 ">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4  sm:mt-10 ">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
              Ecommerce (Enterprise)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50] font-semibold">
                2,99,990 Taka / $2700 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
                4,99,900 Taka / $4500 USD
              </span>
              <hr className="mt-3" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Domain+Server</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Senior UI/UX Designer</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Technology: Laravel/Next js/ Vuejs</p>
                </div>
              </div>
              <Link href={'/package'}>
             <h2 className="text-center font-bold my-2 border-t border-b cursor-pointer py-2">
                Read More
              </h2>
             </Link>
            </div>
            <div className="mt-4">
              <Link href={'/contact'} className="  font-bold pt-2 px-4 ">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4  sm:mt-10 ">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
              Ecommerce (Custom)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50]  font-semibold">
                Negotiable
              </h3>
              <hr className="mt-10" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Free Domain+Hosting</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Premium Design</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Technology: PHP/Laravel</p>
                </div>
              </div>
              <Link href={'/package'}>
             <h2 className="text-center font-bold my-2 border-t border-b cursor-pointer py-2">
                Read More
              </h2>
             </Link>
            </div>
            <div className="mt-4">
              <Link href={'/contact'} className="  font-bold pt-2 px-4 ">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePackage;
