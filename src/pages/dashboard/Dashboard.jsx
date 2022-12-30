import React from "react";
import BarChart from "../../utils/Chart";
import Card from "./Card";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  return (
    <div className="container-fluid ">
      <div className="row dashboard-con">
        <Card
          currentValue={7}
          title="سبد های خرید امروز"
          desc="سبد های خرید مانده امروز"
          icon="bi bi-basket"
          lastWeekValue={13}
          lastMonthValue={18}
        />
        <Card
          currentValue={5}
          title="سفارشات مانده امروز"
          desc="سفارشات معلق و فاقد پرداختی"
          icon="bi bi-truck"
          lastWeekValue={9}
          lastMonthValue={16}
        />
        <Card
          currentValue={45}
          title="سفارشات امروز"
          desc="سفارشات کامل و دارای پرداختی"
          icon="bi bi-shop"
          lastWeekValue={263}
          lastMonthValue={1038}
        />

        <Card
          currentValue={"1,500,000"}
          title="درآمد امروز"
          desc="جمع مبالغ پرداختی (تومان)"
          icon="bi bi-cash"
          lastWeekValue={"6,380,000"}
          lastMonthValue={"22,480,000"}
        />
      </div>

      <div className="row">
       <ProductTable/>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
