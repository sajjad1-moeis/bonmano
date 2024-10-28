import React, {useContext} from "react";
import {Badge, Avatar, Input} from "@material-tailwind/react";
import {IoIosNotifications} from "react-icons/io";
import {IoSearch} from "react-icons/io5";
import {HiMenu} from "react-icons/hi";
import contextAdmin from "../../../Context/ContextAdmin";
import {FaUserCircle} from "react-icons/fa";
export default function TopBar() {
   let context = useContext(contextAdmin);
   return (
      <div className='flex items-center justify-between bg-grayAdmin p-3 pe-6 rounded-xl bg'>
         <div className='p-2 px-4 rounded-lg  h-max hidden md:flex justify-between bg-gray-1000 text-gray-500 items-center'>
            <input type='text' className='outline-none bg-transparent placeholder:text-sm' placeholder='جستجو' />
            <IoSearch className='text-xl' />
         </div>
         <div className='text-3xl text-white md:hidden ' onClick={() => context.setDrawerAdmin(true)}>
            <HiMenu />
         </div>
         <div className='text-white flex gap-5 md:gap-9 items-center '>
            <div className='relative' color='red'>
               <div className='absolute w-2 h-2 rounded-full bg-danger'></div>
               <IoIosNotifications className='text-2xl' />
            </div>
            <div className='flex items-center gap-2'>
               سجاد
               <FaUserCircle className='text-2xl' />
            </div>
         </div>
      </div>
   );
}
