import React, {useEffect, useState} from "react";
import {BsFlagFill} from "react-icons/bs";
import {TiEye} from "react-icons/ti";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import useScrol from "../../../Hook/useScrol";
import {apiRightSlide2} from "../../Supbase/Supbase";
import Loader from "../Loader/Loader";

let item = [
   {
      id: 1,
      title: "ماموریت ما",
      more: "تلاش‌ برای خلق تجربه‌ای یکتا از نوشیدن قهوه‌ای تازه‌برشت و با‌کیفیت",
      element: <BsFlagFill />,
   },
   {
      id: 2,
      title: "چشم انداز ما",
      more: "مرجع فرهنگ قهوه در ایران و الگویی منحصر به فرد برای تولیدکنندگان ایرانی ",
      element: <TiEye />,
   },
];

export default function Blog() {
   const {blogId} = useParams();

   useScrol();
   const [loading, setLoading] = useState(true);
   const [article, setArticle] = useState(null);

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("Article");

         let filter = y.find((item) => item.id == blogId);

         setLoading(false);

         setArticle(filter);
      }
      s();
   }, []);

   if (loading) return <Loader />;

   console.log(article);
   return (
      <div>
         <Header />
         <DivBackground height={200} />
         <div className='relative container -mt-28'>
            <p className='text-center text-3xl text-white  mb-36'>{article?.title}</p>
            <img className='mx-auto my-10 rounded-lg' src={article?.img} alt='' />
            <p className='mb-10 md:max-w-[50%] mx-auto'>{article?.description}</p>
         </div>
         <Footer />
      </div>
   );
}

export function DivBackground({height}) {
   return (
      <div
         style={{minHeight: `${height}px`}}
         className={` overflow-hidden  relative  bg-[#009879]  text-white helpYou`}
      ></div>
   );
}
