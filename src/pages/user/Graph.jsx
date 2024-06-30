import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true
      }
    }
  };

  return (
    <div className="w-44 max-w-md mx-auto">
      <Line ref={chartRef} data={data} options={options} key="sales-line-chart" />
    </div>
  );
};

export default LineChart;
