import LeftSide from '../../components/Home/LeftSideHide';
import Card from '../../components/Home/Card';
import RightSide from '../../components/Home/RightSide';

const Home = () => {
  return (
    <div>
        <div className='flex flex-col  md:flex-row justify-center items-center gap-20'>
        <LeftSide/>
        <Card/>
        <RightSide/>
        </div>
    </div>
  );
}

export default Home;
