import React from "react";
import { Routes, Route } from "react-router-dom";
import AgentLayout from "../layout/AgentLayout";
import AgentHome from '../pages/Agent/home';
import AddProperty from "../pages/Agent/AddProduct";
import ProfilePage from '../pages/Agent/profile';

const AgentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AgentLayout />}>
        <Route path="agenthome" element={<AgentHome />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="addproperty" element={<AddProperty />} />
      </Route>
    </Routes>
  );
}

export default AgentRoutes;
