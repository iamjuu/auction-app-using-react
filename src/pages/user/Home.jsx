import { useEffect, useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri"; // Corrected the icon import
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Card from "../../components/Home/Card";
import Caroseal from "../../components/caroseal/Carseal";
import axiosInstance from "../../instence/axiosinstance";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [card, setCard] = useState([]);

  async function userCard() {
    try {
      const response = await axiosInstance.get('/usercard');
      setCard(response.data.userCard);
     
    } catch (error) {
      console.log(error, ' error in looping card details in user home');
    }
  }
  console.log(card);
  useEffect(() => {
    userCard();
  }, []);

  return (
    <div>
      <div className="flex justify-center h-10">
        <div className="w-44">
          <div className="flex justify-center items-center">
            <button aria-label="Toggle menu" className="-ml-64" onClick={() => setMenu(!menu)}>
              <RiMenuFoldFill className="md:hidden text-4xl" />
            </button>
            {menu && (
              <ul className="bg-gray-100 mt-1 w-36 flex flex-col items-center relative z-10">
                {['house', 'land', 'flat', 'car', 'bike', 'laptop'].map((item) => (
                  <li key={item} className="hover:bg-blue-200 w-full text-center py-2">
                    <Link to={`/${item}`} className="block w-full">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="md:flex gap-10">
            {['house', 'land', 'flat', 'car', 'bike', 'laptop'].map((item) => (
              <li key={item} className="p-2 rounded">
                <Link
                  to={`/${item}`}
                  className="block hover:text-blue-600 hover:font-bold transition duration-300 ease-in-out"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Caroseal />
      </div>

      <div className="mt-5 flex items-center justify-center gap-5 flex-wrap">
      {card.map((item)=>(

        <div className="flex flex-wrap gap-3">
                    <Card data={item}  />
        </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
