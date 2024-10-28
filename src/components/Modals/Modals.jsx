import React, {useContext, useEffect, useId, useState} from "react";
import ContextAll from "../../../Context/Context";
import {TfiClose} from "react-icons/tfi";
import {Input, Dialog} from "@material-tailwind/react";
import {ItemInput} from "../../PanelAdmin/ProductPanel/AddProduct/AddProduct";
import useInput from "../../../Hook/useInput";
import usePost from "../../../Hook/usePost";
export function ModalSearch() {
   let context = useContext(ContextAll);
   let bind = {
      showOpen: context.showSearch,
      size: "xxl",
      setOpen: context.setShowSearch,
   };
   return (
      <DialogSizes {...bind}>
         <div className='container mx-auto mt-20' dir='ltr'>
            <Input color='blue' label='Search' />
         </div>
      </DialogSizes>
   );
}
export function ModalRegester() {
   const [email, setEmail] = useInput();
   const [password, setPassword] = useInput();
   const [fullName, setFullName] = useInput();
   const [clickInpuet, setClickInput] = useState(false);
   let context = useContext(ContextAll);

   let {postData} = usePost("https://benmano-api.liara.run/api/v1/register");

   let itemRegester = [
      {title: "نام کاربری خود را وارد کنید", eror: "نام کاربری  را وارد کنید", value: fullName, changeHandeler: setFullName},
      {title: "ایمیل خود را وارد کنید", eror: "ایمیل  را وارد کنید", value: email, changeHandeler: setEmail},
      {title: "پسورد خود را وارد کنید", eror: "پسورد را وارد کنید", value: password, changeHandeler: setPassword},
   ];
   let bind = {
      showOpen: context.showRegester,
      size: "xs",
      setOpen: context.setShowRegester,
   };

   const clickHandeler = async () => {
      setClickInput(true);
      if (email && password && fullName) {
         let obj = {email: email, password: password, fullname: fullName};
         await postData(obj, false, context.setAlretSuccess);
         context.setShowRegester(false);
         context.setAlretSuccess("با موفقیت ثبت نام کردید لطفا ورود کنید");
      }
   };

   return (
      <DialogSizes {...bind}>
         <ItemInput arr={itemRegester} clickInpuet={clickInpuet} isModal />
         <Button className='w-full bg-successDark text-lg p-2 font-thin mt-5' onClick={clickHandeler}>
            ثبت نام
         </Button>
      </DialogSizes>
   );
}

export function ModalLogin({getUser}) {
   const [clickInpuet, setClickInput] = useState(false);
   const [email, setEmail, changeEmail] = useInput();
   const [password, setPassword, changePass] = useInput();
   const [isLoding, setIsloding] = useState(false);
   const [isEror, setIsEror] = useState("");
   const [isPost, setIsPost] = useState(false);
   let context = useContext(ContextAll);

   let {postData, messageSucc, message} = usePost("https://benmano-api.liara.run/api/v1/login");

   let itemLogin = [
      {title: "ایمیل خود را وارد کنید", eror: "ایمیل  را وارد کنید", value: email, changeHandeler: setEmail},
      {title: "پسورد خود را وارد کنید", eror: "پسورد را وارد کنید", value: password, changeHandeler: setPassword},
   ];

   let bind = {
      showOpen: context.showLogin,
      size: "xs",
      setOpen: context.setShowLogin,
   };

   useEffect(() => {
      if (messageSucc) {
         getUser();
         context.setShowLogin(false);
         context.setAlretSuccess("با موفقیت  ورود کردید");
         setIsEror("");
      } else if (message.includes("لطفا ابتدا ثبت نام کنید")) {
         setTimeout(() => {
            context.setShowLogin(false);
            context.setShowRegester(true);
            setClickInput(false);
            changeEmail("");
            changePass("");
            setIsEror("");
         }, 1000);
      }
      setIsEror(message);
   }, [isPost]);

   const clickHAndeler = async () => {
      setClickInput(true);
      if (email && password) {
         setIsloding(true);
         let obj = {email: email, password: password};
         await postData(obj, false, context.setAlretSuccess);
         setIsloding(false);
         setIsPost(!isPost);
      }
   };

   return (
      <DialogSizes {...bind}>
         <ItemInput clickInpuet={clickInpuet} isModal arr={itemLogin} />
         {isLoding && <p className='my-5 text-black'>منتظر باشید ...</p>}
         {isEror && <p className='my-5  text-danger'>{isEror}</p>}
         <Button className='w-full bg-successDark text-lg p-2 font-thin mt-5' onClick={clickHAndeler}>
            ورود
         </Button>
      </DialogSizes>
   );
}

function DialogSizes({size, children, showOpen, setOpen}) {
   return (
      <>
         {/* bg-[#fafafacc] */}
         <Dialog open={showOpen} handler={() => setOpen(false)} className='outline-none bg-white  backdrop-blur-sm p-5' size={size}>
            <div className='cursor-pointer mb-5 w-max' onClick={() => setOpen(false)}>
               <TfiClose className='w-7 h-7 text-gray-700' />
            </div>
            {children}
         </Dialog>
      </>
   );
}
import {Button} from "@material-tailwind/react";
