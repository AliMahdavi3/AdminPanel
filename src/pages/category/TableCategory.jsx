import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import PaginatedTable from "../../components/PaginatedTable";
import {
  deleteCategoryService,
  getCategoryService,
} from "../../services/category";
import { Alert, Confirm } from "../../utils/Alert";
import { convertDateToJalali } from "../../utils/convertDate";
import AddCategory from "./AddCategory";
import Actions from "./tableAddition/Actions";
import ShowInMenu from "./tableAddition/ShowInMenu";

const TableCategory = () => {
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const handleGetCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategoryService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (rowData) => {
    if (
      await Confirm(
        "حذف دسته بندی",
        `ایا از حذف ${rowData.title} اطمینان داارید ؟`
      )
    ) {
      try {
        const res = await deleteCategoryService(rowData.id);
        if (res.status == 200) {
          setData(data.filter(d=>d.id !== rowData.id))
          Alert("انجام شد", res.data.message, "success");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          handleDeleteCategory={handleDeleteCategory}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <Outlet />
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={5}
        loading={loading}
      >
        <AddCategory setForceRender={setForceRender} />
      </PaginatedTable>
    </>
  );
};

export default TableCategory;
