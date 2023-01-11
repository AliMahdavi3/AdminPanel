import React from "react";
import AddColors from "./AddColors";
import ColorsTable from "./ColorsTable";

const Colors = () => {
  return (
    <>
      <div
        id="manage_color_section"
        className="add_color_section main_section container-fluid category-style"
      >
        <h4 className="text-center my-3 category-text">مدیریت رنگ ها</h4>
        <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3 dir-ltr">
              <input
                type="text"
                className="form-control dir-ltr text-start"
                placeholder="قسمتی از عنوان را وارد کنید"
              />
              <span className="input-group-text">جستجو</span>
            </div>
          </div>
          <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
           <AddColors/>
          </div>
        </div>
    <ColorsTable/>
      </div>
    </>
  );
};

export default Colors;
