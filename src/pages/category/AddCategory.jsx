import React, { useContext, useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import { Form, Formik } from "formik";
import FormikControl from "../../components/form/FormikControl";
import {
  getCategoryService,
  getSingleCategoryService,
} from "../../services/category";
import { Alert } from "../../utils/Alert";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SubmitButton from "../../components/form/SubmitButton";
import { CategoryContext } from "../../context/categoryContext";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddCategory = ({ setForceRender }) => {
  const { editId, setEditId } = useContext(CategoryContext);
  const params = useParams();
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
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

  const handleGetSingleCategory = async () => {
    try {
      const res = await getSingleCategoryService(editId);
      console.log(res);
      if (res.status == 200) {
        const oldCategory = res.data.data;
        setEditCategory(oldCategory);
      }
    } catch (error) {
      Alert("متاسفم...!", "دسته بندی مورد نظر پیدا نشد!", "warning");
    }
  };

  useEffect(() => {
    if (editId) handleGetSingleCategory();
    else setEditCategory(null);
  }, [editId]);

  useEffect(() => {
    handleGetParentsCategory();
  }, []);

  useEffect(() => {
    if (editCategory) {
      setReInitialValues({
        title: editCategory.title,

        descriptions: editCategory.descriptions || "",

        parent_id: editCategory.parent_id || "",

        is_active: editCategory.is_active ? true : false,

        show_in_menu: editCategory.show_in_menu ? true : false,

        image: null,
      });
    } else if (params.categoryId) {
      setReInitialValues({
        ...initialValues,

        parent_id: params.categoryId,
      });
    } else {
      setReInitialValues(null);
    }
  }, [params.categoryId, editCategory]);

  return (
    <>
      <button
        className="btn btn-success p-0 fw-bold d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        onClick={() => setEditId(null)}
      >
        <i className="bi bi-plus text-light fs-3 px-2"></i>
      </button>

      <ModalContainer
        fullScreen={true}
        id="add_product_category_modal"
        title={
          editId
            ? "ویرایش : " + (editCategory ? editCategory.title : "")
            : "افزودن دسته محصولات"
        }
      >
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setForceRender, editId)
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
                {!editId ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="file"
                    name="image"
                    label="تصویر"
                    placeholder="تصویر"
                  />
                ) : null}

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
