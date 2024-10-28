import {useContext, useEffect, useMemo, useState} from "react";
import React from "react";
import BtnsCircleSlide from "../BtnCircleSlides/BtnsCircleSlides";
import ResponsiveCarousel from "../../../Carousel/Carousel";
import useBtn from "../../../../Hook/useBtn";
import CircleImg from "./CircleImg";
import ContextAll from "../../../../Context/Context";
import {apiRightSlide2} from "../../../Supbase/Supbase";

let imgBtnSlide4 = [
   {id: 1, img: "./src/components/Home/Slide4/img/btn1.svg", title: "قهوه ترکیبی"},
   {id: 2, img: "./src/components/Home/Slide4/img/btn2.svg", title: "قهوه تک‌خاستگاه"},
   {id: 3, img: "./src/components/Home/Slide4/img/btn3.svg", title: "قهوه تخصصی"},
];
export default function Slide4() {
   const [coffies, setCoffies] = useState([]);

   const [activeBtn, clickHandeler, filterArr] = useBtn(3, coffies);

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("coffie");
         setCoffies(y);
         clickHandeler(3);
      }
      s();
   }, []);

   let bind = {
      clickHandeler,
      activeBtn,
      isArrow: true,
      count: 3,
      filterArr,
   };

   return (
      <div className='grid grid-cols-1 lg:grid-cols-5 mt-10 gap-x-8 md:mt-20 container '>
         <div className='my-5 md:my-0 lg:col-span-2 md:pt-16 text-center md:text-right grid grid-cols-1 sm:grid-cols-2 lg:block'>
            <div className='text-successDark text-2xl'>چرا هورکا بن‌مانو؟</div>
            <div className='mt-8'>
               <CircleImg
                  title='انتخاب دانه‌ قهوه‌های باکیفیت'
                  img='https://www.bonmano.com/wp-content/uploads/2024/08/انتخاب-قهوه_سفید_58-58.svg'
               />
            </div>
            <CircleImg
               title='رعایت کلیه استانداردهای انبارداری'
               img='https://www.bonmano.com/wp-content/uploads/2023/10/%D8%B1%D8%B9%D8%A7%DB%8C%D8%AA-%DA%A9%D9%84%DB%8C%D9%87-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%AF%D8%A7%D8%B1%D8%AF%D9%87%D8%A7%DB%8C-%D8%A7%D9%86%D8%A8%D8%A7%D8%B1-%D8%AF%D8%A7%D8%B1%DB%8C-58-58.svg'
            />
            <CircleImg
               title='استفاده از تکنولوژی هوای داغ'
               img='https://www.bonmano.com/wp-content/uploads/2024/08/هوای-داغ_سفید_58-58.svg'
            />
         </div>
         <div className='lg:col-span-3'>
            <div className=' block lg:flex justify-between'>
               <div className='mx-auto md:mx-0 w-max mb-6 md:'>
                  <p className='text-sm text-gray-600'>محصولات هورکا</p>
                  <p className={`text-xl md:text-2xl mt-2 font-medium`}>{imgBtnSlide4[activeBtn - 1].title}</p>
               </div>
               <BtnsCircleSlide arr={imgBtnSlide4} {...bind} />
            </div>
            <ResponsiveCarousel {...bind} />
         </div>
      </div>
   );
}
