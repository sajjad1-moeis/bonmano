import React, {useContext} from "react";
import {ItemImg} from "../Price&CountProduct/Price&CountProduct";
import {FaTags} from "react-icons/fa";
let Item = [
   {title: " معرفی محصول", img: "/6.svg", idSelect: "descProduct"},
   {title: "مشخصات محصول", img: "/4.svg", idSelect: "tableProduct"},
   {title: "سوالات متداول", img: "/5.svg", idSelect: "qoustionProduct"},
];
export default function DescriptionProduct() {
   function clickHandeler(id) {
      document.querySelector(`#${id}`).scrollIntoView({behavior: "smooth"});
   }
   return (
      <>
         <div className='hidden md:flex gap-5  mb-7 w-11/12 mx-auto cursor-pointer'>
            {Item.map((item, index) => (
               <div key={index} id={index} onClick={() => clickHandeler(item.idSelect)}>
                  <ItemImg key={index} {...item} />
               </div>
            ))}
         </div>
         <div id='descProduct' className='gap-10 p-10   grid grid-cols-1 md:grid-cols-2   relative mt-10 md:mt-0'>
            <div className='absolute w-full md:w-10/12 h-full left-0 bg-gray-100 -z-10 rounded-xl'></div>
            <div className=''>
               <img src='https://www.bonmano.com/wp-content/uploads/2017/06/sobar-coffee.jpg' className='rounded-xl' />
            </div>
            <div className='h-max my-auto'>
               <h1 className='my-5 text-2xl'>معرفی محصول</h1>
               <p className=' leading-8 text-gray-600'>
                  نوشیدنی اسپرسو از عصاره گیری قهوه اسیا‌شده تحت فشار ۷ تا ۹ بار و دمای حدودی بین هشتاد و پنج تا نود و پنج درجه سانتیگراد تهیه می‌شود ؛ اصولا اماده سازی یک اسپرسو
                  خوب نیاز به مهارت و تجربه بالا دارد و در کافه ها بصورت خالص و یا پایه نوشیدنیهای دیگر مانند کاپوچینو سرو می‌گردد ؛ متدهای دیگر دم آوری قهوه مانند ترک و فرانسه در
                  درجه اسیا و درجه برشتگی و ابزار دم اوری متفاوت هستند ، برای مثال قهوه های دمی چکه‌ای مانند وی شصت اسیاب درشتتری به نسبت اسپرسو دارد و با کمک نیروی گرانش و عبور اب
                  از فیلتر ،قهوه ما عصاره‌گیری می‌شود.
               </p>
            </div>
         </div>
      </>
   );
}
