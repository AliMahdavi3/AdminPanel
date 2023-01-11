import React from 'react'

const FormikError = ({children}) => {
  return (
    <small className='d-block mb-4 text-danger'>{children}</small>
  )
}

export default FormikError