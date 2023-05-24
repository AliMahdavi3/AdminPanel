import React from "react";
import { useNavigate } from "react-router-dom"

const Actions = ({ rowData, handleDeleteProducts }) => {
  const navigation = useNavigate() 
  return (
    <>
      <i
        className="bi bi-pencil-square fs-4 pointer fw-bold text-warning mx-1 icons"
        title="ویرایش دسته"
        onClick={()=>navigation('/product/add-product', {state:{productToEdit:rowData}})}
      ></i>
      <i
        className="bi bi-receipt fs-4 pointer fw-bold text-info mx-1 icons"
        title="زیرمجموعه"
        data-bs-toggle="tooltip"
        onClick={()=>navigation('/product/set-attr', {state:{selectedProduct:rowData}})}

      ></i>

        <i
        className="bi bi-image-fill fs-4 pointer fw-bold text-success mx-1 icons"
        title="تصاویر"
        data-bs-toggle="tooltip"
        onClick={()=>navigation('/product/gallery', {state:{selectedProduct:rowData}})}
      ></i>

      <i
        className="bi bi-x-circle-fill fs-4 pointer text-danger mx-1 icons"
        title="حذف دسته"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>handleDeleteProducts(rowData)}
      ></i>

    
    </>
  );
};

export default Actions;
