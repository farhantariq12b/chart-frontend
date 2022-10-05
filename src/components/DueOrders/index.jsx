import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import requestServices from "../../services/modules/chart";
import { convertDataByGettingDynamicLabel } from "../../helpers/chart.helper";

const options = {
  plugins: {
    title: {
      display: true,
      text: "Orders Due",
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

const DueOrders = () => {
  const [ordersData, setOrdersData] = useState({ datasets: [] });

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const response = await requestServices.getWeeklyDueOrders();

      const data = convertDataByGettingDynamicLabel(
        response.data.data,
        "date",
        "orders"
      );
      setOrdersData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <Bar options={options} data={ordersData} />;
};

export default DueOrders;
