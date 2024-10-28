import {useState, useEffect, useMemo} from "react";
import {useRoutes} from "react-router-dom";
import {routes} from "./Routes/Routes";
import ContextAll from "../Context/Context";
import {ModalSearch, ModalLogin, ModalRegester} from "./components/Modals/Modals";
import {DrawerBasket, DrawerMenu} from "./components/Drawer/Drawer";
import ApiCoffie from "./Supbase/Api";
import AlertSuccess from "./components/Alret/Alret";
import {AlertEror} from "./components/Alret/Alret";
import Loader from "./components/Loader/Loader";
let arrCoffie = ApiCoffie();

function App() {
   const routerPages = useRoutes(routes);

   const [isLogin, setIsLogin] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [showSearch, setShowSearch] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
   const [showRegester, setShowRegester] = useState(false);
   const [drawerBasket, setDrawerBasket] = useState(false);
   const [drawerMenu, setDrawerMenu] = useState(false);
   const [alretSuccess, setAlretSuccess] = useState("");
   const [alretError, setAlretErro] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setIsAdmin(true);
      setIsLogin(true);
      setLoading(false);
   }, []);

   function getUser() {}

   if (loading) return <Loader />;

   return (
      <ContextAll.Provider
         value={{
            showSearch,
            drawerBasket,
            drawerMenu,
            arrCoffie,
            showLogin,
            isLogin,
            showRegester,
            alretSuccess,
            alretError,
            setAlretSuccess,
            setAlretErro,
            setShowRegester,
            setIsLogin,
            setDrawerBasket,
            setDrawerMenu,
            setShowSearch,
            setShowLogin,
         }}
      >
         <>
            {routerPages}
            <ModalSearch />
            <ModalLogin getUser={getUser} />
            <ModalRegester />
            <DrawerBasket />
            <DrawerMenu />
         </>

         <AlertSuccess open={alretSuccess} setOpen={setAlretSuccess} />
         <AlertEror open={alretError} setOpen={setAlretErro} />
      </ContextAll.Provider>
   );
}

export default App;
