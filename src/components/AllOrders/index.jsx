import React, { useEffect, useState } from "react";
import requestServices from "../../services/modules/chart";
import { Bar } from "react-chartjs-2";
import { OPEN_DUE_TECHNOLOGY } from "../../constants";
import { convertDataForChartJS } from "../../helpers/chart.helper";

const options = {
  plugins: {
    title: {
      display: true,
      text: "Open, due, late, very late orders by technology",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const AllOrders = () => {
  const [ordersData, setOrdersData] = useState({ datasets: [] });

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const response = await requestServices.getOpenDueData();

      const data = convertDataForChartJS(
        response.data.data,
        OPEN_DUE_TECHNOLOGY
      );
      setOrdersData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <Bar options={options} data={ordersData} />;
};

export default AllOrders;
