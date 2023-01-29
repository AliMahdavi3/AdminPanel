import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SpinnerLoad from "./SpinnerLoad";

const PaginatedDataTable = ({
  children,
  tableData,
  dataInfo,
  loading,
  pageCount,
  currentPage,
  setCurrentPage,
  searchParams,
  handleSearch,
}) => {
  const pageRange = 3;
  const [pages, setPages] = useState([]);

  let timeout;

  const handleSetSearchChar = (char) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleSearch(char);
    }, 1000);
  };

  useEffect(() => {
    let pArr = [];
    for (let i = 1; i <= pageCount; i++) pArr.push(i);
    setPages(pArr);
  }, [pageCount]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e) => handleSetSearchChar(e.target.value)}
            />
            <span className="input-group-text search-box">
              {searchParams.title}
            </span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>

      {/* ------------------------ SearchBox --------------------------- */}

      {loading ? (
        <SpinnerLoad colorClass={"text-primary"} />
      ) : tableData.length ? (
        <table className="table table-responsive text-center table-bordered table-hover table-style">
          <thead className="table-success">
            <tr>
              {dataInfo.map((i, index) => (
                <th key={i.field || `notField__${index}`}>{i.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((d) => (
              <tr key={d.id}>
                {dataInfo.map((i, index) =>
                  i.field ? (
                    <td key={i.field + "_" + d.id}>{d[i.field]}</td>
                  ) : (
                    <td key={d.id + "__" + i.id + "__" + index}>
                      {i.elements(d)}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center m-5 text-danger">هیچ رکوردی یافت نشد</h5>
      )}

      {pages.length > 1 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination">
            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == 1 ? "disabled" : ""
                }`}
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>

            {currentPage > pageRange ? (
              <li className="page-item">
                <span
                  className="page-link pointer me-1"
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </span>
              </li>
            ) : null}

            {pages.map((page) => {
              return page < currentPage + pageRange &&
                page > currentPage - pageRange ? (
                <li className="page-item" key={page}>
                  <span
                    className={`page-link pointer ${
                      currentPage == page ? "text-dark" : ""
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </span>
                </li>
              ) : null;
            })}

            {currentPage <= pageCount - pageRange ? (
              <li className="page-item">
                <span
                  className="page-link pointer ms-1"
                  onClick={() => setCurrentPage(pageCount)}
                >
                  {pageCount}
                </span>
              </li>
            ) : null}



            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == pageCount ? "disabled" : ""
                }`}
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default PaginatedDataTable;
