import React from "react";
import { NavLink } from "react-router-dom";
import { useHasPermissions } from "../../hook/permissionsHook";

const SidebarItems = ({ title, icon, targetPath,  pTitle }) => {

  const hasPerm = useHasPermissions(pTitle)

  const navStyle = (isActive) => {
      if (isActive) {
        return {
          background: "rgb(69, 89, 114)",
        };
      }
  };

  return hasPerm && (
    <div className="d-flex flex-column">
      <NavLink style={({ isActive }) => navStyle(isActive)} to={targetPath}>
        <i className={`ms-3 ${icon} pe-3`}></i>
        {title}
      </NavLink>
    </div>
  );
};

export default SidebarItems;
