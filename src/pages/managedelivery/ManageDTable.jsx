import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddButtonLink from "../../components/AddButtonLink";
import PaginatedTable from "../../components/PaginatedTable";
import { deleteDeliveryService, getAllDeliveriesService } from "../../services/delivery";
import { Alert, Confirm } from "../../utils/Alert";
import Actions from "./additionalTable/Actions";

const ManageDTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "amount", title: "هزینه" },
    {
        field: null,
        title: "مدت ارسال",
        elements: (rowData) => rowData.time + " " + rowData.time_unit,
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions  rowData={rowData} handleDeleteDeliveries={handleDeleteDeliveries}  />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllDeliveries = async () => {
    setLoading(true);
    const res = await getAllDeliveriesService();
    setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteDeliveries = async (delivery) => {
    if (
      await Confirm(delivery.title, "آیا از حذف این کد تخفیف اطمینان دارید؟")
    ) {
      const res = await deleteDeliveryService(delivery.id);
      if (res.status === 200) {
        Alert("حذف شد...!", res.data.message, "success");
        setData((old) => old.filter((d) => d.id != delivery.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllDeliveries();
  }, []);
  return (
    <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPage={8}
        searchParams={searchParams}
        loading={loading}
      >
            <AddButtonLink href={"/ManageDelivery/add-delivery"} />
            <Outlet context={{ setData }} />
    </PaginatedTable>
  );
};

export default ManageDTable;
