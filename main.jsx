import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./styles/index.css";
import "./styles/App.css";
import {BrowserRouter} from "react-router-dom";
console.log("object");
ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
