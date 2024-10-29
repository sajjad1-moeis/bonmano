import React, {useId, useRef} from "react";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
import {GoArrowLeft} from "react-icons/go";

let dataSlider = [
   {img: "/img/Home/Slide1/4.png", title: "کیک شکلاتی", English: "chuclte cake"},
   {img: "/img/Home/Slide1/1.png", title: "هات چاکلت", English: "Hot choclate"},
   {img: "/img/Home/Slide1/2.png", title: "دانه قهوه", English: "Stock images"},
   {img: "/img/Home/Slide1/3.png", title: "استارباکس", English: "Starbucks"},
   {img: "/img/Home/Slide1/4.png", title: "کیک شکلاتی", English: "chuclte cake"},
];

export default function Slide1() {
   let bind = {
      count: 4,
      isTitle: true,
      isArrow: true,
      isDots: true,
      elmArrow: <GoArrowLeft className='w-6 h-6 md:w-8 md:h-8 text-white' />,
   };
   return (
      <div className='mt-10 h-full container mx-auto'>
         <div className=' helpYou  a relative z-auto container mx-auto h-[150px] md:h-[250px] rounded-3xl bg-successDark md:px-20 px-5  overflow-visible md:pt-16 pt-10 text-lg font-bold text-white '></div>
         <div className='slide1Home -mt-[107px] md:-mt-[175px] container mx-auto px-5 md:px-10 relative'>
            <CarouselEsy {...bind}>
               {dataSlider.map((item) => {
                  return (
                     <div key={useId()}>
                        <div className='bg-white p-8 mt-5   rounded-3xl  shadow-lg'>
                           <div className='img justify-end'>
                              <img src={item.img} alt='' />
                           </div>
                           <div className=' py-4   text-right'>
                              <p className='text-xl text-black'>{item.title}</p>
                              <p className='text-gray-500 font-thin text-sm mt-2'>{item.English}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </CarouselEsy>
         </div>
      </div>
   );
}
