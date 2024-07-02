import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

const Admin = () => {
  return (
    <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />

    </Route>
  </Routes>
  );
}

export default Admin;


