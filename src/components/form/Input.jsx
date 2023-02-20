import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Input = ({ type, label, name, placeholder , className, ...others }) => {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3">
        <FastField type={type} name={name} placeholder={placeholder} className="form-control" {...others}/>
          {label && (
            <span className="input-group-text justify-content-center">{label}</span>
          )}
      </div>
      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Input;
