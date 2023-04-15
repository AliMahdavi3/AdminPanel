import { FastField } from 'formik'
import React from 'react'

function Input({formik,type,name,className,label}) {
  return (
    <div>
        
        <div className="m-5">
           <FastField type={type} className={`d-block ${className} rounded-5 py-3 text-start px-4 input-100`} name={name} id="email" placeholder={label}
           {...formik.getFieldProps({name})}
           />
           {formik.errors[name] && formik.touched[name] ? <small className="d-block mt-2 fw-bold text-center text-danger">{formik.errors[name]}</small> : null}
          </div>
    </div>
  )
}

export default Input;