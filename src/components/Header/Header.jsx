import React, {useContext, useId, useState, useRef, useEffect} from "react";
import {IoIosSearch} from "react-icons/io";
import {CiUser, CiHeart, CiShoppingBasket} from "react-icons/ci";
import {GrMenu} from "react-icons/gr";
import {Link, NavLink} from "react-router-dom";
import TemplateSubMenu from "../TemplateSubMenu/TemplateSubMenu";
import {LiaUserCircleSolid} from "react-icons/lia";
import {MdExitToApp} from "react-icons/md";
import ContextAll from "../../../Context/Context";
import useFetch from "../../../Hook/useFetch";
let navItem = [
   {
      title: "محصولات خانگی ",
      subMenu: [
         {title: "نورسکا"},
         {title: "کپسول اسپرسو"},
         {title: "اسپرسو"},
         {title: "قهوه ترک"},
         {title: "قهوه فرانسه"},
         {title: "قهوه فوری"},
         {title: "پودر های ترکیبی"},
      ],
   },
];

let itemLogin = [
   {title: "سجاد", path: "/", element: <LiaUserCircleSolid className='text-2xl' />, typeUser: true},
   {title: "خروج", path: "/", element: <MdExitToApp className='text-2xl' />, isLogOut: true},
];
export default function Header({isAdmin, getUser}) {
   let context = useContext(ContextAll);
   const [scrol, setScrol] = useState(0);
   let hederRef = useRef();
   let {fetchData} = useFetch();

   useEffect(() => {
      function scrolBar() {
         window.scrollY < scrol
            ? hederRef.current.classList.add("activeHeder")
            : hederRef.current.classList.remove("activeHeder");
         setScrol(window.scrollY);
      }

      window.addEventListener("scroll", scrolBar);

      return () => window.removeEventListener("scroll", scrolBar);
   }, [scrol]);
   return (
      <>
         <div ref={hederRef} className='heder relative md:sticky md:-top-40 w-full z-[100]  bg-white '>
            <div className='container flex  items-center justify-between mx-auto py-3 md:py-4 px-3 flex-row-reverse md:flex-row'>
               <div className='flex ' onClick={() => context.setShowSearch(true)}>
                  <IconBtn elm={<IoIosSearch />} />
                  <button className='text-sm  ms-2 font-thin md:block hidden'>جستجو ...</button>
               </div>
               <div className=' items-center gap-8 flex'>
                  <div className='hidden lg:flex gap-5 items-center'>
                     {navItem.map((item) => (
                        <Link key={useId()} to={item.link}>
                           <TemplateSubMenu title={item.title} arr={item.subMenu} isMenu={true} />
                        </Link>
                     ))}
                     <Link to='/blogs'>مجله ها</Link>
                  </div>

                  <NavLink to='/'>
                     <img src='https://www.bonmano.com/wp-content/uploads/2023/10/Group-1501.svg' alt='' />
                  </NavLink>
                  <div className='hidden lg:flex gap-5 items-center'>
                     <Link className='text-sm' to='/about-us'>
                        درباره ما
                     </Link>
                     <Link className='text-sm' to='/contact-us'>
                        تماس با ما
                     </Link>
                  </div>
               </div>
               <div className=' gap-2 md:flex hidden user'>
                  {context.isLogin ? (
                     <TemplateSubMenu
                        isAdmin={isAdmin}
                        arr={itemLogin}
                        click={async () => {
                           await fetchData("https://benmano-api.liara.run/api/v1/logout");
                           await getUser();
                           context.setAlretSuccess("با موفقیت خروج کردید");
                        }}
                     >
                        <IconBtn elm={<CiUser />} />
                     </TemplateSubMenu>
                  ) : (
                     <div onClick={() => context.setShowLogin(true)}>
                        <IconBtn elm={<CiUser />} />
                     </div>
                  )}
                  <div onClick={() => context.setDrawerBasket(true)}>
                     <IconBtn isBadge={true} elm={<CiShoppingBasket />} />
                  </div>
                  <IconBtn elm={<CiHeart />} />
               </div>
               <div className='md:hidden block' onClick={() => context.setDrawerMenu(true)}>
                  <IconBtn elm={<GrMenu />} />
               </div>
            </div>
         </div>
      </>
   );
}
function IconBtn({elm, isBadge}) {
   return (
      <div className='p-0.5 border-gray-700 rounded-full border-2 cursor-pointer relative'>
         {isBadge && (
            <div className='absolute w-4 h-4 flex items-center justify-center text-white rounded-full bg-[#009879] -top-1.5 -right-1.5 text-xs'>
               0
            </div>
         )}
         <div className='bg-[#E2BA96] rounded-full p-1'>{elm}</div>
      </div>
   );
}
