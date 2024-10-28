import React, {useEffect, useState} from "react";
import {List, ListItem, Card} from "@material-tailwind/react";
import {sidBarItemData} from "../data";
import {NavLink, useLocation} from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
   const [sizeBrowser, setSize] = useState(window.innerWidth);

   useEffect(() => {
      window.onresize = () => {
         setSize(window.innerWidth);
      };
   }, []);
   return sizeBrowser < 799 ? "" : <CardTopBar />;
}

export function CardTopBar(props) {
   function clickHandeler() {
      console.log("object");
   }

   return (
      <div className='sticky top-0  border-e border-[#2C2D33] '>
         <div className='flex gap-2 justify-center w-full mt-10'>
            <div className='size-2.5 rounded-full bg-[#029F04]'></div>
            <div className='size-2.5 rounded-full bg-[#FEB002]'></div>
            <div className='size-2.5 rounded-full bg-[#EA1701]'></div>
         </div>
         <Card color='transparent' shadow={false} className=' p-4 overflow-hidden h-[calc(100vh-2rem)]  w-max'>
            <List className='p-0 min-w-[0px]'>
               {sidBarItemData.map((item, index) => (
                  <ListItems key={index} {...item} clicki={item.isLogOut ? clickHandeler : undefined} />
               ))}
            </List>
         </Card>
      </div>
   );
}

function ListItems({icon, href, clicki}) {
   return (
      <NavLink to={href} className={(item) => (href === useLocation().pathname ? "activeSid" : "")} onClick={clicki}>
         <ListItem className='text-white subSid flex items-center gap-2  '>
            <div className='text-3xl'>{icon}</div>
         </ListItem>
      </NavLink>
   );
}
