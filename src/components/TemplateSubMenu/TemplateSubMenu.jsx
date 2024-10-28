import React, {useId} from "react";
import {Menu, MenuHandler, MenuList, MenuItem} from "@material-tailwind/react";
import {IoIosArrowDown} from "react-icons/io";
import {NavLink} from "react-router-dom";

export default function TemplateSubMenu({arr, title, isMenu, click, isAdmin, children}) {
   const [openMenu, setOpenMenu] = React.useState(false);

   return (
      <Menu open={openMenu} handler={setOpenMenu} allowHover offset={isMenu ? 41 : 20}>
         <MenuHandler
            className={` outline-none hover:bg-transparent ${isMenu ? "text-sm" : ""} relative flex items-center gap-2`}
         >
            <button
               variant='text'
               className='flex items-center gap-3 text-sm font-normal capitalize tracking-normal hover:bg-white hover:text-success border-0 outline-none'
            >
               {title}
               {isMenu ? (
                  <IoIosArrowDown
                     strokeWidth={2.5}
                     className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                  />
               ) : (
                  children
               )}
            </button>
         </MenuHandler>
         <MenuList
            className={`hidden w-max p-1 border outline-none text-sm  overflow-visible lg:grid ${
               isMenu ? "bg-[#FAF3EA] px-10 pb-7" : "bg-white border"
            }  rounded-none rounded-b-lg`}
         >
            <ul className='col-span-4 flex w-full flex-col gap-1  outline-none text-black '>
               {arr.map((item) => (
                  <NavLink to={item.typeUser ? item.typeUser && "/panelAdmin" : item.path} key={useId()}>
                     <MenuItem
                        onClick={item.isLogOut ? click : undefined}
                        className={`  text-sm flex gap-1.5 items-center  font-thin hover:bg-transparent ${
                           isMenu
                              ? "py-3 border-b border-[#e6c498] mt-2 pe-20"
                              : "hover:bg-blue-gray-50  overflow-hidden"
                        }  rounded-none`}
                     >
                        {item.element}
                        {item.title}
                     </MenuItem>
                  </NavLink>
               ))}
            </ul>
         </MenuList>
      </Menu>
   );
}
