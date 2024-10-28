import NextHeader from "./nextHeader/nextHeader";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import Slide3 from "./Slide3/Slide3";
import Slide4 from "./Slide4/Slide4";
import Slide5 from "./Slide5/Slide5";
import HelpYou from "./HelpYou/HelpYou";
import ShopMe from "./ShopMe/ShopMe";
import Article from "./Article/Article";
import useScrol from "../../../Hook/useScrol";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Home() {
   useScrol();

   return (
      <div>
         <Header isAdmin={true} getUser={() => {}} />
         <Slide3 />
         <Slide2 />
         <NextHeader />
         <Slide4 />
         <HelpYou />
         <ShopMe />
         <Slide1 />
         <Slide5 />
         <Article />
         <Footer />
      </div>
   );
}
