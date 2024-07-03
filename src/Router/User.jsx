import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./privateRoter";
import Signup from "../pages/user/Signup";
import Otp from "../pages/user/Otp";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import Details from "../pages/user/Details";
import About from "../pages/user/About";
import Service from "../pages/user/Service";
import Contect from "../pages/user/Contect";
import UserLayout from "../layout/layout";
import Live from "../pages/user/live";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="otp" element={<Otp />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />  {/* Updated the path */}
        <Route path="about" element={<About />} />
        <Route 
          path="details" 
          element={
            <PrivateRouter>
              <Details />
            </PrivateRouter>
          } 
        />
        <Route path="contect" element={<Contect />} />
        <Route path="service" element={<Service />} />
        <Route path="live" element={<Live />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
