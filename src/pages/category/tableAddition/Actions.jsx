import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Actions = ({ rowData }) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      {!params.categoryId ? (
        <i
          className="bi bi-diagram-3-fill fs-4 pointer fw-bold text-info mx-1 icons"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          onClick={() =>
            navigate(`/categories/${rowData.id}`, {
              state: {
                parentData: rowData,
              },
            })
          }
        ></i> 
      ) : null}

      <i
        className="bi bi-pencil-square fs-4 pointer fw-bold text-warning mx-1 icons"
        title="ویرایش دسته"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        data-bs-placement="top"
      ></i>
      <i
        className="bi bi-plus fs-4 pointer fw-bold text-success mx-1 icons"
        title="افزودن ویژگی"
        data-bs-placement="top"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_attr_modal"
      ></i>
      <i
        className="bi bi-x fs-4 pointer fw-bold text-danger mx-1 icons"
        title="حذف دسته"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
      ></i>
    </>
  );
};

export default Actions;
