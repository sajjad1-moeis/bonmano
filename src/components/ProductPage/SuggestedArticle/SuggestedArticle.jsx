import React, {useEffect, useState} from "react";
import CarouselEsy from "../../../CarouselEsy/CarouselEsy";
import TemplateArticle from "../../TemplateArticle/TemplateArticle";
import useScrol from "../../../../Hook/useScrol";

export default function SuggestedArticle() {
   useScrol();
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
      <div className='my-20 container'>
         <h1 className='my-5 text-xl font-bold text-center'>مقالات پیشنهادی</h1>
         <CarouselEsy count={3} isDot={false}>
            {article.slice(0, 5).map((item, index) => (
               <div key={index}>
                  <TemplateArticle {...item} />
               </div>
            ))}
         </CarouselEsy>
      </div>
   );
}
