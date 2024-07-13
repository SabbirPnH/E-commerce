import React from "react";
import data from '../../app/data/AboutBorderData'

export default function AboutBorderCard() {
    return (
        <div className="grid  lg:grid-cols-3 gap-7 py-5 sm:py-10 px-5 sm:px-20 bg-slate-50">
            {
                data.map((item, id) => (
                    <div>
                        <div
                            key={id}
                            className="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6      lg:p-8 h-48"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-[#182b50]"
                            ></span>

                            <div className="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        {item.heading}
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-pretty text-sm text-gray-500"> {item.text}</p>

                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
}
