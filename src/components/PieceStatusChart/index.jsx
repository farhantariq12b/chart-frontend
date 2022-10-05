import React, { useEffect, useState } from "react";
import requestServices from "../../services/modules/chart";
import { Bar } from "react-chartjs-2";
import { convertDataByGettingDynamicLabel } from "../../helpers/chart.helper";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Status - Pieces",
    },
  },
};

const PieceStatusChart = () => {
  const [ordersData, setOrdersData] = useState({ datasets: [] });

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const response = await requestServices.getPiecesStatus();

      const data = convertDataByGettingDynamicLabel(
        response.data.data,
        "status",
        "countsByTechnology"
      );
      setOrdersData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <Bar options={options} data={ordersData} />;
};

export default PieceStatusChart;
