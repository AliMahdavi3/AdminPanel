import React from "react";
import AddBrands from "./AddBrands";
import TableBrands from "./TableBrands";

const Brands = () => {
  return (
    <div
      id="manage_brand_section"
      className="manage_brand_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت برند ها</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir-ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4  d-flex flex-column align-items-end">
      <AddBrands/>
        </div>
      </div>
   <TableBrands/>
    </div>
  );
};

export default Brands;