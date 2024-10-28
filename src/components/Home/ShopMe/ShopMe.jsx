import React from "react";
import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
export default function ShopMe() {
   return (
      <div className='md:px-0 px-5 mt-10 md:mt-20 mb-20'>
         <img src='https://www.bonmano.com/wp-content/uploads/2024/02/about-main-2048x794.jpg' alt='' />
         <div className='container mx-auto text-center mt-10 max-w-[870px] w-full'>
            <p className='text-xl md:text-3xl mb-5'>داستان ما از کجا شروع شد؟</p>
            <p className='text-gray-600 font-thin leading-7'>
               داستان بن‌مانو داستان رشد بذر قهوه است؛ همان بذری که از دل خاک، جوانه سبز درآورد و در تمامی این سال‌ها با
               ذوق زیر نور خورشید نشست تا قدش بلند و بلندتر شود. بذر ما در یکی از روزهای گرم اولین ماه تابستان کاشته شد
               و ریشه آن هر روز در خاک محکم‌تر شد تا درخت آن به ثمر بنشیند. سال‌های زیادی گذشت و ما …..
            </p>
            <Link to='/about-us'>
               <Button className='p-2.5 text-white rounded-full bg-successDark mx-auto font-thin mt-5 text-sm'>
                  بن‌مانو را بیشتر بشناسید
               </Button>
            </Link>
         </div>
      </div>
   );
}
