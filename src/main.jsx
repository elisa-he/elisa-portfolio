import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Work from "./page/Work";
import Contact from "./page/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
