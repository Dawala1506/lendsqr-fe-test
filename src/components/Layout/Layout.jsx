// src/components/Layout/Layout.jsx
import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const Layout = ({ activeMenuItem = "Dashboard" }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">
        <SideNav activeItem={activeMenuItem} />
        <main className="layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
