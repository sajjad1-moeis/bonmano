import React, {useEffect} from "react";

export default function useOpacity(refImg, activeBtn) {
   useEffect(() => {
      refImg.current.classList.remove("slickAnimate");
      setTimeout(() => {
         refImg.current.classList.add("slickAnimate");
      }, 1);
   }, [activeBtn]);
}
