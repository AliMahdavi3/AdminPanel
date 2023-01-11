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
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
       <AddDiscount/>
        </div>
      </div>
   <DiscountTable/>
    </div>
  );
};

export default Discount;
