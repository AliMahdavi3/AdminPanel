import { ErrorMessage, Field } from "formik";
import React from "react";
import { useState } from "react";
import FormikError from "./FormikError";

const MultiSelect = ({
  resultType,
  options,
  name,
  label,
  className,
  firstItem,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedId, formik) => {
    setSelectedItems((oldData) => {
      if (
        oldData.findIndex((d) => d.id == selectedId) == -1 &&
        selectedId > 0
      ) {
        const newData = [
          ...oldData,
          options.filter((o) => o.id == selectedId)[0],
        ];

        const selectedIds = newData.map((nd) => nd.id);
        const nameValue =
          resultType == "string" ? selectedIds.join("-") : selectedIds;
        formik.setFieldValue(name, nameValue);

        return newData;
      } else {
        return oldData;
      }
    });
  };

  const handleRemoveformSelectedItems = (selectedId, formik) => {
    setSelectedItems((oldData) => {
      const newData = oldData.filter((d) => d.id != selectedId);

      const selectedIds = newData.map((nd) => nd.id);
      const nameValue =
        resultType == "string" ? selectedIds.join("-") : selectedIds;
      formik.setFieldValue(name, nameValue);

      return newData;
    });
  };

  return (
    <Field>
      {({ form }) => {
        return (
          <div className={`col-12 ${className}`}>
          <div className="input-group mb-3 dir-ltr">
            <select
              className="form-control"
              id={name + "-select"}
              onChange={(e) => handleSelectedItems(e.target.value, form)}
            >
              <option value="">{firstItem}</option>
              {options.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.value}
                </option>
              ))}
            </select>
            <label htmlFor={name + '-select'} className="input-group-text justify-content-center">{label}</label>
          </div>
          <ErrorMessage name={name} component={FormikError}/>



          <div className="col-12 col-md-6 col-lg-8">
          {selectedItems.map(selectedItem=>(
            <span className="bg-info rounded-3 boxShadow m-1 p-1" key={selectedItem.id}>
            <i className="bi bi-x text-danger pointer m-1" onClick={()=>handleRemoveformSelectedItems(selectedItem.id, form)}></i>
            {selectedItem.value}
            </span>
          ))}
          </div>
        </div>
        )
      }}
    </Field>
  );
};

export default MultiSelect;
