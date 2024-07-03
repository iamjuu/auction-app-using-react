import axiosInstance from '../../instence/axiosinstance'
import LoginForm from '../../components/Main/LoginForm'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate()
const[error,setError]=useState('')

const handleSubmit = async (data) => {
  try {
    console.log(data, 'data');
    const response = await axiosInstance.post('/login', data);
    const token =response.data.token;
    
  
  if(response.status ==200){
    response.data.role=='user' ? navigate('/'): navigate('/agent/agenthome')
    localStorage.setItem('jwt',token)
  }
      
   
  
  } catch (error) {
    if (error) {
      const errorMsg = error.response.data.message;
      setError(errorMsg);
    }
  }
};

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
      handleSubmit={ handleSubmit} error={error}/>
    </div>
  );
}
export default Login;
