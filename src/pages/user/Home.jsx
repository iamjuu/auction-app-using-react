import Header from '../../components/Header/Header'
import LeftSide from '../../components/Home/LeftSideHide';
import Card from '../../components/Home/Card';
import RightSide from '../../components/Home/RightSide';

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='flex gap-20'>
        <LeftSide/>
        <Card/>
        <RightSide/>
        </div>
    </div>
  );
}

export default Home;
