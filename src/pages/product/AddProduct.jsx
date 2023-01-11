import React from "react";
import ModalContainer from "../../components/ModalContainer";

const AddProduct = () => {
  return (
    <>
      <button
        className="btn btn-success p-0 fw-bold d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_modal"
      >
        <i className="bi bi-plus text-light fs-3 px-2"></i>
      </button>
      <ModalContainer
        id="add_product_modal"
        title="افزودن محصول جدید"
        fullScreen={true}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2">
                <select type="text" className="form-control dir-ltr">
                  <option value="1">انتخاب دسته محصول</option>
                  <option value="1">دسته شماره 1</option>
                </select>
                <span className="input-group-text w_6rem justify-content-center">
                  دسته
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <span className="bg-info rounded-3 m-1 p-1">
                  <i className="bi bi-x text-danger"></i>
                  دسته فلان
                </span>
                <span className="bg-info rounded-3 m-1 p-1">
                  <i className="bi bi-x text-danger"></i>
                  دسته فلان
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3 ">
                <input
                  type="text"
                  className="form-control dir-ltr"
                  placeholder="عنوان محصول"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  عنوان
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control dir-ltr"
                  placeholder="قیمت محصول"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  قیمت
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="وزن محصول (کیلوگرم)"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  وزن
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <span className="input-group-text justify-content-center">
                  <i className="bi bi-plus text-success fw-bold pointer"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام برند را وارد کنید"
                  list="brandLists"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  برند
                </span>
                <datalist id="brandLists">
                  <option value="سامسونگ"></option>
                  <option value="سونی"></option>
                  <option value="اپل"></option>
                </datalist>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام رنگ را وارد کنید"
                  list="colorList"
                />
                <datalist id="colorList">
                  <option value="مشکی"></option>
                  <option value="سفید"></option>
                  <option value="قرمز"></option>
                </datalist>

                <span className="input-group-text w_6rem justify-content-center">
                  رنگ
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8 mb-3 d-flex">
                <span
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#000" }}
                >
                  <i className="bi bi-x fs-4 p-1 text-danger "></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="قسمتی از نام گارانتی را وارد کنید"
                  list="guarantiList"
                />
                <datalist id="guarantiList">
                  <option value="گارانتی فلان 1"></option>
                  <option value="گارانتی فلان 2"></option>
                  <option value="گارانتی فلان 3"></option>
                </datalist>

                <span className="input-group-text w_6rem justify-content-center">
                  گارانتی
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8 mb-3">
                <span className="bg-info rounded-3 m-1 p-1">
                  <i className="bi bi-x p-1 text-danger"></i>
                  گارانتی فلان
                </span>
                <span className="bg-info rounded-3 m-1 p-1">
                  <i className="bi bi-x p-1 text-danger"></i>
                  گارانتی فلان
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="توضیحات"
                  rows="5"
                ></textarea>
                <span className="input-group-text w_6rem justify-content-center">
                  توضیحات
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <input
                  type="file"
                  className="form-control"
                  placeholder="تصویر"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  تصویر
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="یک کلمه در مورد تصویر"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  توضیح تصویر
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="با - از هم جدا شوند"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  تگ ها
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <input
                  type="number"
                  className="form-control"
                  placeholder="فقط عدد"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  موجودی
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3 dir-ltr">
                <input
                  type="number"
                  className="form-control"
                  placeholder="فقط عدد "
                />
                <span className="input-group-text w_6rem justify-content-center">
                  درصد تخفیف
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
              <div className="form-check form-switch col-5 col-md-2">
                <input
                  className="form-check-input pointer"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  وضعیت فعال
                </label>
              </div>
            </div>
            <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
              <button className="btn btn-primary">ذخیره</button>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AddProduct;
