import React from "react";
import { Link } from "react-router-dom";

const AddButtonLink = ({href}) => {
  return (
    <Link to={href}>
      <span className="btn btn-success p-0 fw-bold d-flex justify-content-center align-items-center">
        <i className="bi bi-plus text-light fs-3 px-2"></i>
      </span>
    </Link>
  );
};

export default AddButtonLink;
