import React, {useContext} from "react";
import "./Footer.css";
import {MdEmail} from "react-icons/md";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {FaPinterest} from "react-icons/fa6";
import {IoLogoTiktok} from "react-icons/io5";
import {Link} from "react-router-dom";
import {ItemBorder} from "../Home/nextHeader/nextHeader";
import ContextAll from "../../../Context/Context";
let IconFooter = [
   {element: <MdEmail />},
   {element: <FaFacebookF />},
   {element: <FaInstagram />},
   {element: <FaPinterest />},
   {element: <FaTwitter />},
   {element: <FaYoutube />},
   {element: <IoLogoTiktok />},
];

let ItemFooter = [
   {title: "فهرست سفارشی", subItem: [, "قوانین و مقررات", "حریم خصوصی", "مرکز آموزش"]},
   {title: "پیوندهای مفید", subItem: [, "قوانین و مقررات", "حریم خصوصی", "مرکز آموزش"]},
];
export default function Footer() {
   let context = useContext(ContextAll);
   return (
      <div className='parentFoter relative'>
         <div className='absolute liner opacity-60'></div>
         <div className='container relative z-50 min-h-[650px]  grid grid-cols-1 md:grid-cols-5 '>
            <div className='md:col-span-2 text-white h-max my-auto'>
               <div className='m-auto h-max items-center p-5'>
                  <p className='text-5xl'>بن مانو</p>
                  <p className='my-5 max-w-[450px] text-gray-400'>
                     برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                     صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>
                  <LogoSocialNetwork />
               </div>
            </div>
            <div className='md:col-span-3 h-max my-auto'>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                  {ItemFooter.map((item, index) => (
                     <div key={index} className='p-5 text-right'>
                        <div className='mb-5'>
                           <ItemBorder text={item.title} color='#1A251F' />
                        </div>
                        <Link to={context.isLogin && "/panelAdmin"}>
                           <p className='my-4 text-white text-sm'>{context.isLogin ? "حساب کاربری" : "ثبت نام"}</p>
                        </Link>
                        {item.subItem.map((item, index) => (
                           <Link key={index}>
                              <p className='my-4 text-white text-sm'>{item}</p>
                           </Link>
                        ))}
                     </div>
                  ))}
                  <div className='p-5'>
                     <ItemBorder text={"اعتماد شما سرمایه ماست"} color='#1A251F' />
                     <img className='mt-5' src='./src/components/Footer/img/logo.png' alt='' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export function LogoSocialNetwork({isBg}) {
   return (
      <div className='flex gap-2.5 text-xl'>
         {IconFooter.map((item, index) => (
            <Link key={index}>
               <div
                  className={`${
                     isBg ? "bg-gray-800 text-white p-3 rounded-md hover:bg-successDark transition-all" : ""
                  }`}
               >
                  {item.element}
               </div>
            </Link>
         ))}
      </div>
   );
}
