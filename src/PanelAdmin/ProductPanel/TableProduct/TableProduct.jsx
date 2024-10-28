import React, {useEffect, useState} from "react";
import {Table} from "../../HomePanel/TableUsers/TableUsers";
import useFetch from "../../../../Hook/useFetch";
import useDelete from "../../../../Hook/useDelete";

const TABLE_HEAD = ["نام محصول", "دسته محصول", "قیمت محصول", "خرید و فروش", "عملیات"];

export default function TableProduct({arrBody, getAllProduct}) {
   const [productId, setProductId] = useState(null);
   const {message, deleteData} = useDelete("https://benmano-api.liara.run/api/v1/products/");

   const deleteHandeler = (id) => {
      deleteData(id);
      getAllProduct();
   };

   return (
      <div className='mt-5 overflow-hidden'>
         <Table arrHead={TABLE_HEAD} arrBody={arrBody} isPoduct deleteData={deleteHandeler} />
      </div>
   );
}
