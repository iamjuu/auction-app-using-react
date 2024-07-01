import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'XYZ MOTORS',
      data: [
        {
          x: new Date('2024-05-01').getTime(),
          y: 1000000 // Sample data point for June 1, 2024
        },
         {
          x: new Date('2024-05-10').getTime(),
          y: 2000000 // Sample data point for June 1, 2024
        },
         {
          x: new Date('2024-05-15').getTime(),
          y: 1500000 // Sample data point for June 1, 2024
        },
        {
          x: new Date('2024-05-20').getTime(),
          y: 3000000 // Sample data point for June 1, 2024
        },
        {
          x: new Date('2024-05-30').getTime(),
          y: 2000000 // Sample data point for June 2, 2024
        },
        {
          x: new Date('2024-06-3').getTime(),
          y: 3500000 // Sample data point for June 3, 2024
        },
        // Add more data points as needed
      ]
    }
  ]);
  

  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    // Add your options configuration here
  });

  return (
    <div className='w-96  md:w-[700px]'  >
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
