import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import FormikError from "../../components/form/FormikError";
import ModalContainer from "../../components/ModalContainer";
import {
  getAllProductTitlesService,
  getOneProductService,
} from "../../services/product";
import { initialValues, onSubmit, validationSchema } from "./core";
import SelectSearch from "react-select-search";
import {
  addNewCartService,
  editCartService,
  getSingleCartService,
} from "../../services/cart";
import { numberWithCommas } from "../../utils/numbers";
import { Alert } from "../../utils/Alert";

const AddCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartToEditId = location.state?.cartId;
  const { handleGetCarts } = useOutletContext();
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);
  const [selectedProductsInfo, setSelectedProductsInfo] = useState([]);
  const [reIbitialValues, setReIbitialValues] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleGetAllProductsTitles = async () => {
    const res = await getAllProductTitlesService();
    res.status === 200 &&
      setAllProducts(
        res.data.data.map((p) => {
          return { name: p.title, value: p.id };
        })
      );
  };

  const handleChangeSelectedProducts = async (e, formik) => {
    formik.setFieldValue("product_id", e);
    const res = await getOneProductService(e);
    if (res.status === 200) {
      const product = res.data.data;
      setCurrentProduct(product);
      setColors(product.colors.map((c) => ({ name: c.title, value: c.id })));
      setGuarantees(
        product.guarantees.map((g) => ({ name: g.title, value: g.id }))
      );
    }
  };

  const handleDeleteProduct = async (id) => {
    setSelectedProductsInfo((old) => old.filter((o) => o.id != id));
  };

  const handleConfirmAddProduct = async (formik) => {
    setIsSubmiting(true);
    let products = [];
    for (const p of selectedProductsInfo) {
      products.push({
        product_id: p.product.id,
        color_id: p.color?.id || "",
        guarantee_id: p.guarantee?.id || "",
        count: p.count,
      });
    }
    let res;
    if (cartToEditId) {
      res = await editCartService(cartToEditId, {
        user_id: formik.values.user_id,
        products,
      });
    } else {
      res = await addNewCartService({
        user_id: formik.values.user_id,
        products,
      });
    }
    if (res.status === 201 && res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      handleGetCarts();
      navigate(-1);
    }
    setIsSubmiting(false);
  };

  const handleGetCartToEditInfo = async () => {
    const res = await getSingleCartService(cartToEditId);
    if (res.status === 200) {
      let products = [];
      const cart = res.data.data;
      setReIbitialValues({ ...initialValues, user_id: cart.user_id });
      for (const item of cart.items) {
        products.push({
          id: item.id,
          product: item.product,
          guarantee: item.guarantee,
          color: item.color,
          count: item.count,
        });
      }
      setSelectedProductsInfo(products);
    }
  };

  useEffect(() => {
    handleGetAllProductsTitles();
    cartToEditId && handleGetCartToEditInfo();
  }, []);
  return (
    <>
      <ModalContainer
        className="show d-block"
        fullScreen={true}
        id="edit_cart_modal"
        title={cartToEditId ? "جزیات سبد" : "افزودن سبد"}
        closeFunction={() => navigate(-1)}
      >
        <div className="container">
          <Formik
            initialValues={reIbitialValues || initialValues}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, setSelectedProductsInfo, currentProduct)
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="row my-3 justify-content-center">
                    <div className="col-12 col-md-4 col-lg-3 my-1">
                      <Field
                        type="text"
                        name="user_id"
                        className="form_control"
                        placeholder="ای دی مشتری"
                      />
                      <br />
                      <ErrorMessage name="user_id" component={FormikError} />
                    </div>

                    <div className="col-12 col-md-4 col-lg-2 my-1">
                      <SelectSearch
                        options={allProducts}
                        search={true}
                        placeholder={"محصول"}
                        onChange={(e) =>
                          handleChangeSelectedProducts(e, formik)
                        }
                      />
                      <br />
                      <ErrorMessage name="product_id" component={FormikError} />
                    </div>

                    <div className="col-12 col-md-4 col-lg-2 my-1">
                      <SelectSearch
                      className="select_search"
                        options={colors}
                        placeholder={"رنگ ها"}
                        onChange={(e) => formik.setFieldValue("color_id", e)}
                      />
                      <br />
                      <ErrorMessage name="product_id" component={FormikError} />
                    </div>

                    <div className="col-12 col-md-4 col-lg-2 my-1">
                      <SelectSearch
                        options={guarantees}
                        placeholder={"گارانتی ها"}
                        onChange={(e) =>
                          formik.setFieldValue("guarantee_id", e)
                        }
                      />
                      <br />
                      <ErrorMessage name="product_id" component={FormikError} />
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 my-1">
                      <Field
                        type="number"
                        name="count"
                        className="form_control"
                        placeholder="تعداد"
                      />
                      <br />
                      <ErrorMessage name="user_id" component={FormikError} />
                    </div>

                    <div className="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
                      <i
                        className="bi bi-check text-light bg-success rounded-circle p-2 mx-1 pointer"
                        title="ثبت ویژگی"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        onClick={() => formik.submitForm()}
                      ></i>
                    </div>

                    <hr className="mt-3" />
                  </div>

                  <div className="row justify-content-center">
                    {selectedProductsInfo.map((product) => (
                      <div
                        className="col-12 col-md-6 col-lg-8"
                        key={product.id}
                      >
                        <div className="input-group my-3 dir-ltr">
                          <span className="input-group-text text-end d-flex align-items-center">
                            <i
                              className="bi bi-x text-danger pointer mx-1"
                              title="حذف محصول از سبد"
                              data-bs-placement="top"
                              onClick={() => handleDeleteProduct(product.id)}
                            ></i>
                            {product.product.title}
                            (قیمت واحد :{" "}
                            {numberWithCommas(product.product.price)}) (گارانتی
                            : {product.guarantee?.title}) ({product.count} عدد)
                            <i
                              className="bi bi-circle mx-1"
                              style={{ color: product.color?.code }}
                            ></i>
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="col-12"></div>
                    {selectedProductsInfo.length > 0 ? (
                      <>
                        <div className="col-6">
                          <div className="input-group my-3 dir-ltr">
                            <span className="input-group-text justify-content-center w-75">
                              {numberWithCommas(
                                selectedProductsInfo
                                  .map((p) => p.count * p.product.price)
                                  .reduce((a, b) => a + b)
                              )}
                            </span>
                            <span className="input-group-text w-25 text-center">
                              جمع کل
                            </span>
                          </div>
                        </div>
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleConfirmAddProduct(formik)}
                            disabled={isSubmiting}
                          >
                            ذخیره
                          </button>
                        </div>
                      </>
                    ) : (
                      <h5 className="text-primary text-center">
                        محصولات خود را انتخاب کنید
                      </h5>
                    )}
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

export default AddCart;
