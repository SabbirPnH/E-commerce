

// import Image from "next/image";
// import Link from "next/link";
// import { GiCheckMark } from "react-icons/gi";

// const data = [
//     {
//         id: 1,
//         title: "Post title 1",
//         descriptions: [
//             "Description part 1 of your post/article 1",
//             "Description part 2 of your post/article 1",
//             "Description part 3 of your post/article 1",
//             "Description part 4 of your post/article 1",
//             "Description part 5 of your post/article 1",
//             "Description part 6 of your post/article 1",
//             "Description part 7 of your post/article 1",
//         ],
//         imageSrc: "/img/api.png",
//         links: ["https://example1.com", "https://example2.com"],
//         checkmarks: 1 
//     },
//     {
//         id: 2,
//         title: "Post title 2",
//         descriptions: [
//             "Description part 1 of your post/article 2",
//             "Description part 2 of your post/article 2",
//             "Description part 3 of your post/article 2",
//         ],
//         imageSrc: "/img/feature-img2.png",
//         links: ["https://example3.com", "https://example4.com"],
//         checkmarks: 1 
//     },
   
// ];

// const Ecommerce = () => {
//     return (
//         <div className="px-5 sm:px-20 my-5">
//             {data.map((item) => (
//                 <div key={item.id} className="grid grid-1 sm:grid-cols-3 gap-4 bg-white overflow-hidden items-center justify-start my-5">
//                     <div className="relative flex col-span-1 w-full h-full flex-shrink-0">
//                         <Image
//                             className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//                             loading="lazy"
//                             src={item.imageSrc}
//                             alt="Shopping Logo"
//                             width={300}
//                             height={300}
                            
//                         />
//                     </div>
//                     <div className="flex flex-col col-span-2 gap-2 py-2">
//                         <div className="flex items-center gap-2 justify-start text-gray-500">
//                             {Array.from({ length: item.checkmarks }).map((_, index) => (
//                                 <GiCheckMark key={index} />

//                             ))}
//                             <p className="text-xl font-bold">{item.title}</p>
                           
//                         </div>
//                         <p>{item.title}</p>
//                         {item.descriptions.map((desc, index) => (
//                             <p key={index} className="text-gray-500 flex items-center gap-2">
//                                 <GiCheckMark />
//                                 {desc}
//                             </p>
                            
//                         ))}
//                         {item.links.map((link, index) => (
//                             <span key={index} className="flex items-center gap-2 justify-start text-gray-500">
//                                 <GiCheckMark />
//                                 <Link href={link} target="_blank" rel="noopener noreferrer">{link}</Link>
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             <hr className="mt-10" />
//         </div>
//     );
// };

// export default Ecommerce;





// import { GiCheckMark } from "react-icons/gi";
// import { IoStorefrontOutline } from "react-icons/io5";
// import Image from "next/image";

// const data = [
//     {
//         id: 1,
//         title: "Post title 1",
//         name:'sabbir',
//         descriptions: [
//             "Description part 1 of your post/article 1",
//             "Description part 2 of your post/article 1",
//             "Description part 3 of your post/article 1",
//             "Description part 4 of your post/article 1",
//             "Description part 5 of your post/article 1",
//             "Description part 6 of your post/article 1",
//             "Description part 7 of your post/article 1",
//         ],
//         imageSrc: "/img/feature-img1.png",
//         links: ["https://example1.com", "https://example2.com"],
//         checkmarks: 5, 
//         icon: IoStorefrontOutline 
//     },
//     {
//         id: 2,
//         title: "Post title 2",
//         name:'sgdftgr',
//         descriptions: [
//             "Description part 1 of your post/article 2",
//             "Description part 2 of your post/article 2",
//             "Description part 3 of your post/article 2",
//         ],
//         imageSrc: "/img/api.png",
//         links: ["https://example3.com", "https://example4.com"],
//         checkmarks: 3, 
//         icon: IoStorefrontOutline
//     },
//     {
//         id: 3,
//         title: "Post title 2",
//         name:'sgdftgr',
//         descriptions: [
//             "Description part 1 of your post/article 2",
//             "Description part 2 of your post/article 2",
//             "Description part 3 of your post/article 2",
//         ],
//         imageSrc: "/img/api.png",
//         links: ["https://example3.com", "https://example4.com"],
//         checkmarks: 3, 
//         icon: IoStorefrontOutline
//     },
  
// ];


// const Ecommerce = () => {
//     return (
//         <div className="px-5 sm:px-20 my-5">
//             {data.map((item) => (
//                 <div key={item.id} className="bg-white overflow-hidden my-5">
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-start p-5">
//                         {item.id % 2 !== 0 ? (
//                             <>
//                                 <div className="relative flex col-span-1 w-full h-44 flex-shrink-0">
//                                     <Image
//                                         className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//                                         loading="lazy"
//                                         src={item.imageSrc}
//                                         alt="Shopping Logo"
//                                         width={300}
//                                         height={300}
//                                     />
//                                 </div>
//                                 <div className="flex flex-col col-span-2 gap-2 py-2">
//                                     <div className="flex items-center gap-2 justify-start text-gray-500">
//                                         <div className="text-4xl"><item.icon/></div>
//                                         <p className="text-xl font-bold">{item.title}</p>
//                                         <p>{item.name}</p>
//                                     </div>
                                   
//                                     {item.descriptions.map((desc, index) => (
//                                         <p key={index} className="text-gray-500 flex items-center gap-2">
//                                             <GiCheckMark />
//                                             {desc}
//                                         </p>
//                                     ))}
//                                     {item.links.map((link, index) => (
//                                         <span key={index} className="flex items-center gap-2 justify-start text-gray-500">
//                                             <GiCheckMark />
//                                             <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
//                                         </span>
//                                     ))}
                                    
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div className="flex flex-col col-span-2 gap-2 py-2">
//                                     <div className="flex items-center gap-2 justify-start text-gray-500">
//                                         <item.icon />
//                                         <p className="text-xl font-bold">{item.title}</p>
//                                     </div>
//                                     {item.descriptions.map((desc, index) => (
//                                         <p key={index} className="text-gray-500 flex items-center gap-2">
//                                             <GiCheckMark />
//                                             {desc}
//                                         </p>
//                                     ))}
//                                     {item.links.map((link, index) => (
//                                         <span key={index} className="flex items-center gap-2 justify-start text-gray-500">
//                                             <GiCheckMark />
//                                             <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
//                                         </span>
//                                     ))}
//                                 </div>
//                                 <div className="relative flex col-span-1 w-full h-44 flex-shrink-0">
//                                     <Image
//                                         className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
//                                         loading="lazy"
//                                         src={item.imageSrc}
//                                         alt="Shopping Logo"
//                                         width={300}
//                                         height={300}
//                                     />
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                     <hr className="w-full mt-5" />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Ecommerce;






import { GiCheckMark } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import Image from "next/image";

const data = [
    {
        id: 1,
        title: "Beautiful Storefront",
        heading: 'We analyze your business requirements and create sound design which is best-suited eCommerce solution for your online store. To lead the tough competition, you should have amazing visual appeal. Whether it is desktop, laptops or any smartphones, we make sure that your eCommerce store functions properly on all devices.',
        descriptions: [
            "HTML5, CSS3 & Vue.js to enrich responsive interface and Rich-text description for products.",
            "Ability to search entire store, filters and sorting options for products.",
            " Unlimited product images with zoom features, facebook login and register.",
          
        ],
        imageSrc: "/img/Screenshot_9.png",
        checkmarks: 5,
        icon: IoStorefrontOutline
    },
    {
        id: 2,
        title: "Smarter Checkout",
        heading: 'We work with well-strategized methodology. Our approach is to create user-friendly eCommerce store with few & easy procedure of checkout. We design efficient & flawless shopping cart with multiple features.',
        descriptions: [
            "Flat Shipping charges / Location based shipping charges calculation and free shipping option.",
            "Gift wrap option with configurable gift wrap charges and redeem discount coupons.",
            " Third party Shipping partner integration like FEDEX, Bluedart and secured Payment Gateway integration.",
        ],
        imageSrc: "/img/smarter-checkout.jpg",
        checkmarks: 3,
        icon: IoStorefrontOutline
    },
    {
        id: 3,
        title: "Post title 2",
        heading: 'sgdftgr',
        descriptions: [
            "Description part 1 of your post/article 2",
            "Description part 2 of your post/article 2",
            "Description part 3 of your post/article 2",
        ],
        imageSrc: "/img/api.png",
        checkmarks: 3,
        icon: IoStorefrontOutline
    },
    
];

const Ecommerce = () => {
    return (
        <div className="px-5 sm:px-20 my-5">
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
                                            <item.icon />
                                        </div>
                                        <p className="text-[28px] text-gray-700">{item.title}</p>
                                    </div>
                                    <p className="text-gray-500 break-all">{item.heading}</p>
                                    {item.descriptions.map((desc, index) => (
                                        <p key={index} className="text-gray-500 flex items-center gap-2">
                                            <GiCheckMark className="text-[#182b50] font-extrabold"/>
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
                                            <item.icon />
                                        </div>
                                        <p className="text-[28px] text-gray-700">{item.title}</p>
                                    </div>
                                    <p className="text-gray-500  break-all">{item.heading}</p>
                                    {item.descriptions.map((desc, index) => (
                                        <p key={index} className="text-gray-500 flex items-center gap-2">
                                            <GiCheckMark  className="text-[#182b50] font-extrabold"/>
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
                    <div className=" sm:pt-10 lg:pt-32"><hr className="w-full " /></div>
                </div>
            ))}
        </div>
    );
};

export default Ecommerce;




