import React from 'react';
import { Outlet } from "react-router-dom";
import Dashboard from '../pages/admin/Dashboard';
const AdminLayout = () => {
  return (
    <div>
      <Dashboard/>
      <Outlet/>
    </div>
  );
}

export default AdminLayout;
