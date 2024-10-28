import React, {useEffect, useId, useMemo, useRef, useState} from "react";
import useScrol from "../../../Hook/useScrol";
import SliderProduct from "./SlideProduct/SlideProduct";
import AboutProduct from "./AboutProduct/AboutProduct";
import PriceCountProduct from "./Price&CountProduct/Price&CountProduct";
import DescriptionProduct from "./DescriptionProduct/DescriptionProduct";
import TablePoduct from "./TablePoduct/TablePoduct";
import QuostionYou from "./QuostionYou/QuostionYou";
import SuggestedProduct from "./SuggestedProduct/SuggestedProduct";
import SuggestedArticle from "./SuggestedArticle/SuggestedArticle";
import Comments from "../Comments/Comments";
import {useParams} from "react-router-dom";
import {apiRightSlide2} from "../../Supbase/Supbase";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function ProductPage() {
   useScrol();
   const {productId} = useParams();
   const [loading, setLoading] = useState(true);
   const [product, setProduct] = useState(null);

   useEffect(() => {
      async function s() {
         let y = await apiRightSlide2("coffie");

         let filter = y.find((item) => item.id == productId);

         setProduct(filter);
         setLoading(false);
      }
      s();
   }, []);

   if (loading) return <Loader />;

   return (
      <>
         <Header />
         <div className='container grid grid-cols-1 md:grid-cols-4 mb-20 mt-10 gap-5 '>
            <div className='md:col-span-3'>
               <div className=' grid lg:grid-cols-9 gap-2 gap-y-10'>
                  <SliderProduct item={Array(3).fill(`${product?.img || ""}`)} />

                  <AboutProduct />
               </div>
               <div className='p-2'>
                  <DescriptionProduct />
                  <TablePoduct />
                  <QuostionYou />
               </div>
            </div>
            <div className='md:col-span-1 sticky top-20'>
               <PriceCountProduct />
            </div>
         </div>
         <SuggestedProduct />
         <SuggestedArticle />
         <Comments />
         <Footer />
      </>
   );
}
