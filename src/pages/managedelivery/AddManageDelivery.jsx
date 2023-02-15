import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import FormikControl from "../../components/form/FormikControl";
import SubmitButton from "../../components/form/SubmitButton";
import ModalContainer from "../../components/ModalContainer";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddManageDelivery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const deliveryToEdit = location.state?.deliveryToEdit;
  const [reInitialValue, setReInitialValue] = useState(null);
  const { setData } = useOutletContext();

  useEffect(() => {
    if (deliveryToEdit) setReInitialValue(deliveryToEdit);
  }, []);

  return (
    <>
      <ModalContainer
        className="show d-block"
        fullScreen={false}
        id="add_delivery_modal"
        title={deliveryToEdit ? "ویرایش روش ارسال" : "افزودن روش ارسال"}
        closeFunction={() => navigate(-1)}
      >
        <div className="container">
          <Formik
            initialValues={reInitialValue || initialValues}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, setData, deliveryToEdit)
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="row justify-content-center">
                    <FormikControl 
                    control="input"
                    type="text"
                    name="title"
                    label="عنوان"
                    placeholder="فقط از حروف لاتین یا فارسی استفاده کنید"
                    />
                    <FormikControl 
                    control="input"
                    type="number"
                    name="amount"
                    label="مبلغ"
                    placeholder="فقط از اعداد استفاده کنید"
                    />
                    <FormikControl 
                    control="input"
                    type="number"
                    name="time"
                    label="مدت ارسال"
                    placeholder="فقط از اعداد استفاده کنید"
                    />
       
                    <FormikControl 
                    control="input"
                    type="text"
                    name="time_unit"
                    label="واحد مدت"
                    placeholder="فقط از حروف لاتین یا فارسی استفاده کنید"
                    />
                    <div className="text-center col-12 col-md-6 col-lg-8 mt-4">
                      <SubmitButton/>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalContainer>
    </>
  );
};

export default AddManageDelivery;
