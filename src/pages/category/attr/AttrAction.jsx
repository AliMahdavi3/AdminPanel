import React from "react";

const AttrAction = ({rowData, attrToEdit, setAttrToEdit, handleDeleteCategoryAttr}) => {
  return (
    <div className={`text-center ${attrToEdit && attrToEdit.id == rowData.id ? "shadow_alert" : ""}`}>
      <i
        className="bi bi-pencil-square fs-4 pointer fw-bold text-warning mx-1 icons"
        title="ویرایش ویژگی"
        data-bs-placement="top"
        onClick={()=>setAttrToEdit(rowData)}
      ></i>
      <i
        className="bi bi-x fs-4 pointer fw-bold text-danger mx-1 icons"
        title="حذف ویژگی"
        onClick={()=>handleDeleteCategoryAttr(rowData)}
      ></i>
    </div>
  );
};

export default AttrAction;
