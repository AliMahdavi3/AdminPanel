import { Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormikControl from "../../components/form/FormikControl";
import SubmitButton from "../../components/form/SubmitButton";
import ModalContainer from "../../components/ModalContainer";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddGuaranties = ({ setData, guaranteeToEdit, setGuaranteeToEdit }) => {
  const [reInitValues, setReInitValues] = useState(null);

  useEffect(() => {
    if (guaranteeToEdit)
      setReInitValues({
        title: guaranteeToEdit.title,
        descriptions: guaranteeToEdit.descriptions || "",
        length: guaranteeToEdit.length || "",
        length_unit: guaranteeToEdit.length_unit || "",
      });
    else setReInitValues(null);
  }, [guaranteeToEdit]);

  return (
    <>
      <button
        className="btn btn-success d-flex p-0 px-2 justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_guarantee_modal"
        onClick={() => setGuaranteeToEdit(null)}
      >
        <i className="bi bi-plus fs-3 text-light"></i>
      </button>
      <ModalContainer
        fullScreen={false}
        title={guaranteeToEdit ? "ویرایش گارانتی" : "افزودن گارانتی"}
        id="add_guarantee_modal"
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitValues || initialValues}
              onSubmit={(values, actions) =>
                onSubmit(values, actions, setData, guaranteeToEdit)
              }
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  placeholder="فقط حروف و عدد"
                />
                <FormikControl
                  control="textarea"
                  type="text"
                  name="descriptions"
                  label="توضیحات گارانتی"
                  placeholder="فقط حروف و عدد"
                />
                <FormikControl
                  control="input"
                  type="number"
                  name="length"
                  label="مدت گارانتی"
                  placeholder="فقط عدد"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="length_unit"
                  label="واحد"
                  placeholder="فقط حروف "
                />

                <div className="btn_box text-center col-12 ">
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

export default AddGuaranties;
