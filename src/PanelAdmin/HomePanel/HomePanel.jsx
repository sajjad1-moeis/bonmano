import React from "react";
import Charts from "./Chart/Chart";
import ActiveUser from "./ActiveUser/ActiveUser";
import OrderSuggested from "./OrderSuggested/OrderSuggested";
import Calender from "./Calender/Calender";
import ProfileUser from "./ProfileUser/ProfileUser";
import TableUsers from "./TableUsers/TableUsers";
export default function HomePanel() {
   return (
      <>
         <div className='grid  grid-cols-1 md:grid-cols-5 gap-5  my-5'>
            <div className='md:col-span-2'>
               <ActiveUser />
            </div>
            <div>
               <OrderSuggested />
            </div>
            <div>
               <Calender />
            </div>
            <div>
               <ProfileUser />
            </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
            <div className='md:col-span-3'>
               <TableUsers />
            </div>
            <div className='md:col-span-2'>
               <Charts type='bar' title />
            </div>
         </div>
      </>
   );
}
