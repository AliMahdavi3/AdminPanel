import React from "react";
import { useLocation } from "react-router-dom";
import PrevPageButton from "../../components/PrevPageButton";

const CategoryChildren = () => {
  const location = useLocation();
  return (
    <div className="py-3 d-flex justify-content-between">
      <h5 className="text-center">
        <span>زیر گروه : </span>
        <span className="text-primary">{location.state.parentData.title}</span>
      </h5>
      <PrevPageButton/>
    </div>
  );
};

export default CategoryChildren;