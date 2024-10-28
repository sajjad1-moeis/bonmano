import {useState} from "react";

export default function useFetch() {
   const [jsonData, setJsonData] = useState([]);
   const [error, setError] = useState("");
   const [Login, setlogin] = useState(null);
   const [Admin, setAdmin] = useState(null);

   const fetchData = async (url) => {
      try {
         let fetchUrl = await fetch(`${url}`, {credentials: "include"});
         let data = await fetchUrl.json();
         setJsonData(data);
         setlogin(data.login);
         setAdmin(data.userdata.isAdmin);
      } catch (err) {
         (err) => setError(err);
      }
   };

   return {jsonData, error, fetchData, Login, Admin};
}
