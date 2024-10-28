import React, {useEffect, useState} from "react";
import SuggestedArticle from "../../ProductPage/SuggestedArticle/SuggestedArticle";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
import TemplateArticle from "../../TemplateArticle/TemplateArticle";
import {apiRightSlide2} from "../../../Supbase/Supbase";
export default function SuggestedAdmin() {
   const [loading, setLoading] = useState(true);
   const [article, setArticle] = useState(null);

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("Article");

         setLoading(false);

         setArticle(y.slice(0, 6));
      }
      s();
   }, []);
   return (
      <div className=' py-10 mb-20 bg-successDark helpYou relative '>
         <div className='container '>
            <h1 className='text-center text-white text-2xl mb-10'>پیشنهاد سر دبیر </h1>
            <CarouselEsy count={3} isDots>
               {article?.slice(0, 4).map((item) => (
                  <TemplateArticle {...item} />
               ))}
            </CarouselEsy>
         </div>
      </div>
   );
}
