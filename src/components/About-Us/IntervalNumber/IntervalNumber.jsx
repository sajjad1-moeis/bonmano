import React, {useEffect, useRef, useState} from "react";
import ItemInterval from "./ItemInterval";
let Item = [
   {number: 250, title: "کارکنان", isType: ""},
   {number: 500, title: "شرکای تجاری", isType: ""},
   {number: 2000, title: "کاربر فعال", isType: "M"},
];
export default function IntervalNumber() {
   let refContainer = useRef();
   const [intetrvalNumber, setIntetrvalNumber] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (refContainer.current !== null && window.scrollY > refContainer.current.offsetTop - 780) {
            setIntetrvalNumber(true);
         }
      });
   }, []);

   return (
      <div ref={refContainer} style={{backgroundImage: "url(./src/components/About-Us/IntervalNumber/bg.png"}}>
         <div className='my-20 container py-20 grid grid-cols-1 md:grid-cols-3'>{intetrvalNumber && Item.map((item) => <ItemInterval key={item.number} {...item} />)}</div>
      </div>
   );
}
