import axiosInstance from '../../instence/axiosinstance'
import LoginForm from '../../components/Main/LoginForm'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const  handleSubmit= async(data)=>{
    try {
      const response = await axiosInstance.post('/signup',data)
      console.log(data,'data');
      console.log(response,'front data');
      navigate('/');
    } catch (error) {
      console.error('There was an error login!', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
      handleSubmit={ handleSubmit}/>
    </div>
  );
}
export default Login;
