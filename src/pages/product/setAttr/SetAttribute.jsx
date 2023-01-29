import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import PrevPageButton from "../../../components/PrevPageButton";
import SpinnerLoad from "../../../components/SpinnerLoad";
import SubmitButton from "../../../components/form/SubmitButton";
import FormikError from "../../../components/form/FormikError";
import { initializingData, onSubmit } from "./core";

const SetAttribute = () => {
  const location = useLocation();
  const { selectedProduct } = location.state;

  const [attrs, setAttrs] = useState();
  const [initialValues, setInitialValues] = useState(null);
  const [validationSchema, setValidationSchema] = useState({});

  const handleGetAttribute = async () => {
    const { attrVar, initials, rules } = await initializingData(
      selectedProduct
    );
    setAttrs(attrVar);
    setInitialValues(initials);
    setValidationSchema(
      Object.keys(initials).length > 0 ? Yup.object(rules) : {}
    );
  };

  useEffect(() => {
    handleGetAttribute();
  }, []);

  return (
    <div className="container category-style">
      <h4 className="text-center my-5">
        افزودن ویژگی محصول :
        <span className="text-success">{selectedProduct.title}</span>
      </h4>
      <div className="text-end col-md-6 col-lg-8 m-auto my-3">
        <PrevPageButton />
      </div>
      <div className="row justify-content-center">
        {initialValues ? (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, selectedProduct.id)
            }
            validationSchema={validationSchema}
          >
            <Form>
              {attrs.map((attr, index) => (
                <div
                  key={"group" + index}
                  className="row justify-content-center"
                >
                  <h6 className="text-center">گروه : {attr.groupTitle}</h6>
                  {attr.data.length > 0 ? (
                    attr.data.map((attrData) => (
                      <div
                        className="col-12 col-md-6 col-lg-8"
                        key={attrData.id}
                      >
                        <div className="input-group my-3">
                          <span className="input-group-text justify-content-center">
                            {attrData.unit}
                          </span>
                          <Field
                            name={attrData.id}
                            type="text"
                            placeholder=""
                            className="form-control"
                          />
                          <span className="input-group-text justify-content-center">
                            {attrData.title}
                          </span>
                        </div>
                        <ErrorMessage
                          name={attrData.id}
                          component={FormikError}
                        />
                      </div>
                    ))
                  ) : (
                    <small className="text-center text-danger">
                      هیچ ویژگی یافت نشد
                    </small>
                  )}
                </div>
              ))}
              <div className="text-center">
                <SubmitButton />
              </div>
            </Form>
          </Formik>
        ) : (
          <SpinnerLoad />
        )}
      </div>
    </div>
  );
};

export default SetAttribute;
