import { FastField } from "formik";
import React from "react";

const Switch = ({name, label}) => {
  return (
    <div className="mb-5">
      <FastField className="form-check-input mx-2" type="checkbox" name={name} />
      <label className=" form-check-label">{label}</label>
    </div>
  );
};

export default Switch;
