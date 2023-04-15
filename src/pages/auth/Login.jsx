import React from "react";
import { Formik, Form } from "formik";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";
import * as Yup from "yup";
import AuthFormControl from "../../components/authForm/AuthFormControl";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../utils/Alert";
import httpService from "../../services/httpService";
import { loginService } from "../../services/auth";

const initialValues = {
  phone: "",
  password: "",
  remember: false,
};

const onSubmit = async (values, submitMethods, navigate) => {
  try {
    const res = await loginService(values);
    if (res.status == 200) {
      localStorage.setItem("loginToken", JSON.stringify(res.data));
      navigate("/");
    } else {
      Alert("متاسفم...!", res.data.message, "error");
    }
    submitMethods.setSubmitting(false);
  } catch (error) {
    submitMethods.setSubmitting(false);
    Alert("متاسفم...!", "مشکلی از سمت سرور رخ داده است", "error");
  }
};

const validationSchema = Yup.object({
  phone: Yup.string().required("لطفا این قسمت را پرکنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پرکنید")
    .min(5, "حداقل 5 کاراکتر"),
  remember: Yup.boolean(),
});

function Login() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, submitMethods) =>
        onSubmit(values, submitMethods, navigate)
      }
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div className="container login d-flex justify-content-center align-items-center">
            <Form className=" py-4 px-3 w-50 mt-5 rounded-5 shadow-lg text-center">
              <span className="fs-3 text">ورود اعضا</span>

              <AuthFormControl
                formik={formik}
                control="input"
                type="phone"
                name="phone"
                label="phone"
                className="w-100 border-0 shadow-lg"
              />

              <AuthFormControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                label="password"
                className="w-100 border-0 shadow-lg"
              />
              <AuthFormControl
                formik={formik}
                control="switch"
                name="remember"
                label="مرا به خاطر بسپار"
              />

              <div className="d-block login-btn">
                <button
                  className="px-5 py-2 fs-5"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <Spinner
                      animation="grow"
                      variant="danger"
                      className="mt-2 spinner-login"
                    />
                  ) : (
                    "ورود"
                  )}
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
