import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import ModalContainer from "../../components/ModalContainer";
import { getSingleCartService } from "../../services/cart";
import { getAllDeliveriesService } from "../../services/delivery";
import { getOneDiscountService } from "../../services/discounts";
import { getSingleOrderService } from "../../services/orders";
import { Alert } from "../../utils/Alert";
import { convertDateToJalali } from "../../utils/convertDate";
import { initialValues, onSubmit, validationSchema } from "./core";
import { Formik, Form } from "formik"
import FormikControl from "../../components/form/FormikControl";
import { numberWithCommas } from "../../utils/numbers";
import SubmitButton from "../../components/form/SubmitButton";

const AddOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOrderId = location.state?.orderId;
  const { handleGetOrders } = useOutletContext();
  const [reInitialValues, setReInitialValues] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [allDeliveries, setAllDeliveries] = useState([]);
  const [selectedCartItemsInfo, setSelectedCartItemsInfo] = useState([]);

  const getAllDeliveries = async () => {
    const res = await getAllDeliveriesService();
    if (res.status === 200)
      setAllDeliveries(
        res.data.data.map((d) => ({
          id: d.id,
          value: d.title + "-" + d.amount,
        }))
      );
  };

  const handleGetCartsInfo = async (cartId) => {
    if (!cartId) return setSelectedCartItemsInfo([]);
    const res = await getSingleCartService(cartId);
    if (res.status === 200) {
      let products = [];
      const cart = res.data.data;
      if (cart.is_ordered) {
        setSelectedCartItemsInfo([]);
        return Alert("خطا", "این سبد در سفارش دیگری قرار دارد", "warning");
      }
      for (const item of cart.items) {
        products.push({
          id: item.id,
          product: item.product,
          guarantee: item.guarantee,
          color: item.color,
          count: item.count,
        });
      }
      setSelectedCartItemsInfo(products);
    }
  };

  const handleDiscountInfo = async (discountId) => {
    if (!discountId) return setDiscountPercent(0);
    const res = await getOneDiscountService(discountId);
    if(res.status === 200) setDiscountPercent(res.data.data.percent)
  }

  const getSelectedOrdersInfo = async () => {
    const res = await getSingleOrderService(selectedOrderId);
    if(res.status === 200) {
      const order = res.data.data;
      setReInitialValues({
        cart_id: order.cart_id,
        discount_id: order.discount_id || "",
        delivery_id: order.delivery_id,
        address: order.address,
        phone: order.phone,
        email: order.email || "",
        pay_at: order.pay_at ? convertDateToJalali(order.pay_at) : "",
        pay_card_number: order.pay_card_number || "",
        pay_bank: order.pay_bank || "",
      });
      let products = [];
      const cart = order.cart;
      for (const item of cart.items) {
        products.push({
          id : item.id,
          product : item.product,
          guarantee : item.guarantee,
          color : item.color,
          count : item.count,
          unit_price : item.unit_price,
        })
      }
      setSelectedCartItemsInfo(products)
    }
  }

  useEffect(()=>{
    getAllDeliveries();
    selectedOrderId && getSelectedOrdersInfo()
  },[])

  
  return (
      <ModalContainer
        className="show d-block"
        fullScreen={true}
        id={"add_order_modal"}
        title={selectedOrderId ? "جزییات سفارش" : "افزودن سفارش"}
        closeFunction={()=>navigate(-1)}
      >
        <div className="container">
          <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions)=>onSubmit(values, actions, navigate, handleGetOrders)}
          validationSchema={validationSchema}
          enableReinitialize
          >
            {formik => {
              return (
                <Form>
                  <div className="row my-1 justify-content-center">
                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="input"
                        type="number"
                        name="cart_id"
                        placeholder="کد سبد"
                        onBlur={(e)=>handleGetCartsInfo(e.target.value)}
                      />
                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="date"
                        formik={formik}
                        name="pay_at"
                        placeholder="تاریخ پرداخت"
                        initialDate={undefined}
                        yearsLimit={{from: 10, to: 0}}
                      />

                      <div className="col-12 col-md-4 col-lg-2 my-1">
                        <input
                          type="text"
                          className="form-control"
                          value={`مبلغ سبد : ${selectedCartItemsInfo.length > 0 ? numberWithCommas(selectedCartItemsInfo.map
                          (p=>p.count*(p.unit_price || p.product.price)).reduce((a, b)=>a+b)) : 0}`}
                          disabled/>
                      </div>

                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="input"
                        type="number"
                        name="discount_id"
                        placeholder="ای دی تخفیف"
                        onBlur={(e)=>handleDiscountInfo(e.target.value)}
                      />

                      <div className="col-12 col-md-4 col-lg-2 my-1">
                        <input type="text" className="form-Control" value={"درصد تخفیف :" + discountPercent} disabled/>
                      </div>

                      <div className="col-12"></div>
                          <FormikControl
                          className="col-12 col-md-10 my-1"
                          control="input"
                          type="text"
                          name="address"
                          placeholder="آدرس"
                        />

                      <div className="col-12"></div>

                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="select"
                        options={allDeliveries}
                        name="delivery_id"
                        firstItem="روش ارسال"
                      />
                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="input"
                        type="text"
                        name="phone"
                        placeholder="شماره تماس"
                      />
                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="input"
                        type="text"
                        name="email"
                        placeholder="ایمیل"
                      />

                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="input"
                        type="number"
                        name="pay_card_number"
                        placeholder="شماره کارت"
                      />

                      <FormikControl
                        className="col-12 col-md-4 col-lg-2 my-1"
                        control="input"
                        type="text"
                        name="pay_bank"
                        placeholder="نام بانک"
                      />

                    <hr className="mt-3" />
                  </div>

                  <div className="row">
                    {selectedCartItemsInfo.map(item=>(
                      <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                        <div className="input-group my-1 dir-ltr">
                          <span className="input-group-text text-end w-100 justify-content-center">
                            {item.product.title}
                            (قیمت واحد : {numberWithCommas(item.unit_price || item.product.price)})
                            (گارانتی : {item.guarantee?.title})
                            ({item.count} عدد)
                            <i className="bi bi-circle mx-1" style={{color : item.color?.code}}></i>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {
                    (selectedCartItemsInfo.length > 0 && !selectedOrderId) && (
                      <div className="text-center col-12 mt-4">
                        <SubmitButton/>
                      </div>
                    )
                  }
                
                </Form>
              )
            }}
          </Formik>
        </div>
      </ModalContainer>
  );
};

export default AddOrder;
