import React from 'react'
import { useNavigate } from 'react-router-dom'

const Actions = ({rowData, handleDeleteOrder}) => {
    const navigation = useNavigate()
  return (
    <>
        <i
            className="bi bi-cart-fill fs-4 pointer fw-bold text-info mx-1 icons"
            title="ویرایش سبد"
            onClick={()=>navigation("/Orders/add-order", {state:{orderId:rowData.id}})}
        ></i>
        <i
            className="bi bi-x-circle-fill fs-4 pointer text-danger mx-1 icons"
            title="حذف سبد"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={()=>handleDeleteOrder(rowData)}
        ></i>
    </>
  )
}

export default Actions