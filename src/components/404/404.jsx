import React from "react";
import {useParams, Link} from "react-router-dom";
import {Button} from "@material-tailwind/react";
export default function NotFound() {
   return (
      <div className='my-10'>
         <img src='../src/components/404/img/404.png' alt='' />
         <div className='text-center'>
            <div className='text-3xl text-[#E6C598]  my-5 font-bold'>خطای ۴۰۴</div>
            <div className='text-2xl my-5 '>متاسفانه صفحه موردنظر یافت نشد</div>
            <Link to='/'>
               <Button className='mx-auto rounded-full' color='teal'>
                  بازگشت به صفحه اصلی
               </Button>
            </Link>
         </div>
      </div>
   );
}
