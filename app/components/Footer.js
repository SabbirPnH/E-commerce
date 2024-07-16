import logo from "../../public/img/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
   <div>
     <Image
              src="/img/footer-bg-1536x121.png"
              alt="Shopping Logo"
              width={900}
              height={400}
              className="object-cover mt-2 w-full  "
            />
     <section className="pt-7  sm:pt-16 pb-7 bg-[#181818]">
      <div className="mx-auto max-w-9xl px-5 sm:px-20">
        <div className="grid grid-cols-1 max-lg:gap-10 lg:grid-cols-12 lg:divide-x-2 divide-gray-200 pb-10 lg:pb-14 border-b-2 border-gray-200">
          <div className="lg:col-span-7 pr-9 xl:pr-16">
            <h5 className="text-lg font-medium text-[#A7E6FF] max-md:text-center mb-7">
              Contact
            </h5>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 pb-12 border-b-2 border-gray-200">
              <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0002 1.83398C7.79102 1.83398 6.00016 3.62485 6.00016 5.83398C6.00016 7.81598 7.44169 9.46129 9.3335 9.77868V11.8438C8.15165 11.8773 6.58573 12.0034 5.21484 12.3198C4.3956 12.5089 3.59344 12.7773 2.98057 13.1696C2.3658 13.5632 1.8335 14.1587 1.8335 15.0007C1.8335 15.4261 2.03957 15.8389 2.35737 16.1901C2.68091 16.5477 3.15401 16.8824 3.78679 17.1701C5.05045 17.7444 7.02988 18.1673 10.0002 18.1673C11.2802 18.1673 13.2118 18.0404 14.8432 17.6489C15.6539 17.4543 16.4414 17.1828 17.0417 16.795C17.6411 16.4076 18.1668 15.8234 18.1668 15.0007C18.1668 14.3531 17.7301 13.63 16.8682 13.0593C15.9939 12.4806 14.6234 12.0086 12.5555 11.8363C12.1886 11.8057 11.8664 12.0784 11.8358 12.4453C11.8052 12.8122 12.0779 13.1344 12.4448 13.165C14.3769 13.326 15.5064 13.7569 16.1321 14.1711C16.7702 14.5936 16.8335 14.9538 16.8335 15.0007C16.8335 15.1779 16.7342 15.4062 16.318 15.6751C15.9026 15.9435 15.2839 16.172 14.5321 16.3524C13.0385 16.7109 11.2202 16.834 10.0002 16.834C7.13711 16.834 5.36654 16.4235 4.33853 15.9562C3.82549 15.723 3.51733 15.4848 3.34608 15.2956C3.18432 15.1168 3.16835 15.0108 3.16683 15.0007C3.16683 14.8009 3.27689 14.5631 3.69944 14.2926C4.1239 14.0209 4.75403 13.7945 5.51465 13.619C6.75956 13.3317 8.21367 13.2112 9.3335 13.1777V13.334C9.3335 13.7022 9.63197 14.0007 10.0002 14.0007C10.3684 14.0007 10.6668 13.7022 10.6668 13.334V9.77868C12.5586 9.46129 14.0002 7.81598 14.0002 5.83398C14.0002 3.62485 12.2093 1.83398 10.0002 1.83398Z"
                    fill="#A7E6FF"
                  />
                </svg>
                <p className="text-base font-normal text-gray-400">
                  184-A, PnH, Bangladesh.
                </p>
              </div>
              <Link href={"tel:+88018730033"}>
                <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.18848 2.51372C6.28217 1.60741 4.81275 1.60741 3.90644 2.51372C2.03119 4.38896 2.03119 7.42934 3.90644 9.30459L11.3627 16.7609C13.238 18.6361 16.2784 18.6361 18.1536 16.7609C19.0599 15.8546 19.0599 14.3852 18.1536 13.4788L16.0824 11.4077C15.351 10.6763 14.1653 10.6763 13.4339 11.4077C13.2233 11.6183 12.8817 11.6183 12.671 11.4077L8.91853 7.65514C8.70787 7.44448 8.70787 7.10293 8.91853 6.89227C9.64989 6.1609 9.64989 4.97513 8.91853 4.24377L7.18848 2.51372Z"
                      fill="#A7E6FF"
                    />
                  </svg>
                  <p className="text-base font-normal text-gray-400 select-all cursor-pointer">
                    +8801873003333
                  </p>
                </div>
              </Link>
              <Link href={"mailto:info@pnhbd.com"}>
                <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M0.980369 2.24792C1.71093 1.28666 2.86648 0.666016 4.16699 0.666016H12.5003C13.7782 0.666016 14.9162 1.26527 15.6485 2.19809C15.6369 2.2106 15.6257 2.22364 15.615 2.23721L14.8684 3.18004L13.1551 5.20653C12.1329 6.41561 11.7452 6.85169 11.2425 7.08496C10.7399 7.31822 10.1565 7.33272 8.57326 7.33273H8.09451C6.51086 7.33271 5.92743 7.31822 5.42467 7.08486C4.92191 6.8515 4.53424 6.41525 3.51199 5.20572L1.80012 3.18021L1.79155 3.17028L0.980369 2.24792Z"
                      fill="#A7E6FF"
                    />
                    <path
                      d="M0.331033 3.52856C0.224291 3.88909 0.166992 4.27086 0.166992 4.66602V11.3327C0.166992 13.5418 1.95785 15.3327 4.16699 15.3327H12.5003C14.7095 15.3327 16.5003 13.5418 16.5003 11.3327V4.66602C16.5003 4.25643 16.4388 3.86122 16.3244 3.48914L15.9071 4.01614C15.9027 4.02173 15.8981 4.02725 15.8935 4.0327L14.0746 6.18411C13.1883 7.23323 12.6064 7.92194 11.8038 8.29441C11.0011 8.66689 10.0995 8.66657 8.7261 8.6661L7.94163 8.6661C6.56792 8.66657 5.66611 8.66688 4.86332 8.29426C4.06053 7.92164 3.47866 7.23268 2.5923 6.18317L0.786009 4.04589L0.331033 3.52856Z"
                      fill="#A7E6FF"
                    />
                  </svg>
                  <p className="text-base font-normal text-gray-400 select-all cursor-pointer">
                    pnh@bd.com
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center max-lg:justify-between gap-8 lg:gap-12 pt-14">
              <div className="block">
                <h6 className="text-lg font-medium text-[#A7E6FF] mb-7 max-md:text-center">
                  Pages
                </h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li>
                    <Link
                      href={'/'}
                      className="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/about'}
                      className="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/service'}
                      className="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Protfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="text-lg font-medium text-[#A7E6FF] max-md:text-center mb-7">
                  Services
                </h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Web Design{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Web Development
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Ecommerce Website
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      PHP Laravel Development
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="text-lg font-medium text-[#A7E6FF] max-md:text-center mb-7">
                  Domain & Hosting Services
                </h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Domain Registration
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Shared Hosting
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      VPS Hosting
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Cloud Hosting
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#A7E6FF] focus-within:outline-0 focus-within:text-[#A7E6FF]"
                    >
                      Dedicated Hosting
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5  lg:pl-9 xl:pl-16 col-start-1 max-lg:row-start-1">
            <Link
              href={"/"}
              className="mb-9 max-md:mx-auto max-md:flex max-md:w-full items-center justify-center"
            >
              <Image src={logo} alt="logo" className="w-36" />
            </Link>
            <h2 className="font-manrope font-semibold text-2xl max-md:text-center leading-9 text-[#fff] mt-9 mb-5">
              PnH Corporation
            </h2>
            <p className="text-base font-normal text-gray-500 max-md:text-center mb-8">
              PnH BD is a full-fledged software, website and app creation
              company located in the capital city of Dhaka. PnH is known as
              Creative Website Development Company of Bangladesh.
            </p>
            <div className="relative max-w-xs max-md:max-w-full max-md:mx-auto  text-gray-500 focus-within:text-gray-900 mb-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.95739 5.61072L6.47281 7.80147C8.18826 8.87052 9.04599 9.40504 9.99991 9.40489C10.9538 9.40474 11.8114 8.86994 13.5265 7.80035L17.0509 5.60245M9.16667 16.6663H10.8333C13.976 16.6663 15.5474 16.6663 16.5237 15.69C17.5 14.7137 17.5 13.1424 17.5 9.99967C17.5 6.85698 17.5 5.28563 16.5237 4.30932C15.5474 3.33301 13.976 3.33301 10.8333 3.33301H9.16667C6.02397 3.33301 4.45262 3.33301 3.47631 4.30932C2.5 5.28563 2.5 6.85698 2.5 9.99967C2.5 13.1424 2.5 14.7137 3.47631 15.69C4.45262 16.6663 6.02397 16.6663 9.16667 16.6663Z"
                    stroke="#A7E6FF"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full md:max-w-xs pr-4 pl-12 py-2.5 text-base font-normal shadow-xs text-white bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
                placeholder="ecommerce@pnhbd.com"
              />
            </div>
            <button className="py-2.5 px-7 max-md:w-full max-md:text-center rounded-sm max-md:mx-auto flex items-center justify-center bg-[#A7E6FF] text-base font-semibold text-black mb-8 transition-all duration-500 hover:bg-[#182b50] hover:text-white ">
              Subscribe
            </button>
            <div className="flex items-center max-md:justify-center gap-5">
              <Link
                href={""}
                className="p-2 text-white rounded-full transition-all duration-500 hover:bg-[#A7E6FF] focus-within:bg-[#A7E6FF] focus-within:outline-0 hover:text-black focus-within:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
                  ></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                href={"http://wa.me/8801914436613"}
                className="p-2 text-white rounded-full transition-all duration-500 hover:bg-[#A7E6FF] focus-within:bg-[#A7E6FF] focus-within:outline-0 hover:text-black focus-within:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                  ></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                href={"https://linkedin.com/company/pnh-corporation"}
                className="p-2 text-white rounded-full transition-all duration-500 hover:bg-[#A7E6FF] focus-within:bg-[#A7E6FF] focus-within:outline-0 hover:text-black focus-within:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M21.5 0h-19C1.12 0 0 1.12 0 2.5v19C0 22.88 1.12 24 2.5 24h19c1.38 0 2.5-1.12 2.5-2.5v-19C24 1.12 22.88 0 21.5 0zM7.94 20.66h-3.6V9.298h3.6V20.66zm-1.8-13.504c-.99 0-1.798-.808-1.798-1.796 0-.988.808-1.796 1.798-1.796.988 0 1.796.808 1.796 1.796 0 .988-.808 1.796-1.796 1.796zM20.66 20.66h-3.602v-5.34c0-1.28-.024-2.92-1.796-2.92-1.8 0-2.074 1.405-2.074 2.857v5.404h-3.602V9.298h3.5v1.52h.048c.488-.924 1.68-1.897 3.454-1.897 3.698 0 4.38 2.43 4.38 5.592v6.147z"
                  />
                </svg>
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/pnhitsolution"}
                className="p-2 text-white  rounded-full transition-all duration-500 hover:bg-[#A7E6FF] focus-within:bg-[#A7E6FF] focus-within:outline-0 hover:text-black focus-within:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="currentColor"
                    d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-7">
          <p className="text-sm font-normal text-gray-500">
            <a href="#"></a>
            Copyright © 2024 All Rights Reserved By PnH Corporation
          </p>
        </div>
      </div>
    </section>
   </div>
  );
};
export default Footer;
