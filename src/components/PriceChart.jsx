import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getCryptoHistory } from "../services/api";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

// Registrando componentes do Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function PriceChart({ cryptoId }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    loadChart(cryptoId);
  }, [cryptoId]);

  const loadChart = async (id) => {
    const data = await getCryptoHistory(id);

    const prices = data.prices;

    setChartData({
      labels: prices.map((p) =>
        new Date(p[0]).toLocaleDateString()
      ),
      datasets: [
        {
          label: "Preço",
          data: prices.map((p) => p[1]),
          borderColor: "cyan"
        }
      ]
    });
  };

  return chartData ? <Line data={chartData} /> : <p>Carregando...</p>;
}

export default PriceChart;