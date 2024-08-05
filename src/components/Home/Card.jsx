import React from 'react';
import { Link } from 'react-router-dom';
import B1 from '../../assets/deatail/b1.jpg'

const Card = ({ data }) => {
  console.log(data, 'data');
  const { images, name, minimumdata } = data;
  console.log(images[0].path,'asdfgfhg');

  return (
    <Link to="/details" className="block mb-8">
      <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg md:max-w-sm">
        {images.map((item, index) => {
          const imagePath = item.path || `${item.destination}/${item.originalname}`;
          return (
            <img
              key={index}
              src={B1}
              alt={`image ${index}`}
              className="w-full h-auto"
            />
          );
        })}
        <div className="p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            <p>{name}</p>
          </h5>
          <p>{minimumdata}</p>
        </div>
        <div className="absolute top-4 right-4"></div>
      </div>
    </Link>
  );
}

export default Card;
