import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../../../components/form/FormikControl";
import SubmitButton from "../../../components/form/SubmitButton";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddAttrFormik = ({
  reInitialValues,
  location,
  setData,
  attrToEdit,
  setAttrToEdit,
}) => {
  return (
    <Formik
      initialValues={reInitialValues || initialValues}
      onSubmit={(values, actions) =>
        onSubmit(
          values,
          actions,
          location.state.categoryData.id,
          setData,
          attrToEdit,
          setAttrToEdit
        )
      }
      validationSchema={validationSchema}
      enableReinitialize
    >
      <Form>
        <div
          className={`row my-3 ${
            attrToEdit ? "shadow_alert" : ""
          } justify-content-center align-items-center`}
        >
          <FormikControl
            control="input"
            type="text"
            label="عنوان"
            name="title"
            placeholder="عنوان ویژگی جدید"
            className="col-md-6 col-lg-4 my-1"
          />
          <FormikControl
            control="input"
            type="text"
            label="واحد"
            name="unit"
            placeholder="واحد ویژگی جدید"
            className="col-md-6 col-lg-4 my-1"
          />

          <div className="col-8 col-lg-2 my-1 ">
            <FormikControl
              control="switch"
              label="نمایش در فیلتر"
              name="in_filter"
            />
          </div>
          <div className="col-4 col-lg-2  d-flex justify-content-end  align-items-start">
            <SubmitButton />
            {attrToEdit ? (
              <button
                className="btn btn-secondary ms-2"
                onClick={() => setAttrToEdit(null)}
              >
                انصراف
              </button>
            ) : null}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddAttrFormik;
