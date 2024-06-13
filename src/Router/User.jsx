import { Routes, Route } from "react-router-dom";

import Signup from "../pages/user/Signup";
import Otp from "../pages/user/Otp";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import AddProperty from "../pages/user/AddProduct";
import Details from "../pages/user/Details";
import About from "../pages/user/About";
import Service from "../pages/user/Service";
import Contect from "../pages/user/Contect";
import UserLayout from "../layout/layout";
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<Otp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/service" element={<Service />} />
        <Route path="AddProperty" element={<AddProperty />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
