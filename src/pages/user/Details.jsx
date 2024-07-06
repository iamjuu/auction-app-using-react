import React from "react";
import { Link } from "react-router-dom"; 
import Bg1 from "../../assets/deatail/b2.jpg";
import Bg2 from "../../assets/deatail/b3.jpeg";
import Bg4 from "../../assets/deatail/b4.jpeg";
import Bg7 from "../../assets/deatail/b1.jpg";
import Gif from "../../assets/agent/output-onlinegiftools.gif";
import Clock from "../user/../user/clock";

const Details = () => {
  return (
    <>
      <div>
        <Clock />
      </div>
      <div className="flex flex-col mb-10 mt-10 gap-5">
        <div className=" justify-center  flex">
          <div className="   bg-black  rounded-lg md:w-[500px] rounded-lx lg:w-[700px] ">
            <img className="rounded-lg" src={Bg4} alt="" />
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <div className="w-44 h-44 rounded-lg overflow-hidden">
            <img
              src={Bg2}
              alt="pic1"
              className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-44 h-44 rounded-lg overflow-hidden">
            <img
              src={Bg1}
              alt="pic1"
              className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-44 h-44 rounded-lg overflow-hidden">
            <img
              src={Bg7}
              alt="pic2"
              className="w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        <div className=" flex justify-between    text-center p-2">
          <div className="    md:ml-[650px]">
            <p>price: 2,000,00</p>
            <p>place:kannur</p>
            <p>address: kannur beach road</p>
          </div>
          {/* message  */}
          <div className="">
            {" "}
            <Link to="/message">
            <button>
            <img className=" bg-transparent hover:scale-110 transition-opacity delay-200 mt-[-700px] w-24 sticky top-10" src={Gif} alt="" />
            </button>
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Details;
