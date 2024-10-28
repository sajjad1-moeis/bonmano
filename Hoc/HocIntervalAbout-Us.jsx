import React, {useEffect, useState} from "react";

export default function HocIntervalAboutUs(OriginalComponents) {
   return function NewComponents(props) {
      let [count, setCount] = useState(0);

      useEffect(() => {
         let inter = setInterval(() => {
            if (count == props.number) {
               clearInterval(inter);
            } else {
               setCount((prev) => prev + 1);
            }
         }, props.number / 300);
         return () => clearInterval(inter);
      }, [count]);
      return <OriginalComponents {...props} count={count} />;
   };
}
