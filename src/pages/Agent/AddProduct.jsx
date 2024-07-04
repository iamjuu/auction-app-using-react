import axiosInstance from "../../instence/axiosinstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    propertyname: '',
    minimumdata: '',
    images: '',
    Phone: '',
    Address: '',
    propertyType: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();    
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axiosInstance.post("/addproperty", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.status==200){
        navigate('/agent/agenthome')
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <h2 className="text-3xl">Add property</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[300px] sm:w-[700px] md:[900px] mt-10 lg:[1200px]"
        encType="multipart"
      >
        <div className="">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Enter your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="propertyname">Property Name</label>
            <input
              type="text"
              name="propertyname"
              id="propertyname"
              value={formData.propertyname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="minimumdata">Minimum Price</label>
            <input
              type="text"
              name="minimumdata"
              id="minimumdata"
              value={formData.minimumdata}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="images">Property Image</label>
            <input
              type="file"
              name="images"
              id="images"
              onChange={handleFileChange}
              className="border border-gray-300"
              multiple
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              name="Phone"
              id="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="Address"
              id="Address"
              value={formData.Address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" label="Select property type" />
              <option value="Buildings" label="Buildings" />
              <option value="House" label="House" />
              <option value="Flat" label="Flat" />
              <option value="car" label="car" />
              <option value="bike" label="bike" />
            </select>
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
