import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserRoutes from '../src/Router/User';
import AgentRoutes from '../src/Router/Agent'; // Corrected the import name
import AdminRoutes from '../src/Router/Admin'; // Uncomment when AdminRoutes is ready
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/agent/*" element={<AgentRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
