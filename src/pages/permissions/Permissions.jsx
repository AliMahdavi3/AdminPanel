import React from "react";
import PermissionTable from "./PermissionTable";

const Permissions = () => {
  return (
    <div
      id="manage_permission_section"
      className="manage_permission_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت مجوز ها</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir-ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از نام مجوز را وارد کنید"
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
      </div>
    <PermissionTable/>
    </div>
  );
};

export default Permissions;
