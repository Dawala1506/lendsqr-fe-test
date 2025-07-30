import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">
        <SideNav />
        <main className="layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
