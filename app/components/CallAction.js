import React from "react";

export default function CallAction() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-9xl px-5 sm:px-20">
        <div className=" px-2 sm:px-5 py-10 lg:py-5 lg:px-20  rounded-2xl bg-gradient-to-r from-[#A7E6FF] to-[#E9FF97] flex items-center justify-between flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <p className=" text-xl lg:text-2xl font-semibold text-[#182b50]">
              Ready For The Next Step?
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm sm:text-lg text-[#8cdaf8] sm:font-semibold py-4 px-6 sm:px-8 transition-all duration-500"
          >
            We,re there to Help you
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#182b50"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
