import React from 'react'
import { useNavigate } from 'react-router-dom'

const Actions = ({rowData, handleDeleteRoles}) => {

  const navigate = useNavigate();


  return (
    <>
        <i
        className="bi bi-pencil-square text-warning mx-1  pointer fs-3"
        title="ویرایش نقش "
        onClick={()=>navigate('/roles/add-role', {state: {roleToEdit: rowData.id, editType: "role"}})}
      ></i>

        <i
        className="bi bi-fingerprint text-info mx-1  pointer fs-3"
        title="دسترسی ها"
        onClick={()=>navigate('/roles/add-role', {state: {roleToEdit: rowData.id, editType: "permissions"}})}
      ></i>

      <i
        className="bi bi-x text-danger mx-1 fs-3 pointer"
        title="حذف  نقش"
        onClick={()=>handleDeleteRoles(rowData)}
      ></i>
    </>
  )
}

export default Actions