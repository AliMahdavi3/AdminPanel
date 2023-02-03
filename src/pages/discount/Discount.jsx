import React from "react";
import AddDiscount from "./AddDiscount";
import DiscountTable from "./DiscountTable";

const Discount = () => {
  return (
    <div
      id="manage_discount_section"
      className="manage_discount_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت کد های تخفیف</h4>
      <DiscountTable />
    </div>
  );
};

export default Discount;
