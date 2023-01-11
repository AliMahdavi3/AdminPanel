import React from "react";
import CategoryContextContainer from "../../context/categoryContext";
import AddAttributes from "./AddAttributes";
import AddCategory from "./AddCategory";
import TableCategory from "./TableCategory";

const Category = () => {
  return (
    <>
      <CategoryContextContainer>
        <div
          id="manage_product_category"
          className="manage_product_category main_section container-fluid category-style"
        >
          <h4 className="text-center my-3 category-text">
            مدیریت دسته بندی محصولات
          </h4>
          <TableCategory />
          <AddAttributes />
        </div>
      </CategoryContextContainer>
    </>
  );
};

export default Category;
