import React from "react";
import { Routes, Route } from "react-router-dom";
import AgentLayout from "../layout/AgentLayout"; 
import AgentHome from '../pages/Agent/home';

const AgentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AgentLayout />}>
        <Route path="agenthome" element={<AgentHome />} />
      </Route>
    </Routes>
  );
}

export default AgentRoutes;
