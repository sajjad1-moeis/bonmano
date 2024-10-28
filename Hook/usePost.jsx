import {data} from "autoprefixer";
import React from "react";

import {useState, useEffect} from "react";

const usePost = (url) => {
   const [message, setMessage] = useState("");

   const [jsonData, setJsonData] = useState(false);
   const [messageSucc, setMessageSucc] = useState(false);
   const [loding, setLoding] = useState(false);

   const postData = async (body, type) => {
      let jsonAp = {
         method: "POST",
         credentials: "include",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(body),
      };

      let formAp = {
         method: "POST",
         credentials: "include",
         body: body,
      };

      let obj = type ? formAp : jsonAp;

      setLoding(true);
      try {
         let fetchUrl = await fetch(url, {...obj});
         let data = await fetchUrl.json();
         console.log(data);
         if (data.success) {
            setMessageSucc(true);
            setJsonData(data);
         } else if (data.valid) {
            setMessage("ایمیل یا پسورد را درست وارد کنید");
         } else if (data.message) {
            setMessage("لطفا ایمیل را درست وارد کنید");
         } else {
            setMessage("لطفا ابتدا ثبت نام کنید");
         }
      } catch (err) {
         console.log(err);
      }
      setLoding(false);
   };

   return {postData, messageSucc, message, loding, jsonData};
};

export default usePost;
