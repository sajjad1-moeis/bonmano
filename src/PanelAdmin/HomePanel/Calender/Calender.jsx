import React from "react";
import {Calendar} from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {IoMdSettings} from "react-icons/io";
export default function Calender() {
   let date = new Date();
   let hour = date.getHours();

   return (
      <div className='bg-grayAdmin h-full rounded-md '>
         <div className='mb-6  p-5 text-white flex justify-between '>
            <div>
               <p className='mb-3 text-xl'>
                  {hour}:{date.getMinutes()} {hour > 6 && hour < 12 ? "صبح" : hour > 12 && hour < 18 ? "ظهر" : "شب"}
               </p>
               <div className=' flex items-center gap-2 text-white'>
                  <img src='./src/PanelAdmin/HomePanel/Calender/1.png' className='w-10' />
                  <p className='text-sm'>21.5</p>
               </div>
            </div>
            <div className=' text-3xl'>
               <IoMdSettings />
            </div>
         </div>
         <Calendar
            style={{
               backgroundColor: "#21222D",
               width: "100%",
               borderRadius: "8px",
               boxShadow: "0",
               color: "#fff",
               fontSize: "16px",
               padding: "3px 10px",
            }}
            calendar={persian}
            locale={persian_fa}
         />
      </div>
   );
}
