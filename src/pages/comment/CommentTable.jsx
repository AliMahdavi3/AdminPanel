import React from "react";

const CommentTable = () => {
  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered table-style-product">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>نام و نام خانوادگی</th>
            <th>نوع نظر</th>
            <th>برای</th>
            <th>قسمتی از متن</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>قاسم بساکی</td>
            <td>نظر</td>
            <td>محصول فلان</td>
            <td>قسمتی از متن نظر برای این محصول مثلا 100 کارکتر</td>
            <td>
              <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  فعال
                </label>
                <input
                  className="form-check-input pointer mx-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
            <td>1400/10/12</td>
            <td>
              <i
                className="bi bi-x fs-4 text-danger mx-1 pointer "
                title="حذف نظر"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CommentTable;
