import React from 'react';
import Header from '../../components/Admin/Dashboard/Header'
import SideBar from '../../components/Admin/Dashboard/SideBar';

const Dashboard = () => {
  return (
<div  className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>

      <Header/>
      <SideBar/>
</div>
      
  );
}

export default Dashboard;
