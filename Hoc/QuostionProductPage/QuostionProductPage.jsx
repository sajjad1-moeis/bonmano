import React, {useRef, useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
export function QuostionHoc(OriginalComponents) {
   return function (props) {
      let refAcord = useRef();
      const [openAccord, setOpenAccord] = useState(false);

      function clickHandeler() {
         setOpenAccord(!openAccord);
      }
      let bind = {
         openAccord: openAccord,
         refAcord: refAcord,
         click: clickHandeler,
         props: props,
         heightAccord: refAcord.current,
      };

      return <OriginalComponents {...bind} />;
   };
}

function QuostionProductPage({click, openAccord, refAcord, props, heightAccord}) {
   return (
      <div onClick={click} className={`cursor-pointer py-6 mb-3 md:px-4 ${props.isBorder ? "" : "border-b"} border-gray-200`}>
         <div className=' flex justify-between'>
            <div className='flex gap-2 items-center'>
               <div className='border-2 border-black rounded-full  accordNumber'>
                  <div className='w-7 h-7 rounded-full text-center text-white    bg-successDark  text-xl font-bold' style={{paddingTop: "3px"}}>
                     {props.id}
                  </div>
               </div>
               <p>{props.title}</p>
            </div>
            <div style={{transition: "0.4s"}} className={`my-auto h-max text-xl ${openAccord ? "rotate-180" : ""}`}>
               <IoIosArrowDown />
            </div>
         </div>
         <div ref={refAcord} className='acord overflow-hidden ' style={openAccord ? {height: `${heightAccord.scrollHeight}px`} : {height: "0px"}}>
            <p className='mt-4 text-gray-600 px-10' style={{lineHeight: "40px"}}>
               اگر از اسپرسو ساز برقی استفاده می‌کنید، مخزن آب را پر کرده و دستگاه را روشن کنید تا آب به دمای تنظیم‌شده برسد. برای اسپرسو “سینگل‌شات” حدود 7 گرم و برای اسپرسو
               “دبل‌شات” در حدود 14 گرم قهوه آسیاشده نیاز دارید. قهوه را درون پورتافیلتر بریزید. به کمک انگشتان، قهوه را پخش کرده و سطح آن را صاف کنید. توسط تمپر با فشار حدودی 14
               کیلوگرم آن را به صورت قائم و یکنواخت فشرده کنید. پورتافیلتر را به هدگروپ وصل کنید و شات اسپرسو را زیر خروجی آن قرار بدهید. سریعا دکمه‌ی عصاره‌گیری را فشار بدهید.
               فرایند عصاره‌گیری کامل، 25 تا 30 ثانیه زمان می‌برد.
            </p>
         </div>
      </div>
   );
}

export default QuostionHoc(QuostionProductPage);
