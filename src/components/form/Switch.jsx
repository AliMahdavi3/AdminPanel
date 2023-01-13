import { FastField } from "formik";
import React from "react";

const Switch = ({name, label}) => {
  return (
    <div className="form-check form-switch mb-5 ">
      <FastField className="form-check-input mt-5 me-3" type="checkbox" name={name} />
      <label className="me-5 form-check-label">{label}</label>
    </div>
  );
};

export default Switch;
