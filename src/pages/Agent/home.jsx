import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AddBtn from '../../components/btn';
import Pic1 from '../../assets/main/boys.png'
import { FaRegUser } from "react-icons/fa6";


const home = () => {
  return (
    <div>

        <div className=' justify-center  flex flex-col bg-slate-300'>


          <div  className='  h-14 items-center justify-around flex'>

         
  <div className=" ">
            <Link to="/addproperty">
              <AddBtn
                className="bg-blue-500  hover:bg-blue-800 text-white font-bold py-2 px-4 rounded cursor-pointer"
                name={"Add property"}
              />
            </Link>
          </div>
          <div>

            {/* profile  */}
            <div className=''>
            <  FaRegUser 
            className='text-3xl'/>

            </div>
          </div>
          </div>
        
            <div className="p-4">

      <div className="overflow-x-auto">
      <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-center">Image </th>
                <th className="px-4 py-2 text-center">Phone </th>
                <th className="px-4 py-2 text-center">Location </th>
                <th className="px-4 py-2 text-center">price </th>
                <th className="px-4 py-2 text-center">Status</th>
                <th className="px-4 py-2 text-center"> </th>
                <th className="px-4 py-2 text-center"> </th>
              </tr>
            </thead>
            <tbody>
                <tr
                  className="hover:bg-gray-100 hover:bg-opacity-25"
                >
                  <td className="px-4 py-2 text-center"><img src={Pic1} className="max-w-32 h-32" alt="" /></td>
                  <td className="px-4 py-2 text-center">7025715250</td>
                  
                  <td className="px-4 py-2 text-center">kannur,kerala</td>
                  <td className="px-4 py-2 text-center">100,000</td>
                  <td className="px-4 py-2 text-center"> deal </td>
                  <td className="">
                    
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white  px-3 py-1 rounded-md"
                    >
                      edit
                    </button>
                  </td>

                  <td><button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                    >
                      Delete 
                    </button> </td>
                  
                </tr>

                {/* ********************** */}
                <tr
                  className="hover:bg-gray-100 hover:bg-opacity-25"
                >
                  <td className="px-4 py-2 text-center"><img src={Pic1} className="max-w-32 h-32" alt="" /></td>
                  <td className="px-4 py-2 text-center">7025715250</td>
                  
                  <td className="px-4 py-2 text-center">kozhikode,kerala</td>
                  <td className="px-4 py-2 text-center">300,000</td>
                  <td className="px-4 py-2 text-center">  not deal </td>
                  <td className="">
                    
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white  px-3 py-1 rounded-md"
                    >
                      edit
                    </button>
                  </td>

                  <td><button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                    >
                      Delete 
                    </button> </td>
                  
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


