import { useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri"; // Corrected the icon import
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Card from '../../components/Home/Card'
import Caroseal from '../../components/caroseal/Carseal'
const Home = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>      <div className="flex items-center justify-center  h-10">
      <div className="w-44">
        <div className="flex justify-center items-center">
          <button onClick={() => setMenu(!menu)}>
            <RiMenuFoldFill className="md:hidden text-4xl" />
          </button>
          {menu && (
            <ul className="bg-gray-100 mt-44 w-36 flex flex-col items-center absolute">
              <li className="hover:bg-blue-200 w-full text-center py-2">
                <Link to="/house" className="block w-full">House</Link>
              </li>
              <li className="hover:bg-blue-200 w-full text-center py-2">
                <Link to="/land" className="block w-full">Land</Link>
              </li>
              <li className="hover:bg-blue-200 w-full text-center py-2">
                <Link to="/flat" className="block w-full">Flat</Link>
              </li>
              <li className="hover:bg-blue-200 w-full text-center py-2">
                <Link to="/car" className="block w-full">Car</Link>
              </li>
              <li className="hover:bg-blue-200 w-full text-center py-2">
                <Link to="/bike" className="block w-full">Bike</Link>
              </li>
              <li className="hover:bg-blue-200 w-full text-center py-2">
                <Link to="/laptop" className="block w-full">Laptop</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Static menu for larger screens */}
      <div className="hidden md:flex">
        <ul className="md:flex gap-10">
          <li className="hover:bg-blue-200 p-2 rounded">
            <Link to="/house" className="block">House</Link>
          </li>
          <li className="hover:bg-blue-200 p-2 rounded">
            <Link to="/land" className="block">Land</Link>
          </li>
          <li className="hover:bg-blue-200 p-2 rounded">
            <Link to="/flat" className="block">Flat</Link>
          </li>
          <li className="hover:bg-blue-200 p-2 rounded">
            <Link to="/car" className="block">Car</Link>
          </li>
          <li className="hover:bg-blue-200 p-2 rounded">
            <Link to="/bike" className="block">Bike</Link>
          </li>
          <li className="hover:bg-blue-200 p-2 rounded">
            <Link to="/laptop" className="block">Laptop</Link>
          </li>
        </ul>
      </div>
    </div>
    {/* caroseal   */}
   <div>  

    <Caroseal/>
   </div>
   {/* card   */}
<div className=" mt-5  items-center justify-center  flex gap-5 flex-wrap">
  <Card/>
  <Card/>
  <Card/>
  <Card/>

</div>

    </div>


  );
};

export default Home;
