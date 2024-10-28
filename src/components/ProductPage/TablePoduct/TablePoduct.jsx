import React from "react";
import {Button} from "@material-tailwind/react";
import {IoIosArrowDown} from "react-icons/io";
let itemTable = [
   {title: "نام محصول:", desc: "دانه قهوه ترکیبی اسپرسو سوبار"},
   {title: "نام محصول:", desc: "دانه قهوه ترکیبی اسپرسو سوبار"},
   {title: "نام محصول:", desc: "دانه قهوه ترکیبی اسپرسو سوبار"},
   {title: "نام محصول:", desc: "دانه قهوه ترکیبی اسپرسو سوبار"},
   {title: "نام محصول:", desc: "دانه قهوه ترکیبی اسپرسو سوبار"},
   {title: "نام محصول:", desc: "دانه قهوه ترکیبی اسپرسو سوبار"},
];
export default function TablePoduct() {
   return (
      <div className='p-8 rounded-xl  bg-gray-100 mt-20 relative pb-10 ' id='tableProduct'>
         <h1 className='text-center  text-2xl'>مشخصات محصول</h1>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10 mb-14'>
            {itemTable.map((item, index) => (
               <div key={index} className='grid grid-cols-3 gap-3'>
                  <div className=' bg-white p-1.5 px-3 rounded-md text-sm'>نام محصول:</div>
                  <div className='col-span-2 bg-white p-1.5 px-3 rounded-md text-sm'>دانه قهوه ترکیبی اسپرسو سوبار</div>
               </div>
            ))}
         </div>
         <div className='text-center absolute -bottom-3 left-1/2 -translate-x-1/2'>
            <p className='text-successDark mb-2'>مشاهده بیشتر </p>
            <Button className='w-max  rounded-full p-2 bg-successDark text-lg'>
               <IoIosArrowDown />
            </Button>
         </div>
      </div>
   );
}
