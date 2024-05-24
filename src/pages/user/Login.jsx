import React from 'react';
import axios from 'axios';
import axiosInstance from '../../instence/axiosinstance'
import LoginForm from '../../components/Main/LoginForm'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const  handleSubmit= async(Data)=>{

    try {
      const response = axiosInstance.post('/login',Data)
      console.log(response,'login response');
      navigate('/Home')
    } catch (error) {
      console.log(error,'error in login post');
      
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
      handleSubmit={ handleSubmit}/>
    </div>
  );
}
export default Login;
