import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Define the validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone number is required'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <h2 className='text-center'>Signup</h2>
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 mt-1">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          {...formik.getFieldProps('phone')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 mt-1">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
        <Link to="/login" className="text-blue-500 hover:text-blue-700 transition duration-300">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;