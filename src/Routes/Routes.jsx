import Home from "../components/Home/Home";
import ContactUs from "../components/Contact-Us/ContactUs";
import AboutUs from "../components/About-Us/About-Us";
import NotFound from "../components/404/404";
import ProductPage from "../components/ProductPage/ProductPage";
import BlogPage from "../components/BlogPage/BlogPage";
import PanelAdmin from "../PanelAdmin/PanelAdmin";
import HomePanel from "../PanelAdmin/HomePanel/HomePanel";
import ProductPanel from "../PanelAdmin/ProductPanel/ProductPanel";
import Blog from "../components/Blog/Blog";
let routes = [
   {path: "/", element: <Home />},
   {path: "/category/:filterId", element: <span>Filter</span>},
   {path: "/contact-us", element: <ContactUs />},
   {path: "/about-us", element: <AboutUs />},
   {path: "/product/:productId", element: <ProductPage />},
   {path: "/blogs", element: <BlogPage />},
   {path: "/blog/:blogId", element: <Blog />},
   {
      path: "/panelAdmin",
      element: <PanelAdmin />,
      children: [
         {path: "", element: <HomePanel />},
         {path: "Users", element: <span>users</span>},
         {path: "Product", element: <ProductPanel />},
         {path: "Setting", element: <span>Setting</span>},
         {path: "Notification", element: <span>Notification</span>},
         {path: "Ticket", element: <span>Ticket</span>},
         {path: "Chart", element: <span>Chart</span>},
      ],
   },

   {path: "/*", element: <NotFound />},
];

export {routes};
