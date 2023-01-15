import React from "react";

const Actions = ({rowData, setBrandToEdit, handleDeleteBrands}) => {
  return (
    <>
      <i
        className="bi bi-pencil-square fs-4 text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش برند"
        data-bs-toggle="modal"
        data-bs-placement="top"
        data-bs-target="#add_brand_modal"
        onClick={()=>setBrandToEdit(rowData)}
      ></i>
      <i
        className="bi bi-x fs-4 text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف برند"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>handleDeleteBrands(rowData)}
      ></i>
    </>
  );
};

export default Actions;
