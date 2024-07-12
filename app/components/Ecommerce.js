import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import data from "../../app/data/EcommerceData";

const Ecommerce = () => {
  return (
    <div className="px-5 sm:px-20 my-5">
      <div>
        <h2 className=" lg:text-center  text-[22px] sm:text-[28px] font-semibold  ">
          Feature-rich <span className="text-[#8cdaf8]">Ecommerce</span> Website
          Development Services. Development Languages: PHP(Laravel) & React js
        </h2>
        <p className="text-gray-700 py-2">
          <span className="font-bold">PnH Corporation </span> brings unique
          features in eCommerce website development in Bangladesh from startups
          to established companies. With our flexible eCommerce packages, you
          pay only for the features that you require.
        </p>
      </div>
      {data.map((item) => (
        <div key={item.id} className="bg-white overflow-hidden  my-5">
          <div className="grid  sm:grid-cols-3 gap-4 items-center justify-start py-5">
            {item.id % 2 !== 0 ? (
              <>
                <div className="relative flex col-span-1  w-full h-full flex-shrink-0">
                  <Image
                    className="absolute left-0 top-0 object-cover object-center transition duration-50"
                    loading="lazy"
                    src={item.imageSrc}
                    alt="Shopping Logo"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col col-span-2 gap-2 ">
                  <div className="flex items-center gap-2 justify-start text-gray-500">
                    <div className="text-5xl">
                      <Image
                        src={item.iconImage} //icon img
                        alt="Shopping Logo"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-[28px] text-gray-700">{item.title}</p>
                  </div>
                  <p className="text-gray-500 break-all">{item.heading}</p>
                  {item.descriptions.map((desc, index) => (
                    <p
                      key={index}
                      className="text-gray-500 flex items-center gap-2"
                    >
                      <GiCheckMark className="text-[#182b50] font-extrabold" />
                      {desc}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col col-span-2 gap-2 ">
                  <div className="flex items-center gap-2 justify-start text-gray-500">
                    <div className="text-4xl">
                      <Image
                        src={item.iconImage} //icon img
                        alt="Shopping Logo"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-[28px] text-gray-700">{item.title}</p>
                  </div>
                  <p className="text-gray-500  break-all">{item.heading}</p>
                  {item.descriptions.map((desc, index) => (
                    <p
                      key={index}
                      className="text-gray-500 flex items-center gap-2"
                    >
                      <GiCheckMark className="text-[#182b50] font-extrabold" />
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="relative flex col-span-1 w-full h-full flex-shrink-0">
                  <Image
                    className="absolute left-0 top-0  object-cover object-center transition duration-50"
                    loading="lazy"
                    src={item.imageSrc}
                    alt="Shopping Logo"
                    width={300}
                    height={300}
                  />
                </div>
              </>
            )}
          </div>
          <div className=" sm:pt-10 lg:pt-24">
            <hr className="w-full " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ecommerce;
