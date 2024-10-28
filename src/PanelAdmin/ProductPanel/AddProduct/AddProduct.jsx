import React, {useState, memo, useContext, useId, useEffect} from "react";
import {Typography, Input, Button, Spinner} from "@material-tailwind/react";
import {FaImage} from "react-icons/fa";
import useInput from "../../../../Hook/useInput";
import usePost from "../../../../Hook/usePost";
import useFetch from "../../../../Hook/useFetch";
import ContextAll from "../../../../Context/Context";
let AddProduct = memo(function AddProduct({getAllProduct}) {
   let context = useContext(ContextAll);
   const [clickInpuet, setClickInput] = useState(false);
   const [title, setTitle, changeTitle] = useInput();
   const [price, setPrice, changePrice] = useInput();
   const [category, setCategory, changeCategory] = useInput();
   const [weight, setWeight, changeWeight] = useInput();
   const [filter, setFilter, changeFilter] = useInput();
   const [isPost, setIsPost] = useState(false);
   const [img, setImg] = useState(null);

   const {postData, jsonData, loding} = usePost("https://benmano-api.liara.run/api/v1/products");

   let itemInput = [
      {title: "نام کالا", eror: "نام را وارد کنید", value: title, changeHandeler: setTitle},
      {title: "قیمت محصول", eror: "قیمت را وارد کنید", value: price, changeHandeler: setPrice},
      {title: "دسته بندی", eror: "دسته بندی را وارد کنید", value: category, changeHandeler: setCategory},
      {title: "فیلتر", eror: "فیلتر را وارد کنید", value: filter, changeHandeler: setFilter},
      {title: "وزن", eror: "وزن  را وارد کنید", value: weight, changeHandeler: setWeight},
   ];

   const clickHandeler = async () => {
      setClickInput(true);
      const validPrice = /^[0-9]+$/.test(price);
      const validWeight = /^[0-9]+$/.test(weight);

      if (title && price && category && weight && img && filter && validPrice && validWeight) {
         const formData = new FormData();
         formData.append("image", img);
         formData.append("name", title);
         formData.append("price", Number(price));
         formData.append("filter", filter);
         formData.append("weight", weight);
         formData.append("categories", category);
         await postData(formData, true);
         getAllProduct();
         context.setAlretSuccess("محصول با موفقیت اضافه شد");
         setClickInput(false);
      } else if (!validPrice) {
         context.setAlretErro("قیمت را درست وارد کنید");
      } else if (!validWeight) {
         context.setAlretErro(" وزن را درست وارد کنید");
      }
   };

   return (
      <>
         <h1 className='text-xl'>اضافه کردن محصول</h1>
         <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 mt-10'>
               <ItemInput arr={itemInput} clickInpuet={clickInpuet} />

               <div className='mt-8'>
                  <p color='white' className='mb-3'>
                     عکس محصول :
                  </p>
                  <Button className='w-full p-0 flex bg-gray-1000  relative '>
                     <div className='text-xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <FaImage />
                     </div>
                     <input type='file' onChange={() => setImg(event.target.files[0])} name='' id='' className='opacity-0  p-2 w-full  cursor-pointer' />
                  </Button>
                  {clickInpuet && !img && (
                     <p color='white' className='mt-3 text-sm text-danger'>
                        عکس محصول را وارد کنید
                     </p>
                  )}
               </div>
            </div>

            <div className='flex justify-between w-full items-center h-max mt-10'>
               <div className='ps-2'>{loding && <Spinner />}</div>
               <Button onClick={clickHandeler} className='text-sm font-thin  flex-none bg-blue-800 w-max  h-max'>
                  اضافه کردن
               </Button>
            </div>
         </div>
      </>
   );
});
export function ItemInput({clickInpuet, arr, isModal}) {
   return (
      <>
         {arr.map((item) => (
            <div key={useId()} className='mt-8'>
               <p color='white' className='mb-3'>
                  {item.title} :
               </p>
               <Input
                  className={`${
                     isModal
                        ? " bg-white border-2  !border-gray-300   focus:!border-gray-700"
                        : "!border-gray-1000  text-white !bg-gray-1000 !border-t-gray-1000 border-2 focus:!border-gray-900"
                  }`}
                  labelProps={{
                     className: "before:content-none after:content-none",
                  }}
                  onInput={item.changeHandeler}
               />
               {clickInpuet && !item.value && (
                  <p color='white' className='mt-3 text-sm text-danger'>
                     {item.eror}
                  </p>
               )}
            </div>
         ))}
      </>
   );
}

export default AddProduct;
