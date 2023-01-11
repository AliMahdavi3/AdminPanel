import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Textarea = ({ label, name, placeholder , className }) => {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3">
        <FastField as="textarea" name={name} placeholder={placeholder} className="form-control" />

        <span className="input-group-text justify-content-center">{label}</span>
      </div>
      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Textarea;
