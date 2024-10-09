import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceChart = ({ performanceData }) => {
  const data = {
    labels: performanceData.map(item => item.date),
    datasets: [
      {
        label: 'أداء المحفظة',
        data: performanceData.map(item => item.value),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="performance-chart">
      <h3>أداء المحفظة</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;