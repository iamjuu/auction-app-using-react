import { Routes, Route } from "react-router-dom";

import Signup from '../pages/user/Signup'
import Login from '../pages/user/Login'
import Home from '../pages/user/Home'
import AddProperty from '../pages/user/AddProduct'
import Details from "../pages/user/Details";
const UserRoutes = () => {
  return (
      <Routes>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="AddProperty" element={<AddProperty/>}/>

      </Routes>

  );
}

export default UserRoutes;
