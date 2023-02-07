import React from "react";
import { useNavigate } from "react-router-dom"

const Actions = ({ rowData, handleDeleteUser }) => {
  const navigation = useNavigate() 
  return (
    <>
      <i
        className="bi bi-pencil-square fs-4 pointer fw-bold text-warning mx-1 icons"
        title="ویرایش کاربر"
        onClick={()=>navigation('/user/add-user', {state:{userId:rowData.id}})}
      ></i>
      <i
        className="bi bi-x-circle-fill fs-4 pointer text-danger mx-1 icons"
        title="حذف کاربر"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        onClick={()=>handleDeleteUser(rowData)}
      ></i>
    </>
  );
};

export default Actions;
