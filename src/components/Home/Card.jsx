import React from 'react'
import { Link } from "react-router-dom";

const Card = ({ CardData }) => {
  console.log(CardData, 'data from backend');

  return (
    <>
      {CardData.map((data) => (
        <Link to="/details" className="block mb-8" key={data._id}>
          <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg md:max-w-sm">
          {data.images.map((image, index) => (

                <img key={index} src={image} alt='image' />
              ))}
            <div className="p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
               {data.propertyname}
              </h5>
              <p>${data.minimumdata}</p>
            </div> 
            <div className="absolute top-4 right-4"></div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
