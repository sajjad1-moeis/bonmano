import React from "react";
import {FaTags} from "react-icons/fa";
import {Button} from "@material-tailwind/react";
import QuostionProductPage from "../../../../Hoc/QuostionProductPage/QuostionProductPage";
let itemQuostion = [
   {id: 1, title: "میزان کافئین دانه قهوه آرنیکا چگونه است؟", Desc: "سلام"},
   {id: 2, title: "میزان کافئین دانه قهوه آرنیکا چگونه است؟", Desc: "سلام"},
   {id: 3, title: "میزان کافئین دانه قهوه آرنیکا چگونه است؟", Desc: "سلام"},
   {id: 4, title: "میزان کافئین دانه قهوه آرنیکا چگونه است؟", Desc: "سلام", isBorder: true},
];
export default function QuostionYou() {
   return (
      <>
         <div className='mt-10 md:w-3/4 mx-auto pt-10' id='qoustionProduct'>
            <h1 className='my-5 text-center text-2xl'>سوالات متداول</h1>
            {itemQuostion.map((item) => (
               <QuostionProductPage key={item.id} {...item} />
            ))}
         </div>
         <div className='pt-3 border-t items-center border-gray-300 flex gap-4 my-10 md:mt-20'>
            <FaTags />
            <p>برچسب ها:</p>
            <Button variant='outlined' color='brown' className='p-1 text-gray-600 font-thin px-4 border-gray-300 rounded-md'>
               چند نفره
            </Button>
            <Button variant='outlined' color='brown' className='p-1 text-gray-600 font-thin px-4 border-gray-300 rounded-md'>
               قهوه آسیاب شده
            </Button>
         </div>
      </>
   );
}
