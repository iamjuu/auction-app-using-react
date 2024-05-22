import { Routes, Route } from "react-router-dom";

import Signup from '../pages/user/Signup'
import Login from '../pages/user/Login'
import Home from '../pages/user/Home'
const UserRoutes = () => {
  return (
      <Routes>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Home' element={<Home/>}/>

      </Routes>

  );
}

export default UserRoutes;
