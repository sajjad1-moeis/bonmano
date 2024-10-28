import React from "react";
import {DivBackground} from "../TaskBonmano/TaskBonmano";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
let Items = [
   {img: "/1.jpg", title: "حمایت از موسسه خیریه کودکان اتیسم ایران"},
   {img: "/2.jpg", title: "حمایت از موسسه خیریه کودکان اتیسم ایران"},
   {img: "/3.jpg", title: "حمایت از موسسه خیریه کودکان اتیسم ایران"},
   {img: "/4.jpg", title: "حمایت از موسسه خیریه کودکان اتیسم ایران"},
];
export default function NextSectionCircle() {
   return (
      <div>
         <DivBackground height='280' />
         <div className='container -mt-40 relative'>
            <h1 className='text-center text-2xl text-white mb-10'>مسئولیت‌های اجتماعی بن‌مانو</h1>
            <CarouselEsy count={4} isDots={false}>
               {Items.map((item, index) => (
                  <div key={index}>
                     <div className='overflow-hidden rounded-xl border-2 border-white'>
                        <img src={`./src/components/About-Us/nextSectionCircle/img${item.img}`} alt='' />
                        <p className='mt-5 hover:text-successDark transition-all cursor-pointer'>{item.title}</p>
                     </div>
                  </div>
               ))}
            </CarouselEsy>
         </div>
      </div>
   );
}
