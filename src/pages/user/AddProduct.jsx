import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PropertyForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    propertyType: Yup.string().required('Property type is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      propertyType: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 max-w-md mx-auto bg-gray-100 rounded-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.propertyType}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" label="Select property type" />
          <option value="Lands" label="Lands" />
          <option value="Buildings" label="Buildings" />
          <option value="House" label="House" />
          <option value="Flat" label="Flat" />
        </select>
        {formik.touched.propertyType && formik.errors.propertyType ? (
          <div className="text-red-500 text-sm">{formik.errors.propertyType}</div>
        ) : null}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
