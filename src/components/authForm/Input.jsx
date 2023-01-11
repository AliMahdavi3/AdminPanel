import { FastField } from 'formik'
import React from 'react'

function Input({formik,type,name,label}) {
  return (
    <div>
        
        <div className="m-5">
           <FastField type={type} className="d-block rounded-3 py-1 text-center input-100"  name={name} id="email" placeholder={label}
           {...formik.getFieldProps({name})}
           />
           {formik.errors[name] && formik.touched[name] ? <small className="d-block mt-1 text-center text-danger">{formik.errors[name]}</small> : null}
          </div>
    </div>
  )
}

export default Input;