import { useFormik } from "formik";
import * as Yup from "yup";

const PropertyForm = () => {
  // step 1
  const validationSchema = Yup.object({
    propertyimage:Yup.string().required('add image of your property please'),
    TypeOfLand: Yup.string().required("type of land is required"),
    Address: Yup.string().required("address required"),
    Phone: Yup.string().required("phone number is requiure"),
    Price: Yup.string().required("Price is required"),
    propertyname: Yup.string().required("property Name is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    propertyType: Yup.string().required("Property type is required"),
  });

  const formik = useFormik({
    // step2
    initialValues: {
      propertyimage:'',
      Address: "",
      Phone: "",
      Price: "",
      name: "",
      email: "",
      propertyType: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <div className="flex items-center flex-col justify-center ">
<h2 className="text-3xl">Add property</h2>
      <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center w-[300px] sm:w-[700px] md:[900px] mt-10 lg:[1200px]"
    >
      <div className="">

      
      <div className="mb-4 ">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="  mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="propertyname">property Name</label>
        <input
          type="text"
          name="propertyname"
          id="propertyname"
          onChange={formik.values.propertyname}
          onBlur={formik.handleBlur}
          value={formik.values.propertyname}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.propertyname && formik.errors.propertyname ? (
          <div className="text-red-500 text-sm">
            {formik.errors.propertyname}
          </div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="Price"> Minimum Price</label>
        <input
          type="text"
          name="Price"
          id="Price"
          onChange={formik.values.Price}
          onBlur={formik.handleBlur}
          value={formik.values.Price}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.Price && formik.errors.Price ? (
          <div className="text-red-500 text-sm">{formik.errors.Price}</div>
        ) : null}
      </div>
      <div className="mb-4">
        
        <input type="file"
         name="propertyimage"
          id="propertyimage"
          onChange={formik.values.propertyimage}
          onBlur={formik.handleBlur}
          value={formik.values.propertyimage}
          className='border border-gray-300'
           />
      </div>

      <div className="mb-4">
        <label htmlFor="Phone">Phone</label>
        <input
          type="text"
          name="Phone"
          id="Phone"
          onChange={formik.values.Phone}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.Phone && formik.errors.Phone ? (
          <div className="text-red-500 text-sm">{formik.errors.Phone}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="Phone">Address</label>
        <input
          type="text"
          name="Address"
          id="Address"
          onChange={formik.values.Address}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.Address && formik.errors.Address ? (
          <div className="text-red-500 text-sm">{formik.errors.Address}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-gray-700"
        >
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
          <option value="Buildings" label="Buildings" />
          <option value="House" label="House" />
          <option value="Flat" label="Flat" />
        </select>
        {formik.touched.propertyType && formik.errors.propertyType ? (
          <div className="text-red-500 text-sm">
            {formik.errors.propertyType}
          </div>
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
      </div>
    </form>
    </div>

  );
};

export default PropertyForm;
