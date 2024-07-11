import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AddBtn from "../../components/btn";
import Pic1 from "../../assets/main/boys.png";
import { FaRegUser } from "react-icons/fa6";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axiosInstance from "../../instence/axiosinstance";
import {  BsFillGearFill } from "react-icons/bs"; // Example icons from react-icons

const data = [
  { name: "Deal", value: 400 },
  { name: "Not Deal", value: 300 },
];
const COLORS = ["#0088FE", "#FF8042"];

const Home = () => {
  const [properties, setProperties] = useState([]);
  console.log(properties);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axiosInstance.get("/propertydetails");
        if (response.status == 200) {
          const data = response.data.PropertyDatas;
          setProperties(data);
        }
        console.log(properties, "properties data");
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };
    getDetails();
  }, []);




// delete btn alert
 function deleteuser(id){
  console.log(id,'property id');
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then( async(result) => {
    if (result.isConfirmed) {
      const response = await axiosInstance.post(`agent/userdelete?id=${id}`)
      console.log(response.data,'data gotted');

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      }
    })
}

  return (
    <div>
      <div className="justify-center flex flex-col bg-slate-300">
        <div className="h-14 items-center justify-around flex">
          <div>
            <Link to="/agent/addproperty">
              <AddBtn
                className="bg-blue-500 hover:bg-blue-800  font-bold py-2 px-4 rounded cursor-pointer"
                name={"Add property"}
              />
            </Link>
          </div>
          <div>
            {/* profile  */}

            <div className="flex items-center space-x-2">
              <Link to="/agent/profile">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <FaRegUser size={24} />
                </button>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <BsFillGearFill size={24} />
              </button>
            </div>

            <div>{/* <FaRegUser className='text-3xl' /> */}</div>
          </div>
        </div>

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-center">Image</th>
                  <th className="px-4 py-2 text-center">property name</th>

                  <th className="px-4 py-2 text-center">Phone</th>
                  <th className="px-4 py-2 text-center">Location</th>
                  <th className="px-4 py-2 text-center">Price</th>
                  <th className="px-4 py-2 text-center">Status</th>
                  <th className="px-4 py-2 text-center"></th>
                  <th className="px-4 py-2 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {properties.map((data, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 hover:bg-opacity-25"
                  >
                    <td className="px-4 py-2 text-center">
                      <img
                        src={"http://localhost:5000/" + data.images}
                        className="max-w-32 h-32"
                        alt=""
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      {data.propertyname}
                    </td>

                    <td className="px-4 py-2 text-center">{data.Phone}</td>
                    <td className="px-4 py-2 text-center">{data.Address}</td>
                    <td className="px-4 py-2 text-center">
                      {data.minimumdata}
                    </td>
                    <td className="px-4 py-2 text-center text-red-600">
                      not deal
                    </td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        edit
                      </button>{" "}
                    </td>
                    <td>
                    <button  onClick={()=>deleteuser(data._id)} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
  Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Repeat the row structure for other properties */}
              </tbody>
            </table>
          </div>

          {/* Pie Chart Section */}
          <div className="mt-1">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
