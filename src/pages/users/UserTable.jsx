import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginatedDataTable from "../../components/PaginatedDataTable";
import { Alert, Confirm } from "../../utils/Alert";
import AddButtonLink from "../../components/AddButtonLink";
import Actions from "./additionalTable/Actions";
import {deleteUserService, getAllPaginatedUsersService } from "../../services/user";
import { Outlet } from "react-router-dom";
import Roles from "./Roles";

const UserTable = () => {
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
    { field: "user_name", title: "نام کاربری" },
    {
      field: null,
      title: "نام",
      elements: (rowData) => `${rowData.first_name || ""} ${rowData.last_name || ""}`,
    },
    {
      field: null,
      title: "نقش",
      elements: (rowData) => <Roles rowData={rowData}/>,
    },
    { field: "phone", title: "شماره تلفن" },
    { field: "email", title: "ایمیل" },
    {
      field: null,
      title: "جنسیت",
      elements: (rowData) => rowData.gender == 1 ? "آقا" : "خانم",
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} handleDeleteUser={handleDeleteUser}/>,
    },
  ];

  const handleGetUsers = async (page, count, char) => {
      setLoading(true);
      const res = await getAllPaginatedUsersService(page, count, char);
      res && setLoading(false);
      if (res.status === 200) {
        setData(res.data.data.data);
        setPageCount(res.data.last_page);
      };
  };

  const handleSearch = (char) => {
    setSearchChar(char);
    handleGetUsers(1, countOnPage, char);
  };

  const handleDeleteUser = async (user) => {
    if ( await Confirm("حذف کاربر", `ایا از حذف ${user.title}اطمینان دارید ؟`)  ) {
      const res = await deleteUserService(user.id);
      if (res.status === 200) {
        Alert("انجام شد!", res.data.message, "success");
        handleGetUsers(currentPage, countOnPage, searchChar);
      };
    };
  };

  useEffect(() => {
    handleGetUsers(currentPage, countOnPage, searchChar);
  }, [currentPage]);

  return (
    <>
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
        <AddButtonLink href="/user/add-user" />
        <Outlet context={{setData}}/>
      </PaginatedDataTable>
    </>
  );
};

export default UserTable;
