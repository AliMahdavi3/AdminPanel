import React from "react";
import { FastField, Form, Formik } from "formik";
import ModalContainer from "../../components/ModalContainer";
import FormikControl from "../../components/form/FormikControl";
import { initialValues, onSubmit, validationSchema } from "./core";
import SubmitButton from "../../components/form/SubmitButton";
import { useState } from "react";
import { useEffect } from "react";

const AddColors = ({ setData, colorToEdit, setColorToEdit }) => {
  const [reInitValue, setReInitValue] = useState(null);
  const [colorPickerValue, SetColorPickerValue] = useState("#000");

  useEffect(() => {
    if (colorToEdit) {
      SetColorPickerValue(colorToEdit.code);
      setReInitValue({
        title: colorToEdit.title,
        code: colorToEdit.code,
      });
    } else {
      SetColorPickerValue("#000");
      setReInitValue(null);
    }
  }, [colorToEdit]);

  const handleChangeColorCodeField = (e, form) => {
    SetColorPickerValue(e.target.value);
    form.setFieldValue("code", e.target.value);
  };

  return (
    <>
      <button
        className="btn btn-success p-0 px-2 d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_color_modal"
        onClick={() => setColorToEdit(null)}
      >
        <i className="bi bi-plus fs-3 text-light"></i>
      </button>
      <ModalContainer
        id="add_color_modal"
        title={colorToEdit ? "ویرایش رنگ" : "افزودن رنگ جدید"}
        fullScreen={false}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitValue || initialValues}
              onSubmit={(values, actions) =>
                onSubmit(values, actions, colorToEdit, setData)
              }
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  placeholder="فقط حروف و عدد"
                  label="عنوان"
                  name="title"
                />
                <FastField>
                  {({ form }) => {
                    return (
                      <div className="col-12 d-flex justify-content-start align-items-center">
                        <label
                          htmlFor="exampleColorInput"
                          className="form-label m-0"
                        >
                          انتخاب رنگ
                        </label>
                        <input
                          type="color"
                          className="form-control form-control-color mx-3"
                          id="code"
                          name="code"
                          title="انتخاب رنگ"
                          value={colorPickerValue}
                          onChange={(e) => handleChangeColorCodeField(e, form)}
                        />
                      </div>
                    );
                  }}
                </FastField>

                <div className="text-center col-12">
                  <SubmitButton />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AddColors;
