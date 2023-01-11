import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SpinnerLoad from "./SpinnerLoad";

const PaginatedTable = ({
  children,
  data,
  dataInfo,
  additionField,
  searchParams,
  numOfPage,
  loading,
}) => {
  const [tableData, setTableData] = useState([]);
  const [initData, setInitData] = useState(data);
  const [currentPage, setCurrentPage] = useState(2);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(
      data.filter((d) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar, data]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e) => setSearchChar(e.target.value)}
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

      {
      
      loading ? (
        <SpinnerLoad colorClass={'text-primary'}/>
      ) : data.length ? (
        <table className="table table-responsive text-center table-bordered table-hover table-style">
          <thead className="table-success">
            <tr>
              {dataInfo.map((i) => (
                <th key={i.field}>{i.title}</th>
              ))}

              {additionField
                ? additionField.map((a, index) => (
                    <th key={a.id + "__" + index}>{a.title}</th>
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            {tableData.map((d) => (
              <tr key={d.id}>
                {dataInfo.map((i) => (
                  <td key={i.field + "_" + d.id}>{d[i.field]}</td>
                ))}
                {additionField
                  ? additionField.map((a, index) => (
                      <td key={a.id + "___" + index}>{a.elements(d)}</td>
                    ))
                  : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center m-5 text-danger">هیچ دسته بندی یافت نشد</h5>
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
            {pages.map((page) => (
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
            ))}
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

export default PaginatedTable;
