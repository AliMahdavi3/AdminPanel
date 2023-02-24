import React from "react";
import Cards from "./Cards";
import ProductTable from "./ProductTable";
import SaleChart from "./SaleChart";

const Dashboard = () => {
  return (
    <div className="container-fluid ">
      <div className="row dashboard-con">
        <Cards/>
      </div>

      <div className="row">
       <ProductTable/>

        <div className="col-12 col-md-6 d-flex mt-3 justify-content-center align-items-center">
          <SaleChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
