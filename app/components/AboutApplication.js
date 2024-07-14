import Image from "next/image";
import React from "react";

export default function AboutApplication() {
  return (
   <div className="grid sm:grid-cols-4 px-5 sm:px-20 py-5 bg-slate-50 sm:py-7 flex items-center gap-5">
    <div className="col-span-3">
        <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold break-all text-[#182b50]">E-commerce Applications for Android, iOS & Web.
        Secure, Fast, Scalable, Responsive & SEO friendly</h2>
        <p className=" sm:text-2xl text-gray-500">Custom & SaaS offerings, cloud-scale always</p>
    </div>
    <div className="col-span-1 flex justify-center">
    <Image
              src="/img/apps.png"
              alt="Shopping Logo"
              width={400}
              height={200}
              className="object-cover hidden sm:block"
            />
    </div>
   </div>
  );
}
