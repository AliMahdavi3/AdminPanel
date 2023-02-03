import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedTable from "../../../components/PaginatedTable";
import PrevPageButton from "../../../components/PrevPageButton";
import {
  deleteCategoryAttrService,
  getCategoryAttrService,
} from "../../../services/attrService";
import AttrAction from "./AttrAction";
import ShowInFilter from "./ShowInFilter";
import { Alert, Confirm } from "../../../utils/Alert";
import AddAttrFormik from "./AddAttrFormik";

const AddAttributes = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attrToEdit, setAttrToEdit] = useState(null);
  const [reInitialValues, setReInitialValues] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "واحد" },
    {
      field: null,
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <AttrAction
          rowData={rowData}
          attrToEdit={attrToEdit}
          setAttrToEdit={setAttrToEdit}
          handleDeleteCategoryAttr={handleDeleteCategoryAttr}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetCategoryAttr = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrService(location.state.categoryData.id);
      if (res.status === 200) {
        console.log(res);
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategoryAttr = async (attr) => {
    if (await Confirm(`حذف${attr.title}`, "ایا از حذف رکورد اطمینان دارید ؟")) {
      try {
        const res = await deleteCategoryAttrService(attr.id);
        if (res.status == 200) {
          Alert("انجام شد", res.data.message, "success");
          setData((lastData) => [...lastData].filter((d) => d.id != attr.id));
        }
      } catch (error) {
        Alert("متاسفم!", "مشکلی از سمت سرور رخ داده است!", "danger");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleGetCategoryAttr();
  }, []);

  useEffect(() => {
    if (attrToEdit)
      setReInitialValues({
        title: attrToEdit.title,
        unit: attrToEdit.unit,
        in_filter: attrToEdit.in_filter ? true : false,
      });
    else setReInitialValues(null);
  }, [attrToEdit]);

  return (
    <>
      <div className="container container-fluid category-style">
        <h4 className="text-center my-3 category-text">
          مدیریت ویژگی های دسته بندی
        </h4>
        <h5 className="text-center my-3  category-text">
          ویژگی های :
          <span className="text-dark">{location.state.categoryData.title}</span>
        </h5>
        <div className="row justify-content-center">
          <AddAttrFormik
            reInitialValues={reInitialValues}
            location={location}
            setData={setData}
            attrToEdit={attrToEdit}
            setAttrToEdit={setAttrToEdit}
          />

          <hr />

          <PaginatedTable
            data={data}
            dataInfo={dataInfo}
            searchParams={searchParams}
            numOfPage={5}
            loading={loading}
          >
            <PrevPageButton />
          </PaginatedTable>
        </div>
      </div>
    </>
  );
};

export default AddAttributes;
