import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaMinusSquare } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Devider from "./Devider";
const Package = () => {
  return (
    <div>
      <h2 className=" text-[22px] mt-5 sm:text-[32px] text-[#182b50] text-center font-semibold">
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
              14,990 Taka / $199 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
              20,000 Taka / $250 USD
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
                  <FaMinusSquare className="text-xl font-bold text-red-500" />
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
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Cash on Delivery</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <FaMinusSquare className="text-xl font-bold text-red-500" />
                  <p> Online Payment</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <FaMinusSquare className="text-xl font-bold text-red-500" />
                  <p> Order Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <FaMinusSquare className="text-xl font-bold text-red-500" />
                  <p> Sales Management</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <FaMinusSquare className="text-xl font-bold text-red-500" />
                  <p> Hot Deal/Flash Sale Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Update: 1 Month</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Training with video tutorial</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Development Time: 14Day</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Renew Charge: 3000Taka (Per Year)</p>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="mt-4">
              <a href="" className="  font-bold pt-2 px-4 ">
                Apply Now
              </a>
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
              34,990 Taka / $399 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
              50,000 Taka / $599 USD
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
                  <p>  Advanced Design</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Technology: Woocommerce</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Cash on Delivery</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Online Payment</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Order Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Sales Management</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Hot Deal/Flash Sale Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Update: 2 Month</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Training with video tutorial</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Development Time: 28Day</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Renew Charge: 7000Taka (Per Year)</p>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="mt-4">
              <a href="" className="  font-bold pt-2 px-4 ">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4  sm:mt-10 ">
          <div className="bg-white border-4 border-t-teal-400 border-r-pink-400 border-l-sky-400 border-b-lime-400   rounded text-center  pt-6 pb-8 ">
            <h3 className="text-[22px] text-[#182b50] font-semibold">
            Ecommerce (Corporate)
            </h3>
            <hr className="mt-3" />
            <div className="mt-4">
              <h3 className="text-[22px] text-[#182b50] font-semibold">
              64,990 Taka / $699 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
              75,000 Taka / $799 USD
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
                  <p>Technology: PHP/Laravel</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Cash on Delivery</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Online Payment</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Order Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Sales Management</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Hot Deal/Flash Sale Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Update: 3 Month</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Free Training with video tutorial</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Development Time: 60Day</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Renew Charge: 8000Taka (Per Year)</p>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="mt-4">
              <a href="" className="  font-bold pt-2 px-4 ">
                Apply Now
              </a>
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
              99,990 Taka / $1099 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
              2,00,000 Taka / $2099 USD
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
                  <p>  Junior UI/UX Designer</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <FaStar className="text-xl font-bold text-green-500" />
                  <p>Technology: Laravel + Vuejs</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Cash on Delivery</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Online Payment</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Order Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Sales Management</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Hot Deal/Flash Sale Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>  Free https ssl certificte(First Year)</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>  Free Training with video tutorial</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Development Time: 75Day</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Renew Charge: 10,000Taka (Per Year)</p>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="mt-4">
              <a href="" className="  font-bold pt-2 px-4 ">
                Apply Now
              </a>
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
              2,49,990 Taka / $2599 USD
              </h3>
              <span className="text-red-500 text-lg line-through">
              3,00,000 Taka / $3099 USD
              </span>
              <hr className="mt-3" />
            </div>

            <div class="mt-6">
              <div className="mt-3">
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <FaStar className="text-xl font-bold text-green-500" />
                  <p>Free Domain+Server</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Domain Name Email Address</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <FaStar className="text-xl font-bold text-green-500" />
                  <p> Senior UI/UX Designer</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <FaStar className="text-xl font-bold text-green-500" />
                  <p> Laravel+(NextJs/VueJs/AngularJs)</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Cash on Delivery</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Online Payment</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Order Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Sales Management</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Hot Deal/Flash Sale Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>  Free https ssl certificte(First Year)</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>  Free Training with video tutorial</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Development Time: 120Day</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Renew Charge: 30,000Taka (Per Year)</p>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="mt-4">
              <a href="" className="  font-bold pt-2 px-4 ">
                Apply Now
              </a>
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
              <h3 className="text-[22px] text-[#182b50] font-semibold">
              Negotiable
              </h3>
             
              <hr className="mt-10" />
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
                  <p> Design - Custom</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Technology: Negotiable</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Cash on Delivery</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Online Payment</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Order Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Sales Management</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Hot Deal/Flash Sale Management</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>  Free https ssl certificte(First Year)</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>  Free Training with video tutorial</p>
                </div>
                <div className="text-left flex items-center  py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p>Development Time: Negotiable</p>
                </div>
                <div className="text-left flex items-center bg-slate-50 py-1 gap-5 px-5">
                  <IoMdCheckmark className="text-xl font-bold text-green-500" />
                  <p> Renew Charge: Negotiable</p>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="mt-4">
              <a href="" className="  font-bold pt-2 px-4 ">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
