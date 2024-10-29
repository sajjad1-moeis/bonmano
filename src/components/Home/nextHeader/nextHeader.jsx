import {Button} from "@material-tailwind/react";
import React from "react";
import {Link} from "react-router-dom";

export default function NextHeader() {
   return (
      <div className=' bg-center bg-cover  my-20 md:mb-20 relative  '>
         <div className='relative'>
            <div className='absolute w-full h-full bg-black opacity-60 top-0'></div>

            <video autoPlay loop playsInline muted poster className='size-full '>
               <source
                  src='https://www.bonmano.com/wp-content/uploads/2024/01/020329_Bonmano-Clip-7_2.mp4'
                  type='video/mp4'
               />
            </video>
         </div>

         <div className='container md:text-right text-center z-50  h-max inset-0 md:m-auto  md:absolute p-5'>
            <h1 className='text-brown text-xl  md:text-3xl'>راهنمای دم آوری قهوه</h1>
            <div className='max-w-[600px] md:my-5'>
               <p className='md:text-white text-sm my-5 leading-8 px-5 md:px-0'>
                  برای علاقه‌مندان به قهوه که می‌خواهند فنجان قهوه بهتری را در خانه دم‌آوری کنند. باریستاهای ما، انواع
                  روش‌ها با هر دم‌افزاری که فکرش را بکنید آموزش دادند تا یک قهوه باکیفیت دقیقا همان‌طوری که دوست دارید
                  دم‌آوری کنید.
               </p>
            </div>
            <Link>
               <Button className='font-thin md:hidden rounded-full text-sm px-4 py-2' variant='outlined'>
                  بیشتر بدانید
               </Button>
               <Button
                  className='font-thin md:block hidden rounded-full text-sm px-4 py-2'
                  color='white'
                  variant='outlined'
               >
                  بیشتر بدانید
               </Button>
            </Link>
         </div>
      </div>
   );
}

export function ItemBorder({text, color, center}) {
   return (
      <div className={`flex items-center gap-3  ${center ? "justify-center" : ""} md:justify-start`}>
         <div
            className={`w-[18px] h-[18px] bg-successDark border-[5px]  rounded-full`}
            style={{borderColor: `${color ? color : "#D0E0DE"}`}}
         ></div>
         <div className='text-successDark font-semibold'>{text}</div>
      </div>
   );
}
