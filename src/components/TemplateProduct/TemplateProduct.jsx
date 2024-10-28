import React from "react";
import {CiShoppingCart} from "react-icons/ci";
import {NavLink} from "react-router-dom";

export default function TemplateProduct(props) {
   const clickHandeler = (id) => {
      console.log(id);
   };
   return (
      <div className='text-right bg-white  rounded-3xl border overflow-hidden border-gray-300 '>
         <NavLink to={`/product/${props.id}`}>
            <img onClick={() => window.scrollTo(0, 0)} src={`${props.img}`} className='mx-auto' alt='' />
         </NavLink>
         <div className='p-5'>
            <div className='flex items-center gap-1 justify-end'>
               <p className='text-xs mt-1.5 text-gray-600'>{props.weight} گرم</p>
               <img
                  className='w-4 '
                  src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/weight.png'
                  alt=''
               />
            </div>
            <p className='font-semibold text-gray-800 text-sm md:text-balance my-3 h-5'> {props.title}</p>
            <div className='flex justify-between mt-5 items-center'>
               <div
                  className='p-2 rounded-full border border-successDark cursor-pointer'
                  onClick={() => clickHandeler(props.id)}
               >
                  <CiShoppingCart className='w-6 h-6 text-successDark' />
               </div>
               <div className='flex items-center gap-1'>
                  <p className='text-xs text-gray-700'>تومان</p>
                  <span>{props.price.toLocaleString()}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
