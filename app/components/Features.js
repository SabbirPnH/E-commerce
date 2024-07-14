import React from "react";
import Devider from "./Devider";
import data from '../../app/data/Feature'
export default function Features() {
  return (
    <div className="bg-teal-50 py-10 mb-8">
      <div className="pb-8">
        <h1 className="text-[22px] sm:text-[32px] text-center ">
          Ecoomerce Website Features
        </h1>
        <div className="flex justify-center">
          <Devider />
        </div>
      </div>
      <div className="px-5 sm:px-20 grid sm:grid-cols-2 gap-5 lg:grid-cols-3 ">
        {data.map((item, id) => (
          <div key={id} className="flex  justify-center">
            <div className="relative inline-flex">
              <span className="absolute rounded-full py-1 px-1 text-xs font-medium leading-none grid place-items-center top-[4%] left-[2%] -translate-x-2/4 -translate-y-2/4 bg-[#3DC2EC] text-white border-2 border-pink-400 min-w-[24px] min-h-[24px]">
                {item.number}
              </span>
              <button
                className="align-middle w-72 bg-slate-50 select-none font-sans font-bold  capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md py-5 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                type="button"
              >
                {item.features}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
