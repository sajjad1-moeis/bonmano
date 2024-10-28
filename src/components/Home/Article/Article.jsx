import React, {useContext, useEffect, useRef, useState} from "react";
import {apiRightSlide2} from "../../../Supbase/Supbase";
import ContextAll from "../../../../Context/Context";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
import useOpacity from "../../../../Hook/useOpacity";
import {Select, Option} from "@material-tailwind/react";
import TemplateArticle from "../../TemplateArticle/TemplateArticle";
let btns = [
   {id: 1, text: "آخرین مطالب بن‌مانو"},
   {id: 2, text: "طرز تهیه نوشیدنی"},
   {id: 3, text: "روش‌های دم‌آوری قهوه"},
];
export default function Article() {
   const [activeBtn, setActiveBtn] = useState(1);
   const [filterArr, setFilterArr] = useState([]);
   let refImg = useRef();

   const clickHandeler = (id) => {
      setActiveBtn(id);
   };

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("Article");

         let filter = y.filter((item) => item.isFilter === `Article(${activeBtn})`);

         setFilterArr(filter);
      }
      s();
   }, [activeBtn]);

   useOpacity(refImg, activeBtn);

   return (
      <div
         className='py-20 mt-10'
         style={{backgroundImage: "url(https://demos.hotcoffee-theme.ir/wp-content/uploads/2021/08/bg-home-1_2.jpg)"}}
      >
         <div className='container'>
            <div className='flex items-center text-center md:text-right justify-between px-4 md:px-0'>
               <div className='text-xl flex-none'>مجله بن مانو</div>
               <div className=' gap-8 font-semibold text-[15px] md:flex hidden'>
                  {btns.map((item) => (
                     <button
                        key={item.id}
                        onClick={() => clickHandeler(item.id)}
                        className={`relative slide5Div  pb-2 ${item.id === activeBtn ? "activeSlide5" : ""}`}
                     >
                        {item.text}
                     </button>
                  ))}
               </div>
               <div className='block w-max md:hidden'>
                  <ControlledSelect>
                     {btns.map((item, index) => (
                        <Option key={index} onClick={() => clickHandeler(index + 1)} value={item.text}>
                           {item.text}
                        </Option>
                     ))}
                  </ControlledSelect>
               </div>
            </div>
            <div className='mt-10' ref={refImg}>
               <CarouselEsy count={3} isTitle={false}>
                  {filterArr.map((item, index) => {
                     return <TemplateArticle key={index} {...item} />;
                  })}
               </CarouselEsy>
            </div>
         </div>
      </div>
   );
}

export function ControlledSelect({children}) {
   const [value, setValue] = React.useState("آخرین مطالب بن‌مانو");
   return (
      <div className='w-max'>
         <Select value={value} variant='standard' onChange={(val) => setValue(val)}>
            {children}
         </Select>
      </div>
   );
}
