import React from "react";

const ProductTable = () => {
  return (
    <div className="col-12 col-md-6">
      <p className="text-center table-dashboard mt-3 text-dark">
        محصولات رو به اتمام
      </p>
      <table className="table table-responsive text-center table-hover">
        <thead className="table-secondary bg-warning ">
          <tr className="fw-bold">
            <th>#</th>
            <th>دسته</th>
            <th>عنوان</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="fw-bold bg-success bg-gradient">
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول فلان</td>
            <td>پایان یافته</td>
            <td>
              <i
                className="bi bi-x-circle text-danger fs-4 fw-bold mx-1"
                title="نادیده گرفتن"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول فلان</td>
            <td>رو به اتمام - 4</td>
            <td>
              <i
                className="bi bi-x-circle text-danger fs-4 fw-bold mx-1"
                title="نادیده گرفتن"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول فلان</td>
            <td>پایان یافته</td>
            <td>
              <i
                className="bi bi-x-circle text-danger fs-4 fw-bold mx-1"
                title="نادیده گرفتن"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول فلان</td>
            <td>پایان یافته</td>
            <td>
              <i
                className="bi bi-x-circle text-danger fs-4 fw-bold mx-1"
                title="نادیده گرفتن"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول فلان</td>
            <td>رو به اتمام - 2</td>
            <td>
              <i
                className="bi bi-x-circle text-danger fs-4 fw-bold mx-1"
                title="نادیده گرفتن"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
