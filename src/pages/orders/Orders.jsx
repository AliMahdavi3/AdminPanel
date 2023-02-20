import React from "react";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div
      id="manage_orders_section"
      className="manage_orders_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت سفارشات</h4>
      <OrderTable />
    </div>
  );
};

export default Orders;
