import React, {useContext, useEffect, useRef, useState} from "react";
import useBtn from "../../../../Hook/useBtn";
import ResponsiveCarousel from "../../../Carousel/Carousel";
import {apiRightSlide2} from "../../../Supbase/Supbase";
let btns = ["پرفروش ترین محصولات", "محصولات جدید"];

export default function Slide5() {
   const [coffies, setCoffies] = useState([]);

   const [activeBtn, clickHandeler, filterArr] = useBtn(2, coffies);

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("coffie");
         setCoffies(y);
         clickHandeler(2);
      }
      s();
   }, []);

   let bind = {
      isArrow: true,
      count: 5,
      activeBtn,
      clickHandeler,
      filterArr,
      isLink: 3,
   };

   return (
      <div className='container mt-10 md:mt-20'>
         <div className='text-center  text-2xl font-semibold'>فروشگاه بن مانو</div>
         <div className='flex gap-10 mt-10 justify-center mb-5 md:mb-10'>
            {btns.map((item, index) => (
               <div
                  key={index}
                  className={`pb-2 slide5Div cursor-pointer font-semibold relative ${
                     index + 2 === activeBtn ? "activeSlide5" : ""
                  }`}
                  onClick={() => clickHandeler(index + 2)}
               >
                  {item}
               </div>
            ))}
         </div>
         <ResponsiveCarousel {...bind} />
      </div>
   );
}
