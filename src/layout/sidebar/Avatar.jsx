import React from "react";

const Avatar = ({imgPath}) => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <img
        src={imgPath}
        className="sidebar-img mt-2 rounded-circle"
        alt="image"
      />
    </div>
  );
};

export default Avatar;
