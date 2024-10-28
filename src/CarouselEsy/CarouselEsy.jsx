import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselEsy(props) {
   let sliderRef = useRef(null);

   let funcPad = props.isPadding && {
      customPaging: function (i) {
         return (
            <div className='rounded-xl overflow-hidden border-brown border'>
               <img src={props.arrItemPadding[i]} alt='' />
            </div>
         );
      },
      dotsClass: "slick-dots slick-thumb",
   };
   var settings = {
      rtl: true,
      dots: props.isDots ? false : true,
      infinite: true,
      speed: 500,
      slidesToShow: props.count,
      slidesToScroll: 1,
      responsive: [
         {breakpoint: 1024, settings: {slidesToShow: props.isSmal ? props.isSmal : 3}},
         {breakpoint: 600, settings: {slidesToShow: props.isSmal ? props.isSmal : 2}},
         {breakpoint: 480, settings: {slidesToShow: props.isSmal2 ? 2 : 1}},
      ],
   };

   return (
      <div className='slider-container relative '>
         <div className='flex justify-between '>
            {props.isTitle && <div className='font-bold text-white text-2xl'>دسته بندی محصولات</div>}
            {props.isArrow && (
               <div style={{textAlign: "left"}}>
                  <button className='button arrow1' onClick={() => sliderRef.slickNext()}>
                     {props.elmArrow}
                  </button>
                  <button className='button arrow2' onClick={() => sliderRef.slickPrev()}>
                     {props.elmArrow}
                  </button>
               </div>
            )}
         </div>
         <Slider
            ref={(slider) => {
               sliderRef = slider;
            }}
            {...settings}
            {...funcPad}
         >
            {props.children}
         </Slider>
      </div>
   );
}
