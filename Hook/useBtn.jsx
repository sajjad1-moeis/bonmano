import React, {useState, useEffect} from "react";
export default function useBtn(type, arr) {
   const [activeBtn, setActiveBtn] = useState(1);
   const [filterArr, setFilterArr] = useState([]);

   useEffect(() => {
      let filter = arr.filter((item) => item.isFilter === `slide${type}(${activeBtn})`);
      setFilterArr(filter);
      //////
   }, [activeBtn]);

   function clickHandeler(id) {
      setActiveBtn(id);
   }

   return [activeBtn, clickHandeler, filterArr];
}
