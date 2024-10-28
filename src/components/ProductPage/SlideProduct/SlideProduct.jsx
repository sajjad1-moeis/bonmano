import React, {lazy} from "react";
import {IoIosArrowBack} from "react-icons/io";
import {ItemImg} from "../Price&CountProduct/Price&CountProduct";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
let items = [
   "https://www.bonmano.com/wp-content/uploads/2023/02/colombia-main.jpg",
   "https://www.bonmano.com/wp-content/uploads/2017/06/sobar-main-300x300.jpg",
   "https://www.bonmano.com/wp-content/uploads/2023/02/colombia-main.jpg",
];
export default function SliderProduct({item}) {
   let bind = {
      arrItemPadding: item,
      count: 1,
      isPadding: true,
   };

   return (
      <div className='md:col-span-4 productPage overflow-hidden pb-10 md:pb-6'>
         <CarouselEsy {...bind}>
            {item.map((item, index) => (
               <div key={index} className=' outline-none border border-brown rounded-xl overflow-hidden'>
                  <img src={item} className='m-auto h-full w-full object-cover' alt='' />
               </div>
            ))}
         </CarouselEsy>
      </div>
   );
}
