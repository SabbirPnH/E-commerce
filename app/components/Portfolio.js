import React from "react";
import PropTypes from "prop-types";
import Devider from "../components/Devider";
import portfolio from '../data/Portfolio'
import Image from "next/image";
import { IoIosReturnRight } from "react-icons/io";
import Link from "next/link";
const PortfolioItms = ({ items }) => {
	const { title, description, image ,link } = items;

	return (
		<article className="rounded-lg">
			<div className="relative ">
            <Image
              src={image}
              alt={title}
              width={600}
              height={50}
              className="h-auto w-full   dark:shadow-none"
            />
				
			</div>
			<div className="p-3">
				
				<h4 className="font-medium text-2xl">{title}</h4>
				<p className="opacity-60 mt-3 mb-6">{description}</p>
				<Link href={link}>
                <div className="  flex gap-4 items-center py-2 px-5 ">
                <button className=" text-white sm:text-[#182b50] cursor-pointer"> Visit Now</button>
                <IoIosReturnRight className="text-2xl cursor-pointer text-white sm:text-[#182b50]" />
				</div>	
                </Link>
				
					
				
			</div>
		</article>
	);
};

// PortfolioItms.propTypes = {
// 	blog: PropTypes.object.isRequired,
// };

const PortfolioCard = () => {
	return (
		<section className="ezy__blog6 light pt-5 md:py-16 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
            <h3 className="text-center text-[22px] sm:text-[32px]  font-semibold">Portfolio</h3>
            <div className='text-center'><Devider /></div>
			<div className="px-5 sm:px-20 ">
				<div className="grid grid-cols-12 justify-center">
					
				</div>

				<div className="grid grid-cols-6 mt-12  gap-6">
					{portfolio.map((item, i) => (
						<div
							className="col-span-6 md:col-span-3 border  lg:col-span-2 mb-3"
							key={i}
						>
							<PortfolioItms items={item} />
						</div>
					))}
				</div>

				
			</div>
		</section>
	);
};
export default PortfolioCard;