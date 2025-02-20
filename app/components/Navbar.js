"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import "../../app/globals.css";
export default function Navbar() {
  const toggleOpenRef = useRef(null);
  const toggleCloseRef = useRef(null);
  const collapseMenuRef = useRef(null);
  const navbarRef = useRef(null); // Ref for the navbar

  useEffect(() => {
    const handleClick = () => {
      if (collapseMenuRef.current.style.display === "block") {
        collapseMenuRef.current.style.display = "none";
      } else {
        collapseMenuRef.current.style.display = "block";
      }
    };

    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (window.scrollY > 0) {
        navbar.classList.add("sticky-navbar");
      } else {
        navbar.classList.remove("sticky-navbar");
      }
    };

    const toggleOpen = toggleOpenRef.current;
    const toggleClose = toggleCloseRef.current;

    if (toggleOpen && toggleClose) {
      toggleOpen.addEventListener("click", handleClick);
      toggleClose.addEventListener("click", handleClick);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (toggleOpen && toggleClose) {
        toggleOpen.removeEventListener("click", handleClick);
        toggleClose.removeEventListener("click", handleClick);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <section className="bg-[#182B50] min-h-[40px] px-4 py-2 sm:px-20 flex items-center max-sm:flex-col">
        <Link href={"tel:+88018730033"}>
          <button type="button" className="text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              class="mr-3 inline-block"
              viewBox="0 0 482.6 482.6"
            >
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000"
              ></path>
            </svg>
            +01873003333
          </button>
        </Link>
        <span class="border-l h-3 mx-6 max-sm:hidden"></span>
        <Link href={"mailto:info@pnhbd.com"}>
          <button type="button" class="text-white text-sm max-sm:my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              class="mr-3 inline-block"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              ></path>
            </svg>
            info@pnhbd.com
          </button>
        </Link>
        <div class="sm:ml-auto text-white flex justify-center items-center gap-5">
          <Link target="_blank" href={"https://www.facebook.com/pnhitsolution"}>
            <AiFillFacebook className="text-[20px] cursor-pointer" />
          </Link>
          <Link
            target="_blank"
            href={"https://linkedin.com/company/pnh-corporation"}
          >
            <FaLinkedin className="text-[20px] cursor-pointer" />
          </Link>
          <Link target="_blank" href={"http://wa.me/8801914436613"}>
            <FaWhatsappSquare className="text-[20px] cursor-pointer" />
          </Link>
        </div>
      </section>
      <header
        ref={navbarRef}
        className="navbar flex justify-between border-b py-4 px-4 sm:px-20 bg-slate-50 font-sans min-h-[70px] tracking-wide relative z-50"
      >
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-36" />
          </Link>
        </div>
        <div className="flex items-center">
          <div
            id="collapseMenu"
            ref={collapseMenuRef}
            className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              ref={toggleCloseRef}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <Link href={"/"}>
                    <Image src={logo} alt="logo" className="w-36" />{" "}
                    {/* Using Next.js Image component */}
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link
                    href={"/"}
                    className="hover:text-[#1d294f] uppercase text-[#1d294f] block font-bold text-[15px] from-after"
                  >
                    Home
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link
                    href={"/about"}
                    className="hover:text-[#1d294f] uppercase text-gray-600 block font-bold text-[15px] from-after"
                  >
                    About
                  </Link>
                </li>
                <li className="group max-lg:border-b max-lg:py-3 relative">
                  <Link
                    href={"/service"}
                    className="hover:text-[#1d294f] uppercase text-gray-600 text-[15px] font-bold lg:hover:fill-[#1d294f] block from-after"
                  >
                    Service
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        className="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg> */}
                  </Link>
                  {/* <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                      <li className="border-b py-2">
                        <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">
                          Service Details
                        </Link>
                      </li>
                    </ul> */}
                </li>
                <li className="group max-lg:border-b max-lg:py-3 relative">
                  <Link
                    href={"/portfolio"}
                    className="hover:text-[#1d294f] uppercase text-gray-600 text-[15px] font-bold lg:hover:fill-[#1d294f] block from-after"
                  >
                    Portfolio
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        className="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg> */}
                  </Link>
                  {/* <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                      <li className="border-b py-2">
                        <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">
                          Blog
                        </Link>
                      </li>
                      <li className="border-b py-2">
                        <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">
                          Blog Post
                        </Link>
                      </li>
                    </ul> */}
                </li>
                <li className="group max-lg:border-b max-lg:py-3 relative">
                  <Link
                    href={"/contact"}
                    className="hover:text-[#1d294f] uppercase text-gray-600 text-[15px] font-bold lg:hover:fill-[#1d294f] block from-after"
                  >
                    Contact
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        className="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg> */}
                  </Link>
                  {/* <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                      <li className="border-b py-2">
                        <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">
                          Blog
                        </Link>
                      </li>
                      <li className="border-b py-2">
                        <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">
                          Blog Post
                        </Link>
                      </li>
                    </ul> */}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center ml-auto space-x-6">
            <button id="toggleOpen" ref={toggleOpenRef} className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </main>
  );
}
