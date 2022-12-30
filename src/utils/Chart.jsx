import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "ابان",
    "اذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "نمودار فروش ماه",
        backgroundColor: [
            "#8a2ba2",
            "#0000ff",
            "#008080",
            "#008000",
            "#483D8B",
            "#E9967A",
            "#FFD700",
            "#4B0082",
            "#FF0000",
            "#00FF7F",
            "#F5DEB3",
            "#1E90FF",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [10, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170],
      },
    ],
  };
  return (
    <div className="chart">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
