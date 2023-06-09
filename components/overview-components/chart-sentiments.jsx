import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const ChartSentiments = ({ sentimentCounter }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["good", "bad", "natural"],
      datasets: [
        {
          label: "feedbacks",
          data: [
            sentimentCounter.good,
            sentimentCounter.bad,
            sentimentCounter.natural,
          ],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: [
            "rgb(75, 192, 192)",
            "rgb(255, 159, 64)",
            "rgb(54, 162, 235)",
          ],
          borderWidth: 1,
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

    setChartData(data);
    setChartOptions(options);
  }, [sentimentCounter]);
  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartSentiments;
