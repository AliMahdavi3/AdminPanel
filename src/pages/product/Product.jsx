import React from "react";
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";
import SetAttribute from "./SetAttribute";

const Product = () => {
  return (
    <div
      id="manage_product_section"
      className="manage_product_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت محصولات</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control dir-ltr text-start"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="input-group-text search-box">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    <AddProduct/>
        
        </div>
      </div>
    <ProductTable/>
    <SetAttribute/>
    </div>
  );
};

export default Product;
