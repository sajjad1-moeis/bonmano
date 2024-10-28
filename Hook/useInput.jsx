import React, {useState} from "react";

export default function useInput() {
   let [inputVal, setInputVal] = useState("");
   const changeHandeler = (e) => {
      setInputVal(e.target.value);
   };

   return [inputVal, changeHandeler, setInputVal];
}
