import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Bg from '../../assets/main/handover.png';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../instence/axiosinstance'; 



const initialValues = {
  Name: '',
  email: '',
  password: '',
};

const options = [
  { value: "User", label: "User" },
  { value: "Agent", label: "Agent" }
];



const SignupForm = () => {
  const navigate = useNavigate();

  const [type, setType] = useState(options[0]);
  console.log(initialValues,'data');


 const  handleSubmit = async(values)=>{
  try {
    console.log(values,'data');
        const response = await axiosInstance.post('/signup',values)
       
        if(response.status==200){
          navigate('/otp');
          }else{
            navigate('/signup')
          }
  
      } catch (error) {
        console.error('There was an error in signup!', error);
      }
   
 }
  return (
    <div className='flex flex-col justify-center items-center bg-white p-8 rounded-md shadow-lg'>
      <div className='w-28 h-28'>
        <h1 className='text-5xl font-bold'>Signup</h1>
      </div>
      <div className='flex'>
        {/* Hide the image on small screens (sm) */}
        <div className="hidden sm:block">
          <img className='w-96' src={Bg} alt="" />
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit({ ...values, type: type.value })}
        >
          {({ errors, touched }) => (
            <Form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                  Type
                </label>
                <Select
                  options={options}
                  value={type}
                  onChange={(option) => setType(option)}
                  name="type"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <AiOutlineUser className="text-gray-500 mx-3" />
                  <Field
                    type="text"
                    id="Name"
                    name="Name"
                    className="bg-transparent w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                {touched.Name && errors.Name && (
                  <small className="text-red-500">{errors.Name}</small>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <HiOutlineMail className="text-gray-500 mx-3" />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-transparent w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                {touched.email && errors.email && (
                  <small className="text-red-500">{errors.email}</small>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <GoLock className="text-gray-500 mx-3" />
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="bg-transparent w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                {touched.password && errors.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               >
                Sign Up
              </button>

              <div className="mt-4 text-center">
                <span>Already have an account? </span>
                <Link to="/login" className="text-blue-500 hover:text-blue-700">
                  Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>  
  );
};

export default SignupForm;
