import React from "react";
import Link from "next/link";
const AboutCard = () => {
  return (
    <section className=" bg-[##FFFFFF] px-5 sm:px-20 light pb-4 pt-6 sm:py-8 md:pt-14  dark:bg-[#0b1727] text-zinc-900 dark:text-white flex items-center overflow-hidden">
      <div className="">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5  ">
            <div className="h-full flex flex-col ">
              <h2 className="font-bold text-[24px] text-[#182b50] lg:text-[36px]  mb-3">
                ECommerce Order Management System
              </h2>
              <p className="text-md opacity-80 text-gray-700 sm:line-clamp-6 lg:line-clamp-none break-all">
                PnH Corporation E-commerce Order Management System (OMS) - A comprehensive solution, that helps you organize your orders easily and effectively. We provide several ways to manage all of your online orders through various platforms and automate many tasks associated with order fulfillment. Our software is designed to cater to your unique needs, offering a seamless experience for handling the entire order lifecycle from order creation to payment collection and beyond.
              </p>
              <div className=" pt-5">
        <button class="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-[#E9FF97] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#E9FF97] hover:text-black  before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56">
          <Link href={'/contact'}>
          <span class="relative  z-10">CONTACT NOW</span>
          </Link>
        </button>
      </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 relative">
            <div
              className="  hidden md:block w-full rounded-sm min-h-[270px]  lg:min-h-[390px] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(/img/about-bg.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
