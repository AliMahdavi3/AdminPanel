import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import { deleteColorService, getAllColorService } from "../../services/color";
import { Alert, Confirm } from "../../utils/Alert";
import AddColors from "./AddColors";
import Actions from "./tableAdditional/Actions";

const ColorsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد رنگ" },
    {
      field: null,
      title: "رنگ",
      elements: (rowData) => (
        <div
          className="w-100 h-100 d-block"
          style={{ background: rowData.code, color: rowData.code }}
        >
          ...
        </div>
      ),
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setColorToEdit={setColorToEdit}
          handleDeleteColors={handleDeleteColors}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetColors = async () => {
    setLoading(true);
    const res = await getAllColorService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteColors = async (color) => {
    if (await Confirm("حذف رنگ", `ایا از حذف ${color.title} اطمینان دارید؟`)) {
      const res = await deleteColorService(color.id);
      if (res.status === 200) {
        Alert("انجام شد !", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != color.id));
      }
    }
  };

  useEffect(() => {
    handleGetColors();
  }, []);

  return (
    <>
      <PaginatedTable
        data={data}
        loading={loading}
        dataInfo={dataInfo}
        searchParams={searchParams}
        numOfPage={5}
      >
        <AddColors
          setData={setData}
          colorToEdit={colorToEdit}
          setColorToEdit={setColorToEdit}
        />
      </PaginatedTable>
    </>
  );
};

export default ColorsTable;
