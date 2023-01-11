import React from "react";
import AddComment from "./AddComment";
import CommentTable from "./CommentTable";

const Comment = () => {
  return (
    <div
      id="manage_comments_section"
      className="manage_comments_section main_section container-fluid category-style"
    >
      <h4 className="text-center my-3 category-text">مدیریت نظرات</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir-ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از نام یا نام خانوادگی یا نظر را وارد کنید"
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
   <AddComment/>
        </div>
      </div>
   <CommentTable/>
    </div>
  );
};

export default Comment;
