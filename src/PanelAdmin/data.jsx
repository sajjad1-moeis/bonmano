import {IoMdNotifications} from "react-icons/io";
import {GoHomeFill} from "react-icons/go";

import {HiUsers} from "react-icons/hi";
import {FaShop} from "react-icons/fa6";
import {IoBarChartSharp} from "react-icons/io5";
import {IoMdSettings} from "react-icons/io";
import {MdSms} from "react-icons/md";
import {IoLogOut} from "react-icons/io5";
let sidBarItemData = [
   {title: "خانه", href: "/panelAdmin", icon: <GoHomeFill />},
   {title: "کاربران", href: "/panelAdmin/Users", icon: <HiUsers />},
   {title: "محصولات", href: "/panelAdmin/Product", icon: <FaShop />},
   {title: "پیام ها", href: "/panelAdmin/Notification", icon: <IoMdNotifications />},
   {title: "تیکت ها", href: "/panelAdmin/Ticket", icon: <MdSms />},
   {title: "آمار", href: "/panelAdmin/Chart", icon: <IoBarChartSharp />},
   {title: "تنظیمات", href: "/panelAdmin/Setting", icon: <IoMdSettings />},
   {title: "خروج", href: "/", icon: <IoLogOut />, isLogOut: true},
];

const TABLE_ROWS = [
   {name: "John Michael", job: "Manager", date: "23/04/18", value: 70, color: "blue"},
   {name: "Alexa Liras", job: "Developer", date: "23/04/18", value: 35, color: "green"},
   {name: "Laurent Perrier", job: "Executive", date: "19/09/17", value: 95, color: "red"},
   {name: "Michael Levi", job: "Developer", date: "24/12/08", value: 30, color: "pink"},
   {name: "Richard Gran", job: "Manager", date: "04/10/21", value: 69, color: "purple"},
];

export {sidBarItemData, TABLE_ROWS};
