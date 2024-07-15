import Image from 'next/image';
import Devider from '../components/Devider';
import { IoIosCheckmarkCircle } from "react-icons/io";
const ServiceWork=()=>{
    return(
        <div className=" pb-5 sm:py-10  px-5 sm:px-20 dark:bg-gray-800">

    <div className=" lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
      <Devider/>
      <div 
            className="block  mb-6 bg-white lg:mb-0">
            <h3 className="mb-2 text-[20px] sm:text-[30px] font-semibold text-[#182b50]">WHAT WE ENSURE IN OUR WEB DEVELOPMENT SERVICE?</h3>
            <ul className='list-disc ml-8 sm:ml-14 lg:ml-18 text-[14px] text-gray-700 py-4'>
                <li>We keep everything minimal yet create something that appeals the audience and m</li>
                <li>Professional UI/UX design that creates user-friendly websites.</li>
                <li>Relative color scheme and eye-catchy design.</li>
                <li>Clean code that helps to get a better position on search engines.</li>
                <li>Reasonable price quotation</li>
                <li>Multiple revisions before delivering the project</li>
                <li>Customer support after project delivery</li>
            </ul>
            <h3 className="mb-2 text-[20px] sm:text-[30px] font-semibold text-[#182b50]">OUR WORK PROCESS</h3>
            <p className="text-[17px] text-gray-700 break-all tracking-tight">
            With a perfect working process, you know your project is on the right hand.
            </p>
            <ul className=' text-[14px] text-gray-700 py-4'>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Gather information from the client</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Create project outline</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Consult design team</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Evaluate the project</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Beta testing and finding errors</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Present the project</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Fix the issues and test again</li>
                </div>
            </ul>
           
        </div>
      </div>
       <div>
       <Devider/>
       <div 
            className="block  mb-6 bg-white  lg:mb-0">
            <h3 className="mb-2 text-[20px] sm:text-[30px] font-semibold text-[#182b50]">WHAT DO WE OFFER?
            </h3>
            <p className="text-[17px] text-gray-700 break-all tracking-tight">
            We are committed to providing quality over quantity. Instead of offering plenty of services, we strive to focus on the following web development works to ensure the best quality work and put a smile on your client's face.
            </p>
            <ul className=' ml-8 sm:ml-14 lg:ml-18 text-[14px] text-gray-700 py-4'>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Web Application Development</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>eCommerce Website Development</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Personal Website Development</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Web Portal Development</li>
                </div>
                <div className='flex items-center py-1 gap-5'>
                <IoIosCheckmarkCircle className='text-[32px] text-[#3DC2EC]' />
                <li className='text-[16px] font-semibold text-[#182b50]'>Website Re-design and Development</li>
                </div>
            </ul>
            <div className="relative ml-16 sm:ml-20 lg:ml-10 w-52 sm:w-96 h-52 sm:h-72 " style={{ paddingTop: '33.33%' }}>
  <Image
    src="/img/service-work.png"
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
    )
}
export default ServiceWork;