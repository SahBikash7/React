import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

// react-router-dom is not the core part of react. It is the third-party library.

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Home,
  About,
  Contact,
  User,
  Github,
  gitHubInfoLoader,
} from "./components";

import Layout from "./Layout.jsx";

// There are two ways(basically syntax is different) for creating route:

// 1. First Way :
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

// 2. Second Way :
const router = createBrowserRouter(
  createRoutesFromElements(
    // The layout consists of <Header/> <Outlet/> and <Footer/> from which the header and footer are already imported and used in layout.jsx the outlet is the one which we pass the element inside our route.

    // At the top level we have layout and then we nested for our outlets depending upon our routes.

    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route
        // Loader does ur api-calls when u hover over that component whereas useEffect() does ur things when u click over the component

        // we can write the api calls within loader as below using callback within it :

        // loader={() => {
        //   // u can do api-calls or call-Database here too but not a great thing to do...
        // }}

        loader={gitHubInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* To make a router */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
