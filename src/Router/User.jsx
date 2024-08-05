import { Routes, Route } from "react-router-dom";
import Signup from "../pages/user/Signup";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Service from "../pages/user/Service";
import Contect from "../pages/user/Contect";
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="contect" element={<Contect />} />
        <Route path="service" element={<Service />} />
    </Routes>
  );
};

export default UserRoutes;
