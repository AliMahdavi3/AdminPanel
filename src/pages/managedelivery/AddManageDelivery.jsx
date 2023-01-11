import React from "react";
import ModalContainer from "../../components/ModalContainer";

const AddManageDelivery = () => {
  return (
    <>
      <button
        className="btn btn-success p-0 px-2 d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_delivery_modal"
      >
        <i className="bi bi-plus fs-3 text-light"></i>
      </button>
      <ModalContainer
        fullScreen={true}
        id="add_delivery_modal"
        title={"افزودن روش ارسال"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3 dir-ltr">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  عنوان
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3 dir-ltr">
                <input
                  type="number"
                  className="form-control"
                  placeholder="تومان (فقط عدد)"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  هزینه
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3 dir-ltr">
                <input
                  type="text"
                  className="form-control"
                  placeholder="فقط عدد"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  مدت ارسال
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3 dir-ltr">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  واحد مدت ارسال
                </span>
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

export default AddManageDelivery;
