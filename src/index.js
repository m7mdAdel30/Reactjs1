import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HTML from "./pages/html";
import CSS from "./pages/css";
import JavaScript from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <CSS />,
  },

  {
    path: "/javascript",
    element: <JavaScript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
