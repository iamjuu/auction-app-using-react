import { Link } from "react-router-dom";
const Card = () => {
  return (

    <Link to={'/details'}>

    
    <div className=" flex  justify-center items-end w-96 h-56 mt-3 bg-red-100">
   <button className="  hover:bg-blue-200  text-black font-bold py-1 px-5 rounded-full"> More </button>
   </div>
   </Link>
  )
}

export default Card;
