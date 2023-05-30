import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const EmotionCircleChart = ({ sentimentCounter }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: [
        `happy${sentimentCounter.good}`,
        `sad${sentimentCounter.bad}`,
        `natural${sentimentCounter.natural}`,
      ],
      datasets: [
        {
          data: [
            sentimentCounter.good,
            sentimentCounter.bad,
            sentimentCounter.natural,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue("--green-500"),
            documentStyle.getPropertyValue("--red-500"),
            documentStyle.getPropertyValue("--yellow-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--green-400"),
            documentStyle.getPropertyValue("--red-400"),
            documentStyle.getPropertyValue("--yellow-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="w-full h-full grid place-content-center">
      <Chart
        type="pie"
        data={chartData}
        options={chartOptions}
        className="w-[350px]"
      />

      <footer className="mt-4">
        <h3 className="text-main_dark font-medium text-xl text-center">Satisfaction Percentages</h3>
      </footer>
    </div>
  );
};

export default EmotionCircleChart;
