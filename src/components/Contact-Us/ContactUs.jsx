import React, {useEffect} from "react";
import FirstSection from "./FirstSection/FirstSection";
import LocationSection from "./LocationSection/LocationSection";
import LastSection from "./LastSection/LastSection";
import useScrol from "../../../Hook/useScrol";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function ContactUs() {
   useScrol();
   return (
      <div>
         <Header />
         <FirstSection />
         <LocationSection />
         <LastSection />
         <div className='container mb-10 '>
            <Link to='/'>
               <img
                  className='min-h-[60vw] md:min-h-[10vw] object-cover md:object-contain'
                  src='https://www.bonmano.com/wp-content/uploads/2023/10/01-3-2048x341.png'
                  alt=''
               />
            </Link>
         </div>
         <Footer />
      </div>
   );
}
