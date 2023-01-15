import { Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormikControl from "../../components/form/FormikControl";
import SubmitButton from "../../components/form/SubmitButton";
import ModalContainer from "../../components/ModalContainer";
import { apiPath } from "../../services/httpService";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddBrands = ({ setData, brandToEdit, setBrandToEdit }) => {

  const [reInitialValues, setReInitialValues] = useState(null)

  useEffect(()=>{
    if(brandToEdit) setReInitialValues({
      original_name: brandToEdit.original_name,
      persian_name: brandToEdit.persian_name || "",
      descriptions: brandToEdit.descriptions || "",
      logo: null,
    })
    else setReInitialValues(null)
  },[brandToEdit])

  return (
    <>
      <button
        className="btn btn-success d-flex p-0 px-2 justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_brand_modal"
        onClick={()=>setBrandToEdit(null)}
      >
        <i className="bi bi-plus fs-3 text-light"></i>
      </button>
      <ModalContainer
        fullScreen={false}
        id={"add_brand_modal"}
        title={brandToEdit ? "ویرایش برند" : "افزودن برند"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitialValues || initialValues}
              onSubmit={(values, actions) => onSubmit(values, actions, setData, brandToEdit)}
              validationSchema={validationSchema}
              enableReinitialize 
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  label="عنوان لاتین برند"
                  placeholder="کیبرد را در حالت لاتین قرار دهید"
                  name="original_name"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="عنوان فارسی برند"
                  placeholder="کیبرد را در حالت فارسی قرار دهید"
                  name="persian_name"
                />
                <FormikControl
                  control="textarea"
                  label="توضیحات برند"
                  placeholder="متن کوتاه در مورد برند"
                  name="descriptions"
                />

                {brandToEdit ? (
                  <div className="text-center col-12 py-3">
                    <img src={apiPath + "/" + brandToEdit.logo} width="60" />
                  </div>
                ) : null}


                <FormikControl
                  control="file"
                  label="تصویر"
                  placeholder="تصویر"
                  name="logo"
                />

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

export default AddBrands;
