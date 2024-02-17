import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { App as About } from "about/about";
import Home from "../pages/Home";
import Photos from "../pages/Photos";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "photos",
        element: <Photos />
      },
    ]
  }
]);

export default routes;