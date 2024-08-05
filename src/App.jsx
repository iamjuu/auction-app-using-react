import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserRoutes from '../src/Router/User';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
