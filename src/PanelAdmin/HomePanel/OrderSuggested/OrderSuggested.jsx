import React from "react";
import "./OrderSuggested.css";
import {Avatar, Button} from "@material-tailwind/react";
export default function OrderSuggested() {
   return (
      <div className='p-5 py-10 text-white bg-grayAdmin h-full rounded-md'>
         <h1 className='text-xl mb-8'>پیشنهادات تخفیف</h1>
         <div className='my-5 flex gap-6'>
            <div>
               <p className='flex-none'> بهترین پیشنهاد این است</p>
               <p className='my-3 text-success'>50000 ریال</p>
               <p className='flex-none mt-10'> اخرین کالا</p>
               <p className='my-3 text-danger'>قهوه عربیکا آفریقایی</p>
            </div>
            <div className='border-percent flex items-center justify-center'>
               <p className='text-2xl'>75%</p>
               <div className='percent'></div>
            </div>
         </div>
         <div>
            <div className='flex gap-3 items-center'>
               <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg'></Avatar>
               سهیل محمدی
            </div>
            <Button className='font-thin mt-6 w-full text-sm bg-gray-1000'>تایید</Button>
         </div>
      </div>
   );
}
