import React from 'react'
import { useNavigate } from 'react-router-dom'

const Actions = ({rowData, handleDeleteCarts}) => {
    const navigation = useNavigate()
    return (
        <>
            <i
            className="bi bi-pencil-square fs-4 pointer fw-bold text-warning mx-1 icons"
            title="ویرایش سبد"
            onClick={()=>navigation('/CartEdit/add-cart', {state:{cartId:rowData.id}})}
            ></i>
            <i
            className="bi bi-x-circle-fill fs-4 pointer text-danger mx-1 icons"
            title="حذف سبد"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={()=>handleDeleteCarts(rowData)}
            ></i>
        </>
    )
}

export default Actions