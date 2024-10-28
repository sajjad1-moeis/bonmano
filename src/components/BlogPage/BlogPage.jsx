import React from "react";
import Section1 from "./Section1/Section1";
import CategoryContents from "./CategoryContents/CategoryContents";
import ContentsBlog from "./ContentsBlog/ContentsBlog";
import SuggestedAdmin from "./SuggestedAdmin/SuggestedAdmin";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function BlogPage() {
   return (
      <div>
         <Header />
         <Section1 />
         <CategoryContents />
         <ContentsBlog />
         <SuggestedAdmin />
         <Footer />
      </div>
   );
}
