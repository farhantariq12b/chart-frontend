import React, { useEffect, useState } from "react";
import requestServices from "../../services/modules/chart";
import { Bar } from "react-chartjs-2";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Estimated Builds",
    },
  },
};

const StackBarChart = () => {
  const [ordersData, setOrdersData] = useState({ datasets: [] });

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const response = await requestServices.getEstimatedBuild();

      const estimatedBuilds = response.data.data;

      const data = {
        labels: [""],
        datasets: [
          {
            label: "SLS",
            data: [estimatedBuilds.SLS],
            backgroundColor: "rgb(224, 201, 47)",
          },
          {
            label: "MJF",
            data: [estimatedBuilds.MJF],
            backgroundColor: "rgb(53, 162, 235)",
          },
        ],
      };

      setOrdersData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <Bar options={options} data={ordersData} />;
};

export default StackBarChart;
