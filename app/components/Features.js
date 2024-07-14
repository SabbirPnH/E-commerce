import React from 'react';
import Devider from "./Devider";
const data =[
{
    id:1,
    number:'1',
    features:'Unlimited Category and Subcategory'
},
{
    id:2,
    number:'2',
    features:'Unlimited Product'
},
{
    id:3,
    number:'3',
    features:'Multiple image per product'
},
{
    id:4,
    number:'4',
    features:'Regular price and old price'
},
{
    id:5,
    number:'5',
    features:'Fixed number of products per page'
},
{
    id:6,
    number:'6',
    features:'Wishlist'
},
{
    id:7,
    number:'7',
    features:'Product Compare'
},
{
    id:8,
    number:'8',
    features:'Brand Management'
},
{
    id:9,
    number:'9',
    features:'Cash on Delivery'
},
{
    id:10,
    number:'10',
    features:'Online Payment'
},
{
    id:11,
    number:'11',
    features:'Customer Registration'
},
{
    id:12,
    number:'12',
    features:'Password Recovery'
},
{
    id:13,
    number:'13',
    features:'Sales Management'
},
{
    id:14,
    number:'14',
    features:'User Management'
},
{
    id:15,
    number:'15',
    features:'SEO Friendly URL'
},
{
    id:16,
    number:'16',
    features:'Discount Management'
},
{
    id:17,
    number:'17',
    features:'Hot Deal Management'
},
{
    id:18,
    number:'18',
    features:'Order Management'
},
{
    id:19,
    number:'19',
    features:'Guest checkout'
},
{
    id:20,
    number:'20',
    features:'And much more'
},
{
    id:21,
    number:'21',
    features:'User-friendly design'
},

]
export default function Features() {
  return (
  <div className='bg-teal-50 py-10 mb-8'>
    <div className='pb-8'>
    <h1 className='text-[22px] sm:text-[32px] text-center '>Ecoomerce Website Features</h1>
    <div className="flex justify-center"><Devider /></div>
    </div>
     <div className='px-5 sm:px-20 grid sm:grid-cols-2 gap-5 lg:grid-cols-3 '>
   {
    data.map((item,id)=>(
        
     <div key={id} className='flex  justify-center'>
           <div  className="relative inline-flex">
        <span
          className="absolute rounded-full py-1 px-1 text-xs font-medium leading-none grid place-items-center top-[4%] left-[2%] -translate-x-2/4 -translate-y-2/4 bg-[#3DC2EC] text-white border-2 border-pink-400 min-w-[24px] min-h-[24px]">
        {item.number}
        </span>
        <button
          className="align-middle w-72 bg-slate-50 select-none font-sans font-bold  capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md py-5 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
          type="button">
          {item.features}
        </button>
      </div>
     </div>
    ))
   }
   </div>
  </div>
  );
}
