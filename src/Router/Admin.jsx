import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Liveauction from "../pages/admin/LiveAuction"
import User from "../pages/admin/UserList"
import Graph from "../pages/admin/GraphPage"
import Message from "../pages/admin/Message"
import Profile from "../pages/admin/Profile"
const Admin = () => {
  return (
    <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="liveauctions" element={<Liveauction />}/>
      <Route path="userlist" element={<User />}/>
      <Route path="gragh" element={<Graph />}/>
      <Route path="Messages" element={< Message/>}/>
      <Route path="profile" element={<Profile/>}/>
      </Route>
  </Routes>
  );
}

export default Admin;


