import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Select = ({ options, label, name, className }) => {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3">
        <FastField as="select" className="form-control" id={name} name={name}>
            <option value="">
              دسته مورد نظر را انتخاب کنید ...
            </option>
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.value}
            </option>
          ))}
        </FastField>
        <span className="input-group-text justify-content-center">{label}</span>
      </div>
      <ErrorMessage name={name} component={FormikError}/>
    </div>
  );
};

export default Select;
