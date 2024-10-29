import React, {useContext, useEffect, useRef, useState} from "react";
import ResponsiveCarousel from "../../../Carousel/Carousel";
import useBtn from "../../../../Hook/useBtn";
import useOpacity from "../../../../Hook/useOpacity";
import BtnsCircleSlide from "../BtnCircleSlides/BtnsCircleSlides";
import {apiRightSlide2} from "../../../Supbase/Supbase";

let imgBtnSlide2 = [
   {id: 1, img: "./src/components/Home/Slide2/img/btn1.svg", title: "دانه قهوه اسپرسو"},
   {id: 2, img: "./src/components/Home/Slide2/img/btn2.svg", title: "نورسکا"},
   {id: 3, img: "./src/components/Home/Slide2/img/btn3.svg", title: "پودر قهوه اسپرسو"},
   {id: 4, img: "./src/components/Home/Slide2/img/btn4.svg", title: "قهوه فوری"},
   {id: 5, img: "./src/components/Home/Slide2/img/btn5.svg", title: "پودرهای ترکیبی"},
   {id: 6, img: "./src/components/Home/Slide2/img/btn6.svg", title: "کپسول قهوه اسپرسو"},
];

export default function Slide2() {
   let refImg = useRef();
   const [coffies, setCoffies] = useState([]);
   const [activeBtn, clickHandeler, filterArr] = useBtn(2, coffies);
   const [arrRightSlide2, setArrRightSlide2] = useState([]);

   useEffect(() => {
      async function s() {
         let s = await apiRightSlide2("rightSlide2");
         setArrRightSlide2(s);
      }
      s();
   }, []);
   useOpacity(refImg, activeBtn);

   let bind = {
      activeBtn,
      filterArr,
      clickHandeler,
      isArrow: true,
      count: 3,
      isLink: 2,
   };
   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("coffie");
         setCoffies(y);
         clickHandeler(3);
      }
      s();
   }, []);

   return (
      <div className='mt-20 lg:mt-40 grid grid-cols-1 lg:grid-cols-5 container '>
         <div className='md:col-span-2 lg:block hidden'>
            <div ref={refImg}>
               <img src={arrRightSlide2?.find((item) => item.id === activeBtn)?.img} alt='' />
            </div>
         </div>
         <div className='lg:col-span-3'>
            <div className='block lg:flex justify-between'>
               <div className='mx-auto md:mx-0 w-max mb-6 md:'>
                  <p className='text-sm text-gray-600'>محصولات خانگی</p>
                  <p className={`text-xl md:text-2xl mt-2`}>{imgBtnSlide2[activeBtn - 1].title}</p>
               </div>
               <BtnsCircleSlide arr={imgBtnSlide2} {...bind} />
            </div>
            <ResponsiveCarousel {...bind} />
         </div>
      </div>
   );
}
