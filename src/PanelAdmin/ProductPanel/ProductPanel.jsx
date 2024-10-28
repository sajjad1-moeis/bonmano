import React, {useEffect, useState} from "react";
import AddProduct from "./AddProduct/AddProduct";
import BestProduct from "./BestProduct/BestProduct";
import BadProduct from "./BadProduct/BadProduct";
import TableProduct from "./TableProduct/TableProduct";
import useFetch from "../../../Hook/useFetch";
export default function ProductPanel() {
   const {jsonData, error, fetchData} = useFetch();
   const getAllProduct = async () => {
      fetchData("https://benmano-api.liara.run/api/v1/products");
   };
   useEffect(() => {
      getAllProduct();
   }, []);

   return (
      <>
         <div className='grid grid-cols-1 md:grid-cols-7 gap-5 mt-5 overflow-hidden'>
            <div className=' text-white  md:col-span-4 p-10 rounded-md bg-grayAdmin'>
               <AddProduct getAllProduct={getAllProduct} />
            </div>
            <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
               <div>
                  <BestProduct />
               </div>
               <div>
                  <BadProduct />
               </div>
            </div>
         </div>
         <TableProduct arrBody={jsonData} getAllProduct={getAllProduct} />
      </>
   );
}
