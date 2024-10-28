import React from "react";
import {Avatar} from "@material-tailwind/react";
import Charts from "../../HomePanel/Chart/Chart";
export default function BestProduct() {
   return (
      <div className=' bg-grayAdmin rounded-md text-white h-full overflow-hidden'>
         <p className='pt-10 mb-8 text-success text-xl text-center'>پر فروش ترین محصول</p>
         <div className='px-10 flex justify-between items-center'>
            <div>
               <p className='my-3'>
                  <span className='text-xs text-gray-500'> نام محصول :</span> قهوه عربیکا
               </p>
               <p className='my-3'>
                  <span className='text-xs text-gray-500'>قیمت : </span>
                  20,000
               </p>
               <p className='my-3'>
                  <span className='text-xs text-gray-500'>فروش : </span>
                  500
               </p>
            </div>
            <Avatar className='w-28 h-28' src='https://www.bonmano.com/wp-content/uploads/2023/01/vitaly-main.png' />
         </div>
         <Charts />
      </div>
   );
}
