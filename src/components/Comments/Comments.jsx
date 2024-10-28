import React from "react";
import {FaRegUser} from "react-icons/fa6";
export default function Comments() {
   return (
      <div className=' container md:w-2/4 overflow-hidden mt-32'>
         <h1 className='my-5 font-bold text-xl text-center'>نظرات کاربران</h1>
         <div className=' p-3 text-center border border-gray-300 rounded-xl my-10'>
            .فقط مشتریانی که این محصول را خریداری کرده اند و وارد سیستم شده اند میتوانند برای این محصول دیدگاه(نظر) ارسال کنند.
         </div>
         <TemplateComments />
         <TemplateComments />
      </div>
   );
}

export function TemplateComments() {
   return (
      <div className='p-5 mb-8  rounded-xl'>
         <div className='flex  justify-between  items-center'>
            <div className='flex gap-4 border-r-[3px] border-successDark ps-3 items-center'>
               <div className='bg-successDark p-1.5 rounded-full text-white text-xs'>
                  <FaRegUser />
               </div>
               <p className='text-sm text-gray-700'>سجاد معین فرد</p>
            </div>
            <p className='text-sm text-successDark'>30 بهمن 1400</p>
         </div>
         <p className='mt-7 mb-4 px-5 text-sm text-gray-700'>
            اگر روسو و ریچی کنار هم باشن، بدون شک انتحاب من روسو هست. اما برای ایجاد تنوع همیشه توی سفارشم یک بسته ریچی هم دارم.
         </p>
         <div className='w-full flex justify-end'>
            <button className='text-successDark text-sm '>پاسخ</button>
         </div>
      </div>
   );
}
