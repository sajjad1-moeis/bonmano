import React, {useId} from "react";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
let Item = [
   {img: "/1 (1).jpg", title: "آزمایشگاه", smalImg: "/1 (1).svg", isReverse: true},
   {img: "/1 (2).jpg", title: "آزمایشگاه", smalImg: "/1 (2).svg", isReverse: false},
   {img: "/1 (3).jpg", title: "آزمایشگاه", smalImg: "/1 (3).svg", isReverse: true},
   {img: "/1 (4).jpg", title: "آزمایشگاه", smalImg: "/1 (4).svg", isReverse: false},
];
export default function TeamBonmano() {
   return (
      <div className='container mb-20 '>
         <CarouselEsy count={3} isDots={false}>
            {Item.map((item) => (
               <div key={useId()}>
                  <div className={`h-max my-auto bg-white flex gap-y-8 ${item.isReverse ? "flex-col-reverse" : "flex-col"}`}>
                     <img src={`./src/components/About-Us/TeamBonmano/img${item.img}`} className='rounded-xl object-cover' style={{aspectRatio: "2"}} />
                     <div className={`  rounded-xl shadow-lg p-5`}>
                        <div className='flex gap-3 items-center justify-end'>
                           <span>{item.title}</span>
                           <div className='bg-successDark p-1.5 rounded-md text-white text-lg w-max'>
                              <img src={`./src/components/About-Us/TeamBonmano/img${item.smalImg}`} className='size-6' alt='' />
                           </div>
                        </div>
                        <p className='my-3 leading-7'>
                           واحد تحقیق و توسعه ما با تجربه‌ی سال‌ها پژوهش، تمامی جزئیات را با دقت بررسی می‌کند تا اطمینان حاصل کند که قهوه نهایی بی‌نظیر است.
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </CarouselEsy>
      </div>
   );
}
