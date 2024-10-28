import React, {useRef} from "react";
import Slider from "react-slick";
import {IoIosArrowBack} from "react-icons/io";
import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import useOpacity from "../../Hook/useOpacity";
import TemplateProduct from "../components/TemplateProduct/TemplateProduct";
function ResponsiveCarousel({count, isArrow, filterArr, isLink, activeBtn}) {
   let refContainerSlide = useRef();
   let sliderRef = useRef(null);
   useOpacity(refContainerSlide, activeBtn);

   var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: count,
      slidesToScroll: 1,

      responsive: [
         {breakpoint: 1024, settings: {slidesToShow: 2}},
         {breakpoint: 480, settings: {slidesToShow: 2}},
         {breakpoint: 380, settings: {slidesToShow: 1}},
      ],
   };
   return (
      <div className='slider-container slickAnimate' ref={refContainerSlide}>
         <Slider
            ref={(slider) => {
               sliderRef = slider;
            }}
            {...settings}
         >
            {filterArr.map((item) => {
               return <TemplateProduct {...item} key={item.id} />;
            })}
         </Slider>
         <div className={`flex items-center ${isArrow ? "justify-between" : "justify-end"}`}>
            {isArrow && (
               <div style={{textAlign: "right"}} className=' p-5 '>
                  <button className='button ' onClick={() => sliderRef.slickNext()}>
                     <IoIosArrowBack className='rotate-180 w-5 h-5  me-3' />
                  </button>
                  <button className='button ' onClick={() => sliderRef.slickPrev()}>
                     <IoIosArrowBack className='w-5 h-5 ' />
                  </button>
               </div>
            )}
            <div>
               <Link to={`/category/${isLink}(${activeBtn})`}>
                  <Button className='bg-[#009879] focus:bg-[#009879] font-thin text-xs rounded-full p-2 me-2'>
                     مشاهده همه محصولات
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default ResponsiveCarousel;
