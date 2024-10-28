import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import TaskBonmano from "./TaskBonmano/TaskBonmano";
import HistoryBonmano from "./HistoryBonmano/HistoryBonmano";
import CircleCarousel from "./CircleCarousel/CircleCarousel";
import NextSectionCircle from "./nextSectionCircle/NextSectionCircle";
import IntervalNumber from "./IntervalNumber/IntervalNumber";
import TeamBonmano from "./TeamBonmano/TeamBonmano";
import useScrol from "../../../Hook/useScrol";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function AboutUs() {
   useScrol();
   return (
      <>
         <Header />
         <FirstSection />
         <TaskBonmano />
         <HistoryBonmano />
         <CircleCarousel />
         <NextSectionCircle />
         <IntervalNumber />
         <TeamBonmano />
         <Footer />
      </>
   );
}
