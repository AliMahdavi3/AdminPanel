import React from "react";
import UserTable from "./UserTable";

const User = () => {
  return (
    <div
      id="manage_user_section"
      className="manage_user_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت کاربران</h4>
      <UserTable />
    </div>
  );
};

export default User;
