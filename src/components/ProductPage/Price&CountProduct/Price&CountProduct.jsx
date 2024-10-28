import React, {useState} from "react";
import {HiMiniMinusCircle, HiShoppingBag, HiPlusCircle} from "react-icons/hi2";
import {Button} from "@material-tailwind/react";

let Item = [
   {title: "ارسال رایگان برای خریدهای بالای 500 هزار تومان", img: "/1.svg"},
   {title: "7 روز ضمانت بازگشت کالا", img: "/2.svg"},
   {title: "پشتیبانی سریع", img: "/3.svg"},
];

export default function PriceCountProduct() {
   const [countProduct, setCountProduct] = useState(1);

   const plusCountFunc = () => {
      setCountProduct((prev) => prev + 1);
   };
   const minusCountFunc = () => {
      countProduct > 1 && setCountProduct((prev) => prev - 1);
   };
   return (
      <div div className='bg-white  sticky top-5'>
         <div className=' border py-6 border-gray-300 p-5 rounded-xl overflow-hidden'>
            <p className='text-2xl text-gray-600'>400.000 هزار تومان</p>
            <p className='text-blue-700 mb-3 mt-5'>51 عدد در انبار </p>
            <div className='flex justify-between items-center mb-5 p-2 border border-gray-300 rounded-xl'>
               <HiPlusCircle onClick={plusCountFunc} className='hover:text-successDark transition-all cursor-pointer text-gray-300 text-4xl' />
               <p className='text-2xl text-successDark'>{countProduct}</p>
               <HiMiniMinusCircle onClick={minusCountFunc} className='hover:text-successDark transition-all cursor-pointer text-gray-300 text-4xl' />
            </div>
            <Button className='bg-successDark text-base font-thin w-full items-center flex rounded-xl justify-center gap-4'>
               <HiShoppingBag className='text-2xl' />
               <span>افزودن به سبد خرید</span>
            </Button>
         </div>
         {Item.map((item, index) => (
            <ItemImg key={index} {...item} />
         ))}
      </div>
   );
}

export function ItemImg({img, title}) {
   return (
      <div className='flex gap-5 items-center my-8'>
         <img src={`../src/components/ProductPage/Price&CountProduct/img${img}`} className='w-5 h-5' alt='' />
         <p>{title}</p>
      </div>
   );
}
