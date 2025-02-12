import {Drawer, IconButton} from "@material-tailwind/react";
import {TfiClose} from "react-icons/tfi";
import {useContext} from "react";
import ContextAll from "../../../Context/Context";
import contextAdmin from "../../../Context/ContextAdmin";
import {Link, NavLink} from "react-router-dom";

export function DrawerBasket() {
   let context = useContext(ContextAll);
   let bind = {
      position: "left",
      setOpenDrawer: context.setDrawerBasket,
      openDrawer: context.drawerBasket,
      isBasket: true,
      size: 360,
   };
   return (
      <DrawerDefault {...bind}>
         <div className='p-3.5 absolute top-4  w-[90%] bg-successDark z-[-1]  text-center text-xl text-white rounded-xl'>
            سبد خرید
         </div>
         <p className='text-center text-danger'>هیچ محصولی در سبد خرید نمی باشد</p>
      </DrawerDefault>
   );
}

export function DrawerMenu() {
   let context = useContext(ContextAll);
   let bind = {
      position: "right",
      setOpenDrawer: context.setDrawerMenu,
      openDrawer: context.drawerMenu,
   };
   return (
      <DrawerDefault {...bind}>
         <div className='absolute top-2 left-1/3'>
            <NavLink to='/'>
               <img src='https://www.bonmano.com/wp-content/uploads/2023/10/Group-1501.svg' alt='' />
            </NavLink>
         </div>
         <div className='mt-14'></div>
         <div className='grid gap-6 text-successDark' onClick={() => context.setDrawerMenu(false)}>
            <Link to='/blogs'> _ مجله ها</Link>
            <Link className='text-sm' to='/about-us'>
               {" "}
               _ درباره ما
            </Link>
            <Link className='text-sm' to='/contact-us'>
               {" "}
               _ تماس با ما
            </Link>
         </div>
      </DrawerDefault>
   );
}
export function DrawerAdmin() {
   let context = useContext(contextAdmin);
   let bind = {
      setOpenDrawer: context.setDrawerAdmin,
      openDrawer: context.drawerAdmin,
   };
   return (
      <DrawerDefault {...bind}>
         <div className='p-3'>m</div>
      </DrawerDefault>
   );
}

export function DrawerDefault({position, setOpenDrawer, openDrawer, children, isBasket, size}) {
   return (
      <div className='drawer'>
         <Drawer
            size={size ? size : 300}
            placement={position ? position : "left"}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            className='p-4 fixed w-full'
         >
            <div className={`mb-6 flex items-center justify-between ${isBasket ? "pt-2 text-white ps-3" : ""}`}>
               <IconButton
                  variant='text'
                  color={`${isBasket ? "white" : "blue-gray"}`}
                  onClick={() => setOpenDrawer(false)}
               >
                  <TfiClose className='w-5 h-5' />
               </IconButton>
            </div>
            {children}
         </Drawer>
      </div>
   );
}
