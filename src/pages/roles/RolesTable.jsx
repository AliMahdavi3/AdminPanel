import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddButtonLink from "../../components/AddButtonLink";
import PaginatedTable from "../../components/PaginatedTable";
import { deleteRolesServices, getAllRolesServices } from "../../services/user";
import { Alert, Confirm } from "../../utils/Alert";
import Actions from "./additionalTable/Actions";

const RolesTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    {field: "id", title: "#"},
    {field: "title", title: "عنوان"},
    {field: "description", title: "توضیحات"},
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (<Actions rowData={rowData} handleDeleteRoles={handleDeleteRoles}/> )
    },
  ];

  const searchParams = {
    title: "عنوان",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "description"
  };

  const handleGetAllRoles = async () => {
      setLoading(true);
      const res = await getAllRolesServices();
      res && setLoading(false);
      if (res.status === 200) {
        setData(res.data.data);
      };
  };

  const handleDeleteRoles = async (role) => {
    if (await Confirm(role.title, 'آیا از حذف این نقش اطمینان دارید؟')) {
        const res = await deleteRolesServices(role.id)
        if (res.status === 200) {
          Alert('انجام شد', res.data.message, 'success')
          setData(old=>old.filter(d=>d.id != role.id))
        }
      }
  }

  useEffect(()=>{
    handleGetAllRoles();
  },[]);

  return (
    <PaginatedTable
      data={data}
      loading={loading}
      numOfPage={8}
      dataInfo={dataInfo}
      searchParams={searchParams}
    >

      <AddButtonLink href={"/roles/add-role"}/>
      <Outlet context={{setData}}/>
    </PaginatedTable>
  );
};

export default RolesTable;
