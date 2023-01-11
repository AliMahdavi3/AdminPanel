import React from "react";
import AddQuestion from "./AddQuestion";
import QuestionTable from "./QuestionTable";

const Questions = () => {
  return (
    <>
      <div
        id="manage_question_section"
        className="manage_question_section main_section container-fluid category-style"
      >
        <h4 className="text-center my-3 category-text">مدیریت سوالات</h4>
        <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3" >
              <input
                type="text"
                className="form-control"
                placeholder="قسمتی از نام یا نام خانوادگی یا سوال را وارد کنید"
              />
              <span className="input-group-text">جستجو</span>
            </div>
          </div>
          <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
       <AddQuestion/>
          </div>
        </div>
      <QuestionTable/>
      </div>
    </>
  );
};

export default Questions;
