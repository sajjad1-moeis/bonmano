import React from "react";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
import {IoIosArrowBack} from "react-icons/io";
let itemCarousel = [
   {title: "طرز تهیه نوشیدنی", img: "../src/components/BlogPage/CategoryContents/img/1 (1).svg"},
   {title: "طرز تهیه نوشیدنی", img: "../src/components/BlogPage/CategoryContents/img/1 (2).svg"},
   {title: "طرز تهیه نوشیدنی", img: "../src/components/BlogPage/CategoryContents/img/1 (3).svg"},
   {title: "طرز تهیه نوشیدنی", img: "../src/components/BlogPage/CategoryContents/img/1 (4).svg"},
   {title: "طرز تهیه نوشیدنی", img: "../src/components/BlogPage/CategoryContents/img/1 (5).svg"},
];
export default function CategoryContents() {
   let bind = {
      count: 5,
      isDots: true,
      isSmal2: true,
      isArrow: true,
      elmArrow: <IoIosArrowBack className='arrow' />,
   };
   return (
      <div className='md:w-7/12 h-max container mb-10 CategoryBlog'>
         <h1 className='text-2xl my-8 text-center'>دسه بندی مطالب </h1>
         <div className='relative py-5'>
            <div className='absolute w-full h-full px-12 right-0 -z-10 top-0'>
               <div className='w-full h-full bg-gray-100 rounded-xl overflow-hidden'></div>
            </div>
            <CarouselEsy {...bind}>
               {itemCarousel.map((item, index) => (
                  <div
                     key={index}
                     className=' bg-white cursor-pointer hover:bg-successDark hover:text-white transition-all p-5 py-8 rounded-xl border border-successDark text-center'
                  >
                     <img src={item.img} className='w-16 mx-auto' />
                     <p className='my-4'>{item.title}</p>
                  </div>
               ))}
            </CarouselEsy>
         </div>
      </div>
   );
}
