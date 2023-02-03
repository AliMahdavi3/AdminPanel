import React from "react";
import {useNavigate} from 'react-router-dom'
const Actions = ({rowData, handleDeleteDiscount}) => {
  const navigate = useNavigate()
  return (
    <>
      <i
        className="bi bi-pencil-square text-warning mx-1  pointer fs-3"
        title="ویرایش کد تخفیف"
        onClick={()=>navigate('/discounts/add-discount-code', {state:{discountToEdit:rowData}})}
      ></i>

      <i
        className="bi bi-x text-danger mx-1 fs-3 pointer"
        title="حذف کد تخفیف"
        onClick={()=>handleDeleteDiscount(rowData)}
      ></i>
    </>
  );
};

export default Actions;