import React from "react";
import PermissionTable from "./PermissionTable";

const Permissions = () => {
  return (
    <div
      id="manage_permission_section"
      className="manage_permission_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت مجوز های دسترسی</h4>
    <PermissionTable/>
    </div>
  );
};

export default Permissions;
