import React from "react";
import { Header, Footer } from "./components";
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
import { Form } from "react-router-dom";

export default Layout;
