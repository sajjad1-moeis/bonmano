import React from "react";
import {Link} from "react-router-dom";

export default function TemplateArticle({id, img, title, description}) {
   return (
      <Link to={`/blog/${id}`}>
         <div className='bg-white pb-5  overflow-hidden rounded-lg shadow-md'>
            <img src={`.${img}`} alt='' />
            <div className='flex gap-1 border border-gray-300 w-max mx-auto -mt-5 relative rounded-full py-2 px-4 bg-white text-successDark text-sm'>
               <p className='w-max '>1402</p>
               <p>آذر</p>
               <p className=''>03 </p>
            </div>
            <div className='mt-8 text-right p-5'>
               <div className='font-semibold'>{title}</div>
               <div className='mt-4 text-sm text-gray-600'>{description}</div>
            </div>
         </div>
      </Link>
   );
}
