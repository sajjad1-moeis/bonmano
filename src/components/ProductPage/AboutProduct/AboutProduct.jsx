import React from "react";
import {TiStarFullOutline} from "react-icons/ti";
import {BiCategory} from "react-icons/bi";

export default function AboutProduct() {
   return (
      <div className='md:col-span-5 p-2'>
         <p>COLOMBIA SINGLE ORIGIN COFFEE BEANS</p>
         <div className='flex justify-between items-center py-5 border-b border-gray-300'>
            <p className='md:text-2xl'>دانه قهوه تک‌خاستگاه کلمبیا (250 گرم)</p>
            <div className='text-brown text-2xl flex gap-1 '>
               <p className='text-gray-500 text-base mt-[3px]'>5/0</p>
               <TiStarFullOutline />
            </div>
         </div>
         <div className='flex justify-between items-center my-5'>
            <div className='flex items-center gap-3'>
               <BiCategory />
               دسته بندی : ترکیبی
            </div>
            <p className='text-sm text-gray-600'>SKU: 352120000109</p>
         </div>
         <div className='grid grid-cols-2 gap-3'>
            <div className='p-3 rounded-xl bg-gray-100 text-gray-700 text-sm'>خاستگاه : قاره آسیا</div>
            <div className='p-3 rounded-xl bg-gray-100 text-gray-700 text-sm'>خاستگاه : قاره آسیا</div>
            <div className='p-3 rounded-xl bg-gray-100 text-gray-700 text-sm'>خاستگاه : قاره آسیا</div>
            <div className='p-3 rounded-xl bg-gray-100 text-gray-700 text-sm'>خاستگاه : قاره آسیا</div>
         </div>
      </div>
   );
}
