import React from "react";
import {BsFlagFill} from "react-icons/bs";
import {TiEye} from "react-icons/ti";

let item = [
   {id: 1, title: "ماموریت ما", more: "تلاش‌ برای خلق تجربه‌ای یکتا از نوشیدن قهوه‌ای تازه‌برشت و با‌کیفیت", element: <BsFlagFill />},
   {id: 2, title: "چشم انداز ما", more: "مرجع فرهنگ قهوه در ایران و الگویی منحصر به فرد برای تولیدکنندگان ایرانی ", element: <TiEye />},
];

export default function TaskBonmano() {
   return (
      <div>
         <DivBackground height={200} />
         <div className='relative container -mt-32 mb-20'>
            <p className='text-center text-xl text-white'> ماموریت و چشم‌انداز ما در بن‌مانو</p>
            <div className='grid grid-cols-2 gap-2 px-4 md:px-0 md:gap-5 justify-center max-w-[600px] mx-auto mt-10'>
               {item.map((i) => (
                  <div key={i.id} className='bg-white border border-gray-300 p-5  rounded-xl text-gray-700'>
                     <div className='bg-successDark p-2 rounded-md text-white text-lg w-max'>{i.element}</div>
                     <p className='text-successDark mt-3 mb-1.5'>{i.title}</p>
                     <p className='leading-6 text-sm'>{i.more}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export function DivBackground({height}) {
   return <div style={{minHeight: `${height}px`}} className={` overflow-hidden  relative  bg-[#009879]  text-white helpYou`}></div>;
}
