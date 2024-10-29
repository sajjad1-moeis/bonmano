import React, {useEffect} from "react";
import {Alert, Button} from "@material-tailwind/react";

export default function AlertSuccess({open, setOpen}) {
   useEffect(() => {
      setTimeout(() => {
         setOpen("");
      }, 3000);
      return () => {
         setTimeout(() => {
            setOpen("");
         }, 3000);
      };
   }, [open]);
   return (
      <>
         <Alert
            color='green'
            className='fixed z-[655] top-6 right-5 md:right-10 max-w-[300px] lg:max-w-[400px]'
            open={open ? true : false}
            onClose={() => setOpen("")}
         >
            {open}
         </Alert>
      </>
   );
}
export function AlertEror({open, setOpen}) {
   useEffect(() => {
      setTimeout(() => {
         setOpen("");
      }, 3000);
      return () => {
         setTimeout(() => {
            setOpen("");
         }, 3000);
      };
   }, [open]);
   return (
      <>
         <Alert
            color='red'
            className='fixed z-[655] top-6 right-5 md:right-28 max-w-[300px] lg:max-w-[400px]'
            open={open ? true : false}
            onClose={() => setOpen("")}
         >
            {open}
         </Alert>
      </>
   );
}
