import React, { useContext } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "./common/components/sidebar";
import Navbar from "./common/components/navbar";
import ProfileMenu from "./common/components/navbar/profileMenu";
import { LayoutContext } from "./setup/states/AdminContext copy";

const Layout = () => {
  const { profileMenuEnable } = useContext(LayoutContext)
  return (
    <div className="Layout-container">
      {profileMenuEnable && <ProfileMenu />}
      <div className="top">
        <Navbar />
      </div>
      <div className="bottom">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
