import SignupForm from '../../components/Main/SignupForm';
import axiosInstance from '../../instence/axiosinstance'; 
import { useNavigate } from 'react-router-dom';

function UserSignup() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/signup',data)
      console.log(response.data);
      if(response.status==200){
        navigate('/otp');
        }else{
          navigate('/signup')
        }

    } catch (error) {
      console.error('There was an error in signup!', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default UserSignup;
