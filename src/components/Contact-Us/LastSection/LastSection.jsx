import React from "react";
import {BtnMore} from "../LocationSection/LocationSection";
import {MdTimer} from "react-icons/md";
import {FaPhoneVolume} from "react-icons/fa6";
import {IoLocationSharp} from "react-icons/io5";
let btnMore = [
   {element: <FaPhoneVolume />, title: "02174881"},
   {element: <IoLocationSharp />, title: "تهران ,بلوار میر داماد ,خیابان البرز,کوچه قبادیان"},
   {element: <MdTimer />, title: "تمامی روزهای هفته از ساعت 10:00 - 23:00"},
];
export default function LastSection() {
   return (
      <div className='container grid grid-cols-1 md:grid-cols-2 my-10 mb-10 md:mb-20 md:mt-40'>
         <div className='rounded-2xl overflow-hidden'>
            <img src='./src/components/Contact-Us/LastSection/img/img.jpg' alt='' />
         </div>
         <div className='p-5 h-max my-auto'>
            <div className=' bg-successDark p-5 md:p-10 rounded-2xl -mt-20 md:-ms-10'>
               {btnMore.map((item, index) => (
                  <div key={index}>
                     <BtnMore bg='bg-white text-successDark' color='text-white' {...item} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
