import React, {useEffect, useState} from "react";
import ResponsiveCarousel from "../../../Carousel/Carousel";
import data, {apiRightSlide2} from "../../../Supbase/Supbase";
import useBtn from "../../../../Hook/useBtn";
export default function SuggestedProduct() {
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
      count: 5,
      isArrow: true,
      filterArr,
      isLink: 1,
      activeBtn: 1,
      dots: true,
   };
   return (
      <div className='md:p-10 bg-[#F5F5F5] '>
         <h1 className='my-8 text-xl text-center font-bold'>محصولات پیشنهادی</h1>
         <div className='container'>
            <ResponsiveCarousel {...bind} />
         </div>
      </div>
   );
}
