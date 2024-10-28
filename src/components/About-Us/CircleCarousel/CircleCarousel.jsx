import React, {useEffect, useMemo, useRef, useState} from "react";
import useOpacity from "../../../../Hook/useOpacity";
import "../CircleCarousel/Circle.css";
import {Tooltip, Button} from "@material-tailwind/react";
import {IoIosArrowBack} from "react-icons/io";
let itemCircle = [
   {title: "تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول", img: "./src/components/About-Us/CircleCarousel/img/1 (1).svg"},
   {title: "تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول", img: "./src/components/About-Us/CircleCarousel/img/1 (2).svg"},
   {title: "تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول", img: "./src/components/About-Us/CircleCarousel/img/1 (3).svg"},
   {title: "تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول", img: "./src/components/About-Us/CircleCarousel/img/1 (4).svg"},
   {title: "تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول", img: "./src/components/About-Us/CircleCarousel/img/1 (5).svg"},
   {title: "تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول", img: "./src/components/About-Us/CircleCarousel/img/1 (6).svg"},
];

export default function CircleCarousel() {
   const [activeBtn, setActiveBtn] = useState(0);
   const [rotateCircle, setRotateCircle] = useState(-60);
   const [itemDeg, setItemDeg] = useState(window.innerWidth > 766 ? 60 : 150);

   window.onresize = () => {
      window.innerWidth > 766 ? setItemDeg(60) : setItemDeg(150);
   };
   let refCintainer = useRef();
   let refCircle = useRef();
   useOpacity(refCintainer, rotateCircle);

   const prevSlideFunc = () => {
      setItemDeg((prev) => prev + 60);
      setRotateCircle((prev) => prev - 60);
      activeBtn < 1 ? setActiveBtn(5) : setActiveBtn((prev) => prev - 1);
   };
   const nextSlideFunc = () => {
      setItemDeg((prev) => prev - 60);
      setRotateCircle((prev) => prev + 60);
      activeBtn < 5 ? setActiveBtn((prev) => prev + 1) : setActiveBtn(0);
   };

   useEffect(() => {
      refCircle.current.style.transform = `rotate(${rotateCircle}deg)`;
   }, [activeBtn]);
   return (
      <div className='container pb-20 overflow-hidden pt-5 md:ps-5  grid grid-cols-1 md:grid-cols-6 xl:grid-cols-8'>
         <div className='md:col-span-3'>
            <div className=' rounded-full relative circleParent mx-auto md:mx-0 w-max -rotate-[87deg] md:rotate-[2.5deg]'>
               <img src='https://www.bonmano.com/wp-content/uploads/2023/10/01.png' className='w-60 md:w-80' alt='' />
               <div ref={refCircle} className='circle'>
                  {itemCircle.map((item, index) => (
                     <div key={index} className={`circleChild ${activeBtn === index ? "activeCircle" : ""}`} style={{transform: `rotate(${itemDeg}deg)`}}>
                        <img src={item.img} alt='' />
                     </div>
                  ))}
               </div>
            </div>
            <div className='flex gap-2 mt-16 justify-center  md:translate-x-[5%]'>
               <div className='rotate-180'>
                  <TooltipDefault click={prevSlideFunc} content={"قبل"} />
               </div>
               <TooltipDefault click={nextSlideFunc} content={"بعد"} />
            </div>
         </div>
         <div ref={refCintainer} className='md:col-span-3 pb-20 h-max titleCircleCarousel relative mt-10 md:my-auto text-center md:text-right px-8 md:px-9 '>
            {itemCircle[activeBtn].title}
         </div>
      </div>
   );
}

export function TooltipDefault({click, content}) {
   return (
      <Tooltip placement='bottom' content={content} className='text-xs px-2 rounded py-1 tooltip relative '>
         <Button variant='text' className='p-2 text-xl' onClick={click}>
            <IoIosArrowBack />
         </Button>
      </Tooltip>
   );
}
