import React from "react";
import ColorsTable from "./ColorsTable";

const Colors = () => {
  return (
    <>
      <div
        id="manage_color_section"
        className="add_color_section main_section container-fluid category-style"
      >
        <h4 className="text-center my-3 category-text">مدیریت رنگ ها</h4>
        <ColorsTable />
      </div>
    </>
  );
};

export default Colors;
