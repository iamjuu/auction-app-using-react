import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from "../components/Admin/Dashboard/SideBar"
import Header from "../components/Admin/Dashboard/Header"
const AdminLayout = () => {
  return (
    <div>
      <Header/>
      <SideBar/>
      <Outlet/>

    </div>
  );
}

export default AdminLayout;
