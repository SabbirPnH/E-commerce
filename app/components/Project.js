import Image from "next/image";
import React from "react";
import data from "../../app/data/ProjectData";

export default function Project() {
  return (
    <div>
      <div className="pt-8 px-5 sm:px-20">
        <h2 className=" text-center font-semibold text-[16px]">
          WE ARE GOOD AT
        </h2>
        <h1 className="text-center text-[22px]  sm:text-[32px]  py-2">
          BENEFITS OF ECOMMERCE WEBSITE DEVELOPMENT
        </h1>
        <p className="text-center text-[22px] text-[#182b50]">
          WE WILL DO EVERYTHING WE CAN TO MAKE OUR NEXT BEST PROJECT!
        </p>
      </div>
      <div className="w-full py-10 flex justify-center items-center  dark:bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 px-5 sm:px-20">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative flex justify-center  lg:items-center p-4 border dark:border-gray-400/30 border-gray-400/30 rounded shadow shadow-green-500"
            >
              <div className="absolute flex justify-center gap-1 w-10 text-xl font-bold text-center py-1 font-semibold dark:bg-white bg-[#182b50] rounded-sm -top-2 -left-2">
                <Image
                  src="/img/Ecommerce.png"
                  alt="Shopping Logo"
                  width={20}
                  height={20}
                  className="object-cover "
                />
              </div>

              <p
                className="w-full overflow-hidden rounded"
                style={{ maxWidth: "100px" }}
                href={item.profileUrl}
              >
                <Image
                  className="object-cover my-auto rounded pt-5  lg:w-28 lg:h-28"
                  width={200}
                  height={200}
                  src={item.imageUrl}
                  alt={item.name}
                />
              </p>

              <div className="flex flex-col justify-between flex-grow gap-3 px-4 mt-4">
                <div className="w-full ">
                  <p
                    href={item.profileUrl}
                    className="font-semibold md:text-xl text-gray-700 dark:text-black"
                  >
                    {item.name}
                  </p>
                  <p className="pt-1 text-sm dark:text-gray-700 text-gray-900">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
