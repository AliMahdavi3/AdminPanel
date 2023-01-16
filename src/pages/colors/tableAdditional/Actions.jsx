import React from "react";

const Actions = ({rowData, handleDeleteColors, setColorToEdit}) => {
  return (
    <>
      <i
        className="bi bi-pencil-square fs-4 text-warning mx-1 pointer"
        title="ویرایش رنگ"
        data-bs-toggle="modal"
        data-bs-placement="top"
        data-bs-target="#add_color_modal"
        onClick={()=>setColorToEdit(rowData)}
      ></i>
      <i
        className="bi bi-x fs-4 text-danger mx-1 pointer"
        title="حذف رنگ"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>handleDeleteColors(rowData)}
      ></i>
    </>
  );
};

export default Actions;
