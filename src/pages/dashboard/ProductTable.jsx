import React, { useEffect, useState } from "react";
import SpinnerLoad from "../../components/SpinnerLoad";
import { getFewerProductsService, toggleNotificationService } from "../../services/product";
import { Alert } from "../../utils/Alert";

const ProductTable = () => {

  const [fewerProduct, setFewerProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetFewerProducts = async () => {
    setLoading(true)
    const res = await getFewerProductsService();
    setLoading(false);
    if(res.status === 200) {
      const products = res.data.data;
      products.length > 0 ? setFewerProducts(products) : setFewerProducts([]);
    }
  }

  const handleTurnOffNotification = async (productId) => {
    const res = await toggleNotificationService(productId);
    if(res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      setFewerProducts(old=>old.filter(p=>p.id != productId))
    }
  }

  useEffect(()=>{
    handleGetFewerProducts()
  },[])

  return (
    <div className="col-12 col-md-6">
      <p className="text-center  mt-3 text-dark">  محصولات رو به اتمام  </p>

      {loading ? (<SpinnerLoad colorClass={"text-primary"}/>) : 
      fewerProduct.length === 0 ? (
        <strong className="text-primary d-flex justify-content-center">فعلا محصول روبه اتمام وجود ندارد</strong>
      ) : (
        <table className="table table-responsive text-center table-bordered table-hover">
          <thead className="table-secondary ">
            <tr className="fw-bold">
              <th>#</th>
              <th>دسته</th>
              <th>عنوان</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className="fw-bold table-style-product">
          {fewerProduct.map(p=>(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.categories[0]?.title}</td>
              <td>{p.title}</td>
              <td>{p.stock === 0 ? (
                <span className="text-danger">پایان یافته</span>
              ) : `روبه اتمام : (${p.stock})`}</td>
              <td>
                <i
                  className="bi bi-eye-slash-fill text-danger fs-4 fw-bold mx-1"
                  pTitle="update_product_notification"
                  title="نادیده گرفتن"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  onClick={()=>handleTurnOffNotification(p.id)}
                ></i> 
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      ) 
      }

    </div>
  );
};

export default ProductTable;
