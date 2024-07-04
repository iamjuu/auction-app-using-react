import React from 'react';
import OtpPage from '../../components/Main/OtpPage'
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../instence/axiosinstance';

const Otp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    try {
      const datas = {
        otp1: values[0],
        otp2: values[1],
        otp3: values[2],
        otp4: values[3],
      };
      console.log(datas);
      try {
        const respones = await axiosInstance.post("/otp", datas);
        console.log(respones.data.TypeIs,'this is the type');
        if(respones.data.TypeIs=='User'){
          navigate('/login')
        }else if(respones.data.TypeIs=='Agent'){
          navigate('/login')
        }else{
          navigate('/otp')
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>

      <OtpPage  handleSubmit={handleSubmit} />
    </div>
  );
}

export default Otp;
