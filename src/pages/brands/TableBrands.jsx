import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import { deleteBrandService, getAllBrandService } from "../../services/brand";
import { apiPath } from "../../services/httpService";
import { Alert, Confirm } from "../../utils/Alert";
import AddBrands from "./AddBrands";
import Actions from "./tableAdditional/Actions";

const TableBrands = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brandToEdit, setBrandToEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
    {
      field: null,
      title: "لوگو",
      elements: (rowData) =>
        rowData.logo ? (
          <img src={apiPath + "/" + rowData.logo} width="40" />
        ) : null,
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          handleDeleteBrands={handleDeleteBrands}
          rowData={rowData}
          setBrandToEdit={setBrandToEdit}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "original_name",
  };

  const handlGetAllBrands = async () => {
    setLoading(true);
    const res = await getAllBrandService();
    console.log(res);
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteBrands = async (brand) => {
    if (
      await Confirm(
        "حذف برند",
        `ایا از حذف ${brand.original_name} اطمینان دارید ؟`
      )
    ) {
      const res = await deleteBrandService(brand.id);
      if (res.status === 200) {
        Alert("انجام شد!", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != brand.id));
      }
    }
  };

  useEffect(() => {
    handlGetAllBrands();
  }, []);

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        searchParams={searchParams}
        numOfPage={5}
        loading={loading}
      >
        <AddBrands
          setData={setData}
          brandToEdit={brandToEdit}
          setBrandToEdit={setBrandToEdit}
        />
      </PaginatedTable>
    </>
  );
};

export default TableBrands;
