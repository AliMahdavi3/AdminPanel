import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import {
  deleteGuarantiesService,
  getAllGuarantiesService,
} from "../../services/guaranties";
import { Alert, Confirm } from "../../utils/Alert";
import AddGuaranties from "./AddGuaranties";
import Actions from "./tableAdditional/Actions";

const GuarantiesTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [guaranteeToEdit, setGuaranteeToEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضیحات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "length_unit", title: "واحد" },
  ];

  const additionField = [
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          handleDeleteGuarantee={handleDeleteGuarantee}
          setGuaranteeToEdit={setGuaranteeToEdit}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllGuarantees = async () => {
    setLoading(true);
    const res = await getAllGuarantiesService();
    res && setLoading(false);
    console.log(res);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteGuarantee = async (guarantee) => {
    if (
      await Confirm(
        "حذف گارانتی",
        `ایا از حذف ${guarantee.title} اطمینان دارید ؟ `
      )
    ) {
      const res = await deleteGuarantiesService(guarantee.id);
      if (res.status === 200) {
        Alert("انجام شد!", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != guarantee.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllGuarantees();
  }, []);

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        loading={loading}
        numOfPage={5}
      >
        <AddGuaranties
          setData={setData}
          guaranteeToEdit={guaranteeToEdit}
          setGuaranteeToEdit={setGuaranteeToEdit}
        />
      </PaginatedTable>
      {/* <table className="table table-responsive text-center table-hover table-style-product table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>عنوان گارانتی</th>
            <th>مدت گارانتی</th>
            <th>توضیحات</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>گارانتی 1</td>
            <td>12 ماه</td>
            <td>توضیحات اجمالی در مورد این گارانتی</td>
            <td>
              <i
                className="bi bi-x fs-4 text-danger mx-1 pointer"
                title="حذف گارانتی"
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
      </nav> */}
    </>
  );
};

export default GuarantiesTable;
