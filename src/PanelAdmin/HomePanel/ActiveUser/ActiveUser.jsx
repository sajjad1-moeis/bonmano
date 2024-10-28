import React from "react";
import {Avatar} from "@material-tailwind/react";
import {FaCartShopping} from "react-icons/fa6";
export default function ActiveUser() {
   return (
      <div className='bg-grayAdmin p-5 md:p-10 rounded-md text-white h-full'>
         <h1 className='text-xl'>فعالیت کاربر</h1>
         <p className='my-3 text-sm leading-7 text-gray-400'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
         </p>
         <div className='flex my-5 gap-5'>
            <div className='cursor-pointer'>کاربر فعلی</div>
            <div className='cursor-pointer'>درخاست کاربر</div>
         </div>
         <div className='grid grid-cols-2 gap-4'>
            <ItemBoxActive />
            <ItemBoxActive />
         </div>
      </div>
   );
}

function ItemBoxActive() {
   return (
      <div className='p-3 md:p-6 rounded-md bg-gray-1000'>
         <div className='flex justify-between '>
            <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg' alt='avatar' />
            <div className='flex gap-3 items-center'>
               <FaCartShopping />
               50 کالا
            </div>
         </div>
         <div className='mt-5'>
            <p>هوتن شکیبا</p>
            <p className='mt-2'>27 ساله</p>
         </div>
      </div>
   );
}
