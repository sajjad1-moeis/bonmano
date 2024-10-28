import React from "react";

export default function CircleImg({img, title}) {
   return (
      <div className='flex gap-3 items-center mb-10 justify-start'>
         <div className='rounded-full w-max  border-[5px] border-successDark overflow-hidden'>
            <div className='border flex-none p-3 md:p-6 rounded-full border-white  bg-successDark'>
               <img src={img} className='w-7 h-7 md:w-10 md:h-10' />
            </div>
         </div>
         <div>
            <p className='text-lg '>{title}</p>
            <p className='mt-2 text-xs text-gray-700'>مناسب با ذائقه ایرانی از بهترین مزارع دنیا</p>
         </div>
      </div>
   );
}
