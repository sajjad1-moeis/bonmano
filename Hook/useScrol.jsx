import React, {useEffect} from "react";

export default function useScrol() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
}
