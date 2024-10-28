import React, {useId, useMemo, useRef, useState} from "react";
import {ItemBorder} from "../../Home/nextHeader/nextHeader";
import useOpacity from "../../../../Hook/useOpacity";
import "./btnHistory.css";
let itemYear = [
   {id: 1, year: 1394, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/1.png"},
   {id: 2, year: 1395, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/2.png"},
   {id: 3, year: 1396, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/3.jpg"},
   {id: 4, year: 1397, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/4.jpg"},
   {id: 5, year: 1398, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/5.jpg"},
   {id: 6, year: 1400, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/6.jpg"},
   {id: 7, year: 1401, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/7.jpg"},
   {id: 8, year: 1402, subitem: ["راه‌اندازی فروشگاه اینترنتی بن‌مانو و امکان خرید آنلاین محصولات"], img: "/8.jpg"},
];

export default function HistoryBonmano() {
   const [activeBtn, setActiveBtn] = useState(1);
   let refContainer = useRef();
   useOpacity(refContainer, activeBtn);
   return (
      <div className='container my-20  w-full max-w-[1200px]'>
         <div ref={refContainer}>
            <h1 className='my-5 text-xl text-center font-semibold'>بن‌مانو از گذشته تا به امروز</h1>
            {itemYear.map((item) => (
               <div key={item.id} className={` relative my-10 ${item.id === activeBtn ? "block" : "hidden"}`}>
                  <div className='md:me-3 ff absolute rounded-xl max-w-[800px] w-full h-full bg-[#F5F5F5] left-0 '></div>
                  <div className='relative py-10 grid gap-10  grid-cols-1 md:grid-cols-5 '>
                     <div className='p-5  md:flex md:col-span-2  md:p-0'>
                        <div className='md:w-3 w-3/4 mx-auto h-2.5 md:h-3/4 text-successDark bg-successDark rounded-xl my-auto md:block hidden'>s</div>
                        <img src={`./src/components/About-Us/HistoryBonmano/img${item.img}`} className='-mt-1 md:-ms-0.5 rounded-xl ' alt='' />
                     </div>
                     <div className='md:col-span-3 h-max my-auto '>
                        <div className='w-full'>
                           <h1 className='text-2xl text-center md:text-right'>آنچه در سال {item.year} رقم زدیم....</h1>
                        </div>
                        <div className='my-5'>
                           {item.subitem.map((item) => (
                              <div key={useId()} className='text-center md:text-right'>
                                 <div className='md:block hidden'>
                                    <ItemBorder text={item} />
                                 </div>
                                 <div className='block md:hidden text-successDark'>{item}</div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className='flex gap-4 justify-center text-sm md:text-balance pt-5'>
            {itemYear.map((item) => (
               <button key={item.id} onClick={() => setActiveBtn(item.id)} className={`relative  btnHistory -rotate-90 ${item.id === activeBtn ? "activeBtnHistory" : ""}`}>
                  {item.year}
               </button>
            ))}
         </div>
      </div>
   );
}
