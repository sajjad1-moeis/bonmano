import React, {useId} from "react";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
let itemCarousel = ["../src/components/BlogPage/Section1/img/1.png", "../src/components/BlogPage/Section1/img/2.png"];
export default function Section1() {
   return (
      <div className='container flex flex-col-reverse  lg:grid grid-cols-1 lg:grid-cols-2 my-20'>
         <div className='h-max my-auto'>
            <h1 className='text-2xl my-5'>مجله بن‌مانو</h1>
            <p className='leading-8 text-gray-700'>
               در مجله بن‌مانو ما در تلاشیم که بتوانیم مخاطبان را با همه امور مرتبط به قهوه مانند آشنایی با انواع قهوه و پیدا کردن بهترین قهوه متناسب با ذائقه‌شان‌ آشنا کنیم تا
               دغدغه کم‌تری داشته باشند و انرژی بیش‌تر را برای یادگیری تکنیک‌های دم‌آوری قهوه بگذارند. کارشناسان قهوه ما راهنمای شما در این سفر هستند تا بتوانید لذت خوردن قهوه‌های
               متفاوت و خوشمزه را داشته باشید.
            </p>
         </div>
         <div>
            <CarouselEsy count={1} isSmal={1}>
               {itemCarousel.map((item) => (
                  <img src={item} key={useId()} />
               ))}
            </CarouselEsy>
         </div>
      </div>
   );
}
