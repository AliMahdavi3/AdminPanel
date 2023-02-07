import React from "react";
import AddRoles from "./AddRoles";
import RolesTable from "./RolesTable";

const Roles = () => {
  return (
    <div
      id="manage_role_section"
      className="manage_role_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت نقش ها</h4>
    <RolesTable/>
    </div>
  );
};

export default Roles;
