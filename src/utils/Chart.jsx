// import React, { useEffect, useState } from "react";
// import Chart from "chart.js/auto";
// import { Bar } from "react-chartjs-2";
// import { getThisYearOrdersService } from "../services/orders";
// import jMoment from "jalali-moment";
// import SpinnerLoad from "../components/SpinnerLoad";

// const labels = [
//   "فروردین",
//   "اردیبهشت",
//   "خرداد",
//   "تیر",
//   "مرداد",
//   "شهریور",
//   "مهر",
//   "ابان",
//   "اذر",
//   "دی",
//   "بهمن",
//   "اسفند",
// ];
// const BarChart = () => {
//   const [loading, setLoading] = useState(false);
  
//   const handleGetChartInfo = async () => {
//     setLoading(true);
//     const res = getThisYearOrdersService();
//     setLoading(false);
//     if (res.status === 200) {
//       const monthsOrderArr = [];
//       const now = jMoment();
//       let thisMonth = now.jMoment();
//       for (let i = 0; i < 12; i++) {
//         if (thisMonth == -1) thisMonth = 11;
//         monthsOrderArr.push({ month: thisMonth, amount: 0 });
//         thisMonth--;
//       }
//       const orders = res.data.data;
//       for (const order of orders) {
//         const moment = jMoment(order.pay_at);
//         const monthIndex = moment.jMonth();
//         const index = monthsOrderArr.findIndex((o) => o.month == monthIndex);
//         monthsOrderArr[index].amount =
//           monthsOrderArr[index].amount + parseInt(order.pay_amount);
//       }

//       monthsOrderArr.reverse();
//       let datapoint = (
//         monthsOrderArr.map((o) => labels[o.month]),
//         monthsOrderArr.map((o) => o.amount / 1000000)
//       );
//     }
//   };

//   useEffect(() => {
//     handleGetChartInfo();
//   }, []);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "نمودار فروش ماه",
//         backgroundColor: [
//           "#549eb9",
//           "#0000ff",
//           "#008080",
//           "#008000",
//           "#483D8B",
//           "#E9967A",
//           "#FFD700",
//           "#4B0082",
//           "#FF0000",
//           "#00FF7F",
//           "#F5DEB3",
//           "#1E90FF",
//         ],
//         borderColor: "rgb(255, 99, 132)",
//         data: data,
//       },
//     ],
//   };
//   return (
//     <>
//       {loading && <SpinnerLoad colorClass={"text-primary"} />}
//       <div className={`chart ${loading && "d-none"}`}>
//         <Bar data={data} />
//       </div>
//     </>
//   );
// };

// export default BarChart;
