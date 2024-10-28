import React, {useEffect, useState} from "react";
import AlertDismissible from "../src/components/Alret/Alret";
export default function useDelete(url) {
   const [message, setMassge] = useState(null);

   const deleteData = async (dataId) => {
      try {
         let fetchUrl = await fetch(`${url}${dataId}`, {
            method: "DELETE",
            credentials: "include",
         });
         let jsonData = await fetchUrl.json();
         setMassge(jsonData);
      } catch (err) {
         console.log(err);
      }
   };
   return {message, deleteData};
}
