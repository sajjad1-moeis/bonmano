import React, {useId} from "react";
import {FaPhoneVolume} from "react-icons/fa6";
import {IoIosPrint} from "react-icons/io";
import {MdEmail, MdTimer} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5";

export let btnMore = [
   {element: <FaPhoneVolume />, title: "02174881"},
   {element: <IoIosPrint />, title: "02174882101"},
   {element: <MdEmail />, title: "info@example.com"},
   {element: <IoLocationSharp />, title: "تهران ,بلوار میر داماد ,خیابان البرز,کوچه قبادیان"},
   {isWidth: true, element: <MdTimer />, title: "شنبه تا چهارشنبه از ساعت 8:00 - 16:30 پنج‌شنبه از ساعت 8:00 - 12:30"},
];

export default function LocationSection() {
   return (
      <>
         <div className=' grid relative grid-cols-1 md:grid-cols-5 container my-10 md:my-32 p-5 md:p-10'>
            <div className='absolute bg-[#F5F5F5] max-w-[900px] w-full h-full rounded-2xl'></div>
            <div className='md:col-span-2 h-max my-auto z-30'>
               <h1 className='text-xl'>اطلاعات تماس دفتر مرکزی بن‌مانو</h1>
               {btnMore.map((item) => (
                  <div key={useId()}>
                     <BtnMore {...item} color='text-gray-600' />
                  </div>
               ))}
            </div>
            <div className='md:col-span-3 z-30 rounded-3xl overflow-hidden h-full '>
               <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.7358926981788!2d50.08413992707879!3d33.642231648141916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f94ca6fe2db8eef%3A0x2621bb28422aee84!2sKhomeyn%2C%20Markazi%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1711556142344!5m2!1sen!2sus'
                  width='100%'
                  height='100%'
                  style={{border: "0", outline: "0"}}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
               ></iframe>
            </div>
         </div>
      </>
   );
}
export function BtnMore({title, element, bg, isWidth, color}) {
   return (
      <div className='my-8 flex gap-4 items-center'>
         <div className={`w-max ${bg ? bg : "bg-gray-800 text-white"}  p-3 text-lg rounded-md`}>{element}</div>
         <p className={`${color} ${isWidth ? "max-w-[250px]" : ""} text-sm md:text-base`}>{title}</p>
      </div>
   );
}
