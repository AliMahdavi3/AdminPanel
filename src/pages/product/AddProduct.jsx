import React, { useState } from "react";
import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../components/form/FormikControl";
import { getCategoryService } from "../../services/category";
import { useEffect } from "react";
import SpinnerLoad from "../../components/SpinnerLoad";
import PrevPageButton from "../../components/PrevPageButton";
import SubmitButton from "../../components/form/SubmitButton";
import { getAllBrandService } from "../../services/brand";
import { getAllColorService } from "../../services/color";
import { getAllGuarantiesService } from "../../services/guaranties";
import { useLocation } from "react-router-dom";

const AddProduct = () => {
  const location = useLocation();
  const productToEdit = location.state?.productToEdit;

  const [selectedCategories, setSelectedCategories] = useState([]); // used in editting
  const [selectedColors, setSelectedColors] = useState([]); // used in editting
  const [selectedGuarantees, setSelectedGuarantees] = useState([]); // used in editting

  const [reInitValue, setReInitValue] = useState(null);
  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);

  const getAllParentGategories = async () => {
    const res = await getCategoryService();
    if (res.status === 200) {
      setParentCategories(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };

  const getAllBrands = async () => {
    const res = await getAllBrandService();
    if (res.status === 200) {
      setBrands(
        res.data.data.map((d) => {
          return { id: d.id, value: d.original_name };
        })
      );
    }
  };
  const getAllColors = async () => {
    const res = await getAllColorService();
    if (res.status === 200) {
      setColors(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };
  const getAllGuarantees = async () => {
    const res = await getAllGuarantiesService();
    if (res.status === 200) {
      setGuarantees(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };

  const setInitialSelectedValues = () => {
    if (productToEdit) {
      setSelectedCategories(
        productToEdit.categories.map((c) => {
          return { id: c.id, value: c.title };
        })
      );
      setSelectedColors(
        productToEdit.colors.map((c) => {
          return { id: c.id, value: c.title };
        })
      );
      setSelectedGuarantees(
        productToEdit.guarantees.map((c) => {
          return { id: c.id, value: c.title };
        })
      );
    }
  };

  useEffect(() => {
    getAllParentGategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees();
    setInitialSelectedValues();

    for (const key in productToEdit) {
      if (productToEdit[key] === null) productToEdit[key] = "";
    }

    if (productToEdit)
      setReInitValue({
        ...productToEdit,
        category_ids: productToEdit.categories.map((c) => c.id).join("-"),
        color_ids: productToEdit.colors.map((c) => c.id).join("-"),
        guarantee_ids: productToEdit.guarantees.map((g) => g.id).join("-"),
      });
    else setReInitValue(null);
  }, []);

  const handleSetMainCategories = async (value) => {
    setMainCategories("waiting");
    if (value > 0) {
      const res = await getCategoryService(value);
      if (res.status === 200) {
        setMainCategories(
          res.data.data.map((d) => {
            return { id: d.id, value: d.title };
          })
        );
      }
    } else {
      setMainCategories([]);
    }
  };

  return (
    <>
      <Formik
        initialValues={reInitValue || initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions, productToEdit)}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <div className="container category-style">
                <div className="add-product">
                  <h4 className="category-text text-center mt-3 ">
                    افزودن محصول جدید
                  </h4>
                  <div className="text-end col-md-6 col-lg-8 m-auto my-3">
                    <PrevPageButton />
                  </div>
                  <div className="row justify-content-center">
                    <FormikControl
                      label="دسته والد *"
                      control="select"
                      className="col-md-6 col-lg-8 "
                      options={parentCategories}
                      name="parentCats"
                      firstItem="دسته مورد نظر را انتخاب کنید"
                      handleOnChange={handleSetMainCategories}
                    />

                    {mainCategories === "waiting" ? (
                      <SpinnerLoad isSmall={true} colorClass="text-primary" />
                    ) : null}

                    <FormikControl
                      label="دسته اصلی *"
                      className="col-md-6 col-lg-8 "
                      control="searchableSelect"
                      options={
                        typeof mainCategories == "object" ? mainCategories : []
                      }
                      name="category_ids"
                      firstItem="دسته مورد نظر را انتخاب کنید"
                      resultType="string"
                      initialItems={selectedCategories}
                    />

                    <FormikControl
                      label="عنوان"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="text"
                      name="title"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="قیمت"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="number"
                      name="price"
                      placeholder="فقط از عدد استفاده کنید"
                    />
                    <FormikControl
                      label="وزن"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="number"
                      name="weight"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="برند"
                      className="col-md-6 col-lg-8"
                      control="select"
                      options={brands}
                      name="brand_id"
                      placeholder="برند مورد نظر را انتخاب کنید"
                    />
                    <FormikControl
                      label="رنگ"
                      className="col-md-6 col-lg-8"
                      control="searchableSelect"
                      options={colors}
                      name="color_ids"
                      placeholder="رنگ مورد نظر را انتخاب کنید"
                      resultType="string"
                      initialItems={selectedColors}
                    />
                    <FormikControl
                      label="گارانتی"
                      className="col-md-6 col-lg-8"
                      control="searchableSelect"
                      options={guarantees}
                      name="guarantee_ids"
                      placeholder="گارانتی مورد نظر را انتخاب کنید"
                      resultType="string"
                      initialItems={selectedGuarantees}
                    />

                    {/* <FormikControl
                      label="توضیحات"
                      className="col-md-6 col-lg-8"
                      control="textarea"
                      name="descriptions"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    /> */}
                    <FormikControl
                      label="توضیحات"
                      className="col-md-6 col-lg-8"
                      control="ckeditor"
                      name="descriptions"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="توضیحات کوتاه"
                      className="col-md-6 col-lg-8"
                      control="textarea"
                      name="short_descriptions"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="توضیحات سبد"
                      className="col-md-6 col-lg-8"
                      control="textarea"
                      name="cart_descriptions"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    {!productToEdit ? (
                      <FormikControl
                        label="تصویر"
                        className="col-md-6 col-lg-8"
                        control="file"
                        name="image"
                        placeholder="تصویر"
                      />
                    ) : null}

                    <FormikControl
                      label="توضیح تصویر"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="text"
                      name="alt_image"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="کلمات کلیدی"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="text"
                      name="keywords"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="موجودی"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="number"
                      name="stock"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <FormikControl
                      label="درصد تخفیف"
                      className="col-md-6 col-lg-8"
                      control="input"
                      type="text"
                      name="discount"
                      placeholder="فقط از حروف و عدد استفاده کنید"
                    />

                    <div className="mb-3 text-center bordered col-12 col-md-6 col-lg-8 mt-4">
                      <SubmitButton />
                      <PrevPageButton />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AddProduct;
