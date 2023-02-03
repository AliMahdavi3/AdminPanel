import React, { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import { getAllPermissionsServices } from "../../services/user";

const PermissionTable = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    {field: "id", title: "#"},
    {field: "title", title: "عنوان"},
    {field: "description", title: "توضیحات"},
    {field: "category", title: "عنوان دسته"},
  ];

  const searchParams = {
    title: "عنوان",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "description"
  };

  const handleGetAllPermissions = async () => {
      setLoading(true);
      const res = await getAllPermissionsServices();
      res && setLoading(false);
      if (res.status === 200) {
        setData(res.data.data);
      };
  };

  useEffect(()=>{
    handleGetAllPermissions();
  },[]);



  return (
    <PaginatedTable
      data={data}
      loading={loading}
      numOfPage={8}
      dataInfo={dataInfo}
      searchParams={searchParams}
    >
    
    
    </PaginatedTable>
  );
};

export default PermissionTable;
