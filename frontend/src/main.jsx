import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sighup from "./components/Sighnup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Userhome from "./components//User/Userhome.jsx";
import Book_service from "./components/User/Book_service.jsx";
import Update from "./components/User/Update.jsx";
import Contactus from "./components/User/Contactus.jsx";
import Aboutus from "./components/User/Aboutus.jsx";
const routes = createBrowserRouter([
  { path: "/", element: <Login></Login> },
  { path: "/signin", element: <Sighup></Sighup> },
  { path: "/userhome" , element:<Userhome></Userhome>},
  { path: "/book_service" , element:<Book_service></Book_service>},
  { path: "/update", element:<Update></Update>},
  { path: "/contactus", element:<Contactus></Contactus>},
  { path: "/aboutus" , element:<Aboutus></Aboutus>}
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
