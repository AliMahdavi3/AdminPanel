import React from 'react'
import { useNavigate } from 'react-router-dom'

const Actions = ({rowData,  handleDeleteDeliveries}) => {
    const navigate = useNavigate()
  return (
    <>
        <i
            className="bi bi-pencil-square text-warning mx-1  pointer fs-3"
            title="ویرایش روش ارسال "
            onClick={()=>navigate('/ManageDelivery/add-delivery', {state:{deliveryToEdit:rowData}})}
        ></i>

        <i
            className="bi bi-x text-danger mx-1 fs-3 pointer"
            title="حذف  روش ارسال"
            onClick={()=>handleDeleteDeliveries(rowData)}
        ></i>
    </>
  )
}

export default Actions