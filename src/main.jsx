import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/pages/About.jsx";
import Mainpage from "./component/Layout/Mainpage.jsx";
import { element } from "prop-types";
import Layout from "./component/Layout/Layout.jsx";
import Skills from "./component/pages/Skills.jsx";
import Projects from "./component/pages/Projects.jsx";
import Contact from "./component/pages/Contact.jsx";
const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Mainpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
