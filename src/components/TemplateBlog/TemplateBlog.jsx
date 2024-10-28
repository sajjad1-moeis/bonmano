import React from "react";
import {Link} from "react-router-dom";

export default function TemplateBlog({img, title, id}) {
   return (
      <Link to={`/blog/${id}`}>
         <div className='blogContainer  rounded-xl md:p-7 my-10 md:grid grid-cols-4 block gap-4'>
            <div className='relative'>
               <div className='absolute w-full h-full bg-successDark rounded-lg opacity-0 absloteImgTemplateBlog'></div>
               <img className='rounded-lg' src={img} alt='' />
            </div>
            <div className='md:col-span-3 md:p-0 pb-10 pt-5 px-5 '>
               <h1 className='mb-3 tilteTemplateBlog'>{title}</h1>
               <div className='text-gray-700 leading-7'>
                  گاهی اوقات ممکن است بعضی افراد نسبت به یک ماده غذایی خاص حساسیت نشان دهند، البته این حساسیت می‌تواند
                  دائمی ‌یا حتی به صورت موقت باشد. حساسیت به مواد غذایی و
               </div>
            </div>
            <div className='text-sm absolute time px-4 text-gray-700 py-2 bg-white -bottom-4 left-10 rounded-full border border-gray-300'>
               21 فروردین 1403
            </div>
         </div>
      </Link>
   );
}
