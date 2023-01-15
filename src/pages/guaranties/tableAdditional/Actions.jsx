import React from "react";

const Actions = ({ rowData, handleDeleteGuarantee, setGuaranteeToEdit }) => {
  return (
    <>
      <i
        className="bi bi-pencil-square fs-4 text-warning mx-1 pointer"
        title="ویرایش گارانتی"
        data-bs-toggle="modal"
        data-bs-placement="top"
        data-bs-target="#add_guarantee_modal"
        onClick={()=>setGuaranteeToEdit(rowData)}
        
      ></i>
      <i
        className="bi bi-x fs-4 text-danger mx-1 pointer"
        title="حذف گارانتی"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>handleDeleteGuarantee(rowData)}
      ></i>
    </>
  );
};

export default Actions;
