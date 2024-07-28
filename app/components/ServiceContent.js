import Image from "next/image";
import Devider from "../components/Devider";
import NewsTicker from "./NewsTicker";
const ServiceContent = () => {
  return (
    <div className=" py-5  px-5 sm:px-20">
      <div className="max-w-9xl  flex items-center ">
        <div>
          <h2 className="bg-black text-white py-0.5  px-2 sm:px-5 text-[14px]  ">
            Latest Offer
          </h2>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2  relative">
            <div className="border-t-4 border-b-4 py-1 mt-2  border-[#A7E6FF] ">
              <NewsTicker />
            </div>
          </h1>
        </div>
      </div>

      <div className=" lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <Devider />
          <div className="block  mb-6 bg-white lg:mb-0">
            <h3 className="mb-2 text-[20px] sm:text-[30px] font-semibold text-[#182b50]">
              WITH A PERFECT WORKING PROCESS, YOU KNOW YOUR PROJECT IS ON THE
              RIGHT HAND.
            </h3>
            <p className="text-[17px] text-gray-700 break-all tracking-tight">
              Websites are the bread and butter of the internet. They are the
              first thing that most people see when they open a browser, and
              they are one of the most important aspects of a company&aposs
              online presence. A well-designed website can make a company look
              professional and polished, while a poorly designed website can
              make a company look unprofessional and amateurish.
              <br /> <br />
              That&aposs why it&aposs important to work with a web development
              company that knows what it&aposs doing. A good web development
              company will be able to design a website that looks good and
              functions well, and they will also be able to help you with all of
              your website&aposs other needs, such as SEO, online marketing, and
              web hosting.
              <br /> <br />
              If you&aposre looking for a web development company, then
              you&aposve come to the right place. Our team of experienced
              professionals can help you with all of your website needs, and
              we&aposll work with you to make sure that your website is
              everything that you want it to be.
            </p>
          </div>
        </div>
        <div>
          <Devider />
          <div className="block  mb-6 bg-white  lg:mb-0">
            <h3 className="mb-2 text-[20px] sm:text-[30px] font-semibold text-[#182b50]">
              WHY US?
            </h3>
            <p className="text-[17px] text-gray-700 break-all tracking-tight">
              In the ocean of digital service providers, we may not acquire most
              of the water, and we have the quality, that is for sure. Here is
              why you should choose us to develop your precious website.
            </p>
            <ul className="list-disc ml-8 sm:ml-14 lg:ml-18 text-[14px] text-gray-700 py-4">
              <li>
                Talented and enthusiastic developer with multiple coding skills.
              </li>
              <li>Several years of experience.</li>
              <li>A well-decorated team that follows one single direction.</li>
              <li>Strictly maintained deadline.</li>
              <li>24/7 customer service even after project delivery.</li>
            </ul>
            <div
              className="relative w-full h-52 sm:h-72"
              style={{ paddingTop: "33.33%" }}
            >
              <Image
                src="/img/about-bg.jpg"
                alt="Shopping Logo"
                layout="fill"
                objectFit="cover"
                classNameName=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceContent;
