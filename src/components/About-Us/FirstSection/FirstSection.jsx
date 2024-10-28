import React from "react";
import {Button} from "@material-tailwind/react";
export default function FirstSection() {
   return (
      <div>
         <img src='./src/components/About-Us/img.jpg' alt='' />
         <div className='max-w-[850px] w-full text-center mx-auto my-8 md:my-20 '>
            <p className='text-2xl'>داستان ما از کجا شروع شد؟</p>
            <p className='text-successDark my-5'>از تیمی سه نفره تا خانواده‌‌ای 200 نفره</p>
            <p className='leading-8 text-gray-700'>
               داستان بن‌مانو داستان رشد بذر قهوه است؛ همان بذری که از دل خاک جوانه زد و در تمامی این سال‌ها با ذوق زیر نور خورشید نشست تا قدش بلند و بلندتر شود. بذر ما در یکی از
               روزهای گرم اولین ماه تابستان کاشته شد و ریشه آن هر روز در خاک محکم‌تر شد تا درخت آن به ثمر بنشیند. سال‌های زیادی گذشت، ما در کنار شما رشد کردیم و علاقه مشترک‌مان
               یعنی قهوه، انگیزه گفت‌وگوهای بسیار و دست یافتن به یک ماموریت واضح و مشخص شد: خلق تجربه‌ای یکتا از نوشیدن قهوه‌ای تازه برشت و باکیفیت.
            </p>
            <Button className='bg-successDark py-2 mt-10 focus:bg-successDark font-thin text-sm rounded-full'>شروع کنید</Button>
         </div>
      </div>
   );
}
