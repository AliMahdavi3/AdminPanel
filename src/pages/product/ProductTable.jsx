import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginatedDataTable from "../../components/PaginatedDataTable";
import {
  deleteProductsService,
  getAllProductsService,
} from "../../services/product";
import { Alert, Confirm } from "../../utils/Alert";
import AddProduct from "./AddProduct";
import Actions from "./tableAdditional/Actions";
import AddButtonLink from "../../components/AddButtonLink";

const ProductTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // صفحه حال حاضر
  const [countOnPage, setCountOnPage] = useState(5); // تعداد محصول در هر صفحه
  const [pageCount, setPageCount] = useState(0); // تعداد کل صفحات

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
  };

  const dataInfo = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه محصولات",
      elements: (rowData) => rowData.categories[0]?.title,
    },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          handleDeleteProducts={handleDeleteProducts}
        />
      ),
    },
  ];

  const handleGetProducts = async (page, count, char) => {
    setLoading(true);
    const res = await getAllProductsService(page, count, char);
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
      setPageCount(res.data.last_page);
    }
  };

  const handleSearch = (char) => {
    setSearchChar(char);
    handleGetProducts(1, countOnPage, char);
  };

  const handleDeleteProducts = async (product) => {
    if (
      await Confirm("حذف محصول", `ایا از حذف ${product.title}اطمینان دارید ؟`)
    ) {
      const res = await deleteProductsService(product.id);
      if (res.status === 200) {
        Alert("انجام شد!", res.data.message, "success");
        handleGetProducts(currentPage, countOnPage, searchChar);
      }
    }
  };

  useEffect(() => {
    handleGetProducts(currentPage, countOnPage, searchChar);
  }, [currentPage]);

    return (
        <PaginatedDataTable
          tableData={data}
          dataInfo={dataInfo}
          searchParams={searchParams}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageCount={pageCount}
          handleSearch={handleSearch}
        >
          <AddButtonLink href="/product/add-product" />
        </PaginatedDataTable>
    );
};

export default ProductTable;
