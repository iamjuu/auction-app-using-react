import React from 'react';
import SignupForm from '../../components/Main/SignupForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserSignup() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', data);
      navigate('/login');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default UserSignup;
