import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
export default function Slide3() {
   return (
      <div className='slide3'>
         <CarouselEsy count={1} isTitle={false} isArrow={false} isSmal={1}>
            <div className='outline-none'>
               <img src='/img/Home/Slide3/1.jpg' alt='' />
            </div>
            <div className='outline-none'>
               <img src='/img/Home/Slide3/2.jpg' alt='' />
            </div>
         </CarouselEsy>
      </div>
   );
}
