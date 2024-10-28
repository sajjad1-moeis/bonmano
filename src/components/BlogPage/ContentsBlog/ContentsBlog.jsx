import React, {useEffect, useRef, useState} from "react";
import TemplateBlog from "../../TemplateBlog/TemplateBlog";
import {LuPhoneCall} from "react-icons/lu";
import {LuInfo} from "react-icons/lu";
import {RiArticleLine} from "react-icons/ri";
import {PiCoffee} from "react-icons/pi";
import {Link} from "react-router-dom";
import {apiRightSlide2} from "../../../Supbase/Supbase";
import useOpacity from "../../../../Hook/useOpacity";
let itemTemplate = [
   {link: "/contact-us", title: "تماس با ما", element: <LuPhoneCall />},
   {link: "/about-us", title: "درباره ما", element: <LuInfo />},
   {link: "/", title: "مجله بن مانو", element: <RiArticleLine />},
   {link: "/", title: "محصولات هورکا", element: <PiCoffee />},
   // {link: "", title: "", element: <span></span>},
];

export default function ContentsBlog() {
   const refContainer = useRef();
   const [activeBtn, setActiveBtn] = useState(1);
   const [article, setArticle] = useState([]);
   const [filterArticels, setFilterArticels] = useState([]);
   useOpacity(refContainer, activeBtn);

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("Article");
         setArticle(y);
      }
      s();
   }, []);

   useEffect(() => {
      if (article) {
         let filter = article.filter((item) => item.isFilter === `Article(${activeBtn})`);
         setFilterArticels(filter);
      }
   }, [article, activeBtn]);

   const clickhandeler = (id) => {
      setActiveBtn(id);
   };
   return (
      <div className='container my-20 grid grid-cols-1 md:grid-cols-3 gap-8 '>
         <div className='md:col-span-2'>
            <h1 className='text-2xl'>مطالب وبلاگ</h1>
            <div className='flex gap-10 my-5'>
               <button
                  onClick={() => clickhandeler(1)}
                  className={`transition-all ${
                     activeBtn === 1 ? "border-b-2 border-successDark text-successDark" : ""
                  } pb-2 `}
               >
                  آخرین مطالب
               </button>
               <button
                  onClick={() => clickhandeler(2)}
                  className={`transition-all ${
                     activeBtn === 2 ? "border-b-2 border-successDark text-successDark" : ""
                  } pb-2 `}
               >
                  محبوب ترین مطالب
               </button>
            </div>
            <div className='' ref={refContainer}>
               {filterArticels?.map((item) => (
                  <TemplateBlog {...item} />
               ))}
            </div>
         </div>
         <div className='md:col-span-1 relative'>
            <div className='absolute w-3/4 rounded-t-xl -top-1.5 h-3 bg-successDark left-1/2 -translate-x-[50%]'></div>
            <div className='sticky top-0'>
               <img src='https://www.bonmano.com/wp-content/uploads/2024/04/450x600.png' className='rounded-xl' />
               {itemTemplate.map((item) => (
                  <Template {...item} />
               ))}
            </div>
         </div>
      </div>
   );
}
function Template({title, link, element}) {
   return (
      <Link to={link}>
         <div className='rounded-lg border border-gray-300 p-5 my-5 hover:text-white hover:bg-successDark transition-all cursor-pointer'>
            <div className='mx-auto w-max flex gap-3 items-center'>
               <div className='text-2xl'>{element}</div>
               <p>{title}</p>
            </div>
         </div>
      </Link>
   );
}
