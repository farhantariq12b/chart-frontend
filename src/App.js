import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AllOrders from "./components/AllOrders";
import DueOrders from "./components/DueOrders";
import PieceStatusChart from "./components/PieceStatusChart";
import StackBarChart from "./components/StackBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="App">
        <div style={{ width: "50%" }}>
          <div className="chart">
            <AllOrders />
          </div>
          <div className="chart">
            <DueOrders />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="chart">
            <PieceStatusChart />
          </div>
          <div className="chart">
            <StackBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
