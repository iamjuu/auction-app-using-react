import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AddBtn from '../../components/btn';


const home = () => {
  return (
    <div>

        <div className=' justify-center  flex flex-col bg-slate-300'>
  <div className=" py-3">
            <Link to="/addproperty">
              <AddBtn
                className="bg-blue-800 text-white font-bold py-2 px-4 rounded cursor-pointer"
                name={"Add property"}
              />
            </Link>
          </div>
        
            <div className="p-4">

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 border-b">Image</th>
              <th className="text-left py-2 px-4 border-b">Price</th>
              <th className="text-left py-2 px-4 border-b">Address</th>
              <th className="text-left py-2 px-4 border-b">Status</th>
              <th className="text-left py-2 px-4 border-b">Edit</th>
              <th className="text-left py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-10 px-10 border-b">John Doe</td>
              <td className="py-10 px-10 border-b">28</td>
              <td className="py-10 px-10 border-b">New York</td>
              <td className="py-10 px-10 border-b">Software Developer</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-10 px-10 border-b">Jane Smith</td>
              <td className="py-10 px-10 border-b">34</td>
              <td className="py-10 px-10 border-b">Los Angeles</td>
              <td className="py-10 px-10 border-b">Graphic Designer</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-10 px-10 border-b">Emily Johnson</td>
              <td className="py-10 px-10 border-b">25</td>
              <td className="py-10 px-10 border-b">Chicago</td>
              <td className="py-10 px-10 border-b">Data Analyst</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-10 px-10 border-b">Michael Brown</td>
              <td className="py-10 px-10 border-b">30</td>
              <td className="py-10 px-10 border-b">Houston</td>
              <td className="py-10 px-10 border-b">Project Manager</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        </div>
      
    </div>
  );
}

export default home;


