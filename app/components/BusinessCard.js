import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import features from '../data/FetureData'


const FeatureItem = ({ feature }) => {
	return (
		<div className="bg-slate-100 shadow-md border h-[500px] border-[#A7E6FF] dark:bg-[#1E2735]  relative p-4 lg:p-8">
			<Image
				src={feature.image}
				alt=""
                width={100}
                height={100}
				className="h-auto max-w-full rounded-xl mx-auto object-cover mb-6"
			/>
			<h4 className="text-2xl leading-6 font-bold mb-4">{feature.title}</h4>
			<p className="opacity-70 break-all">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const BusinessCard = () => {
	return (
		<section className="ezy__featured13 light py-10 md:py-7 bg-slate-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className=" px-5 sm:px-20">
				<div className="grid grid-cols-12  mb-12">
					<div className="col-span-12  lg:px-14 text-center">
						
						<p className=" text-[22px] break-all sm:text-[32px] leading-20 px-5 font-semibold tracking-wider  sm:mb-3">
                        STREAMLINE YOUR ECOMMERCE BUSINESS OPERATIONS WITH MEDIASOFT
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-6 text-center">
					{features.map((feature, i) => (
						<div className="col-span-12 sm:col-span-6 lg:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default BusinessCard;