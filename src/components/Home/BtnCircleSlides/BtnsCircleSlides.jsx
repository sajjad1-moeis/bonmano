import React from "react";

export default function BtnsCircleSlide({arr, clickHandeler, activeBtn}) {
   return (
      <div className='gap-2 flex mb-5 md:mb-8 justify-center'>
         {arr.map((item, index) => (
            <button key={index} onClick={() => clickHandeler(item.id)} className={`p-0.5 rounded-full  ${item.id === activeBtn ? "border-successDark" : "border-gray-200"} border`}>
               <div className={`border-2 border-white p-3 rounded-full ${item.id === activeBtn ? "bg-successDark activeBtn" : "bg-gray-200"} `}>
                  <img src={`${item.img}`} className='w-6  h-6' alt='' />
               </div>
            </button>
         ))}
      </div>
   );
}
