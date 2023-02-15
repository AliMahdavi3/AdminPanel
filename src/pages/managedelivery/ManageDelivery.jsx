import React from "react";
import ManageDTable from "./ManageDTable";

const ManageDelivery = () => {
  return (
    <div
      id="manage_deliveries_section"
       className="manage_deliveries_section main_section container-fluid category-style">
        <h4 className="text-center my-3 category-text">مدیریت  نحوه ارسال</h4>
          <ManageDTable />
    </div>
  );
};

export default ManageDelivery;
