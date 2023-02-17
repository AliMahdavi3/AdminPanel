import React from "react";
import ProductTable from "./ProductTable";

const Product = () => {
  return (
    <div
      id="manage_product_section"
      className="manage_product_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت محصولات</h4>
    <ProductTable/>
    </div>
  );
};

export default Product;
