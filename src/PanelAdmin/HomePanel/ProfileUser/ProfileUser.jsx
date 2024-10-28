import React from "react";

import {Avatar} from "@material-tailwind/react";
export default function ProfileUser() {
   return (
      <div className='text-white text-center  pt-10 h-full'>
         <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg' className='w-20 h-20 mx-auto ' alt='avatar' />
         <div className='my-8 text-center'>
            <p className='mb-1 text-xl'>سجاد معین فرد</p>
            <p className='text-gray-500 text-sm'>طراح سایت</p>
         </div>
         <div className='bg-grayAdmin p-5 w-full rounded-md text-right px-10'>
            <p className='my-4'>1 سال سابقه کار در این حوزه رو درام</p>
            <p className='my-4 '>خمین - خیابان مطهری ....</p>
            <p className='my-4 '>0918699098</p>
            <p className='my-4 '>sajjad@gmail.com</p>
         </div>
      </div>
   );
}

export function AvatarDefault() {}
