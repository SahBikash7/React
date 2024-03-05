import React from "react";
import { Header, Footer } from "./components";

// We want to pass the content between header and footer dynamically so we use <Outlet/>
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
