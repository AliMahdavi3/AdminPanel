import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const File = ({ label, name, placeholder, className }) => {
  return (
    <FastField>
      {({ form }) => {
        return (
          <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir-ltr">
              <input
                type="file"
                name={name}
                placeholder={placeholder}
                className="form-control"
                onChange={(e)=>form.setFieldValue(name, e.target.files[0])}
              />

              <span className="input-group-text justify-content-center">
                {label}
              </span>
            </div>
            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </FastField>
  );
};

export default File;
