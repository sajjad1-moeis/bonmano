import React, {useEffect, useState} from "react";
import SideBar from "./SideBar/SideBar";
import {useNavigate, Outlet} from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import ContextAdmin from "../../Context/ContextAdmin";
import {DrawerAdmin} from "../components/Drawer/Drawer";
export default function PanelAdmin() {
   const [drawerAdmin, setDrawerAdmin] = useState(false);

   return (
      <ContextAdmin.Provider
         value={{
            drawerAdmin,
            setDrawerAdmin,
         }}
      >
         <div className='flex sidebar bg-gray-1000 overflow-hidden'>
            <SideBar />
            <div className='p-5 w-full'>
               <TopBar />
               <Outlet />
            </div>
            <DrawerAdmin />
         </div>
      </ContextAdmin.Provider>
   );
}
