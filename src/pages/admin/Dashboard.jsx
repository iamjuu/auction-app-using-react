import React from "react";
import Box from "../../components/Admin/Dashboard/Box";
import UserGragh from "../admin/GraphPage";
const Dashboard = () => {
  return (
    <>
      <div className="   flex flex-col justify-center items-center  ">
        <div className="  mt-20 ml-16 justify-center   flex flex-wrap  gap-4    sm:ml-64 ">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        {/* section 2 for gragh  */}

        <div className="    sm:mt-16   flex justify-evenly">
        <div className="flex  gap- flex-wrap  sm:ml-64">
          <UserGragh />
          <UserGragh />

        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
