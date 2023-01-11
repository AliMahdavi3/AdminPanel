import React, { useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import FormikControl from "../../components/form/FormikControl";
import {
  createNewCategoryService,
  getCategoryService,
} from "../../services/category";
import { Alert } from "../../utils/Alert";
import { useEffect } from "react";
// import SpinnerLoad from "../../components/SpinnerLoad";
import { useParams } from "react-router-dom";
import SubmitButton from "../../components/form/SubmitButton";

const initialValues = {
  title: "",

  descriptions: "",

  parent_id: "",

  is_active: true,

  show_in_menu: true,

  image: null,
};

const onSubmit = async (values, actions, setForceRender) => {
  try {
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    const res = await createNewCategoryService(values);
    console.log(res);
    if (res.status == 201) {
      Alert("رکورد ثبت شد", res.data.message, "success");
      actions.resetForm();
      setForceRender((last) => last + 1);
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(values);
};

const validationSchema = Yup.object({
  parent_id: Yup.number(),

  title: Yup.string().required("لطفا این قسمت را پر کنید"),

  descriptions: Yup.string(),

  image: Yup.mixed()

    .test("filesize", "حجم فایل نمیتواند بیشتر از 500 کیلوبایت باشد", (value) =>
      !value ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      !value ? true : value.type === "image/jpeg"
    ),

  is_active: Yup.boolean(),

  show_in_menu: Yup.boolean(),
});

const AddCategory = ({ setForceRender }) => {
  const params = useParams();
  const [reInitialValues, setReInitialValues] = useState(null);
  const [parents, setParents] = useState([]);
  const handleGetParentsCategory = async () => {
    try {
      const res = await getCategoryService();
      if (res.status === 200) {
        const allParents = res.data.data;
        console.log(allParents);
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          })
        );
      }
    } catch (error) {
      Alert("متاسفم...!", "دسته بندی والد پیدا نشد!", "warning");
    }
  };

  useEffect(() => {
    handleGetParentsCategory();
  }, []);

  useEffect(() => {
    if (params.categoryId) {
      setReInitialValues({
        ...initialValues,
        parent_id: params.categoryId,
      });
    } else {
      setReInitialValues(null)
    }
  }, [params.categoryId]);

  return (
    <>
      <button
        className="btn btn-success p-0 fw-bold d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
      >
        <i className="bi bi-plus text-light fs-3 px-2"></i>
      </button>

      <ModalContainer
        fullScreen={true}
        id="add_product_category_modal"
        title="افزودن دسته محصولات"
      >
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setForceRender)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                {parents.length > 0 ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                  />
                ) : null}

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="descriptions"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="file"
                  name="image"
                  label="تصویر"
                  placeholder="تصویر"
                />
                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="is_active"
                      label="وضعیت فعال"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="show_in_menu"
                      label="نمایش در منو"
                    />
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalContainer>
    </>
  );
};

export default AddCategory;
