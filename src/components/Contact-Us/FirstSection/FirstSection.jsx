import React from "react";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
import {LogoSocialNetwork} from "../../Footer/Footer";
import {Textarea, Input, Button} from "@material-tailwind/react";
import "./FirstSection.css";
let Items = [
   {img: "./src/components/Contact-Us/FirstSection/img/1 (1).svg", title: "پشتیبانی وبسایت"},
   {img: "./src/components/Contact-Us/FirstSection/img/1 (2).svg", title: "درخاست نمایندگی"},
   {img: "./src/components/Contact-Us/FirstSection/img/1 (3).svg", title: "فروش هورا"},
   {img: "./src/components/Contact-Us/FirstSection/img/1 (4).svg", title: "فروش سازمانی"},
];

export default function FirstSection() {
   return (
      <>
         <div className='min-h-[60vw] containerContact-us   lg:min-h-[40vw] bg-cover bg-center bg-no-repeat relative '></div>
         <div className='container grid grid-cols-1 gap-5 lg:grid-cols-3 relative  z-40 mb-10'>
            <div className='lg:col-span-2 -mt-40'>
               <CarouselEsy count={3} isDots={false}>
                  {Items.map((item, index) => (
                     <div key={index}>
                        <div className='bg-successDark  p-4 rounded-full relative -mb-10 sm:-mb-7 w-max mx-auto border-[4px] border-white'>
                           <img src={item.img} className='w-10 h-10 sm:w-7 sm:h-7 ' alt='' />
                        </div>
                        <div className='bg-white rounded-2xl p-10 border border-gray-300 max-h-[230px] h-full'>
                           <div className='my-5  sm:my-10 font-thin text-lg  sm:text-[15px]'>
                              <p className='mb-2'>{item.title}</p>
                              <p>شماره تماس : 021 - 555555</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </CarouselEsy>

               <p className='text-center mt-14 mb-5'>مارا در شبکه های اجتماعی دنبال کنید</p>
               <div className='w-max mx-auto'>
                  <LogoSocialNetwork isBg={true} />
               </div>
            </div>
            <div className='lg:col-span-1 lg:-mt-60 mt-10'>
               <div className='bg-white rounded-2xl p-10 border border-gray-300'>
                  <p className='text-center text-2xl'>فرم تماس با ما</p>
                  <div className='my-10'>
                     <Input size='md' color='teal' label='نام و نام خانوادگی' variant='standard' />
                  </div>
                  <div className='my-10'>
                     <Input size='md' color='teal' label='تلفن تماس' variant='standard' />
                  </div>
                  <div className='my-10 '>
                     <Input size='md' color='teal' label='موضوع' variant='standard' />
                  </div>

                  <Textarea variant='standard' label='متن پیام' color='teal' />
                  <div className='my-5 w-max mx-auto'>
                     <Button className='bg-successDark focus:bg-successDark font-thin text-sm rounded-full px-10 py-2'>
                        ارسال
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
