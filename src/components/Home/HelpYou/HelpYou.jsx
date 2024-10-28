import React from "react";
import {Button} from "@material-tailwind/react";
export default function HelpYou() {
   return (
      <div className='px-5 md:px-0 mt-10 container mx-auto'>
         <div className='block items-center md:flex justify-between md:px-20 px-10 relative py-6 font-thin  text-center md:text-right bg-successDark rounded-2xl text-white helpYou'>
            <p>برای دریافت مشاوره تخصصی خرید محصولات هورکا، با ما در ارتباط باشید.</p>
            <Button className='font-thin p-2.5 bg-white text-successDark  rounded-full md:mt-0 mt-5'>درخاست مشاوره</Button>
         </div>
      </div>
   );
}
