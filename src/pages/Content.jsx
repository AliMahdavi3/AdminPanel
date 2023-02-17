import React from "react";
import { Routes, Route } from "react-router-dom";
import PermComponent from "../components/PermComponent";
import { useHasPermissions } from "../hook/permissionsHook";
import Logout from "./auth/Logout";
import Brands from "./brands/Brands";
import CartEdit from "./cart/CartEdit";
import AddAttributes from "./category/attr/AddAttributes";
import Category from "./category/Category";
import CategoryChildren from "./category/CategoryChildren";
import Colors from "./colors/Colors";
import Comment from "./comment/Comment";
import Dashboard from "./dashboard/Dashboard";
import AddDiscount from "./discount/AddDiscount";
import Discount from "./discount/Discount";
import Guaranties from "./guaranties/Guaranties";
import ManageDelivery from "./managedelivery/ManageDelivery";
import Orders from "./orders/Orders";
import Permissions from "./permissions/Permissions";
import AddProduct from "./product/AddProduct";
import ProductGallery from "./product/gallery/ProductGallery";
import Product from "./product/Product";
import SetAttribute from "./product/setAttr/SetAttribute";
import Questions from "./questions/Questions";
import AddRoles from "./roles/AddRoles";
import Roles from "./roles/Roles";
import AddUser from "./users/AddUser";
import User from "./users/User";
import AddManageDelivery from "./managedelivery/AddManageDelivery";
import AddCart from "./cart/AddCart";

const Content = () => {

    const hasPermCategory = useHasPermissions("read_categories");
    const hasPermDiscount = useHasPermissions("read_discounts");
    const hasPermUser = useHasPermissions("read_users");
    const hasPermRole = useHasPermissions("read_roles");
    const hasPermDelivery = useHasPermissions("read_deliveries");
    const hasPermCarts = useHasPermissions("read_carts");
    const hasPermOrders = useHasPermissions("read_orders");

  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {hasPermCategory && (
            <Route path="/Categories" element={<Category />} >
              <Route path=":categoryId" element={<CategoryChildren/>}/>
            </Route>
          )}

          <Route path="/Categories/:categoryId/atrributes"
           element={<PermComponent component={<AddAttributes />} pTitle="read_category_attrs" />} />
          <Route path="/Product" element={<PermComponent component={<Product />} pTitle="read_products" />} />
          <Route path="/product/add-product" element={<PermComponent component={<AddProduct />} pTitle="create_product" />} />
          <Route path="/product/set-attr" element={<PermComponent component={<SetAttribute />} pTitle="create_product_attr"/>} />
          <Route path="/product/gallery" element={<PermComponent component={<ProductGallery />} pTitle="create_product_image"/>} />
          <Route path="/Colors" element={<PermComponent component={<Colors />} pTitle="read_colors"/>} />
          <Route path="/Guaranties" element={<PermComponent component={<Guaranties />} pTitle="read_guaranties"/>}  />
          <Route path="/Brands" element={<PermComponent component={<Brands />} pTitle="read_brands"/>}  />

          {hasPermDiscount && (
            <Route path="/Discounts" element={<Discount />} >
              <Route path="add-discount-code"  element={<PermComponent component={<AddDiscount />} pTitle="create_discount"/>}/>
            </Route>
           )};
          
          {hasPermCarts && (
            <Route path="/CartEdit" element={<CartEdit />} >
              <Route path="add-cart" element={<PermComponent component={<AddCart/>} pTitle="create_cart"/>}/>
            </Route>
          )};

          {hasPermCarts && (
            <Route path="/Orders" element={<Orders />} >
              <Route path="add-order" element={<PermComponent component={<AddCart/>} pTitle="create_cart"/>}/>
            </Route>
          )};


          {hasPermDelivery && (
          <Route path="/ManageDelivery" element={<ManageDelivery />}>
              <Route  path="add-delivery" element={<PermComponent component={<AddManageDelivery/>} pTitle="create_delivery" />}/>
          </Route>
          )}

          {hasPermUser && (
              <Route path="/user" element={<User />} >
                <Route path="add-user" element={<PermComponent component={<AddUser/>} pTitle="create_user" />}/>
            </Route>
           )};

          {hasPermRole && (
            <Route path="/Roles" element={<Roles />} >
              <Route path="add-role" element={<PermComponent component={<AddRoles/>} pTitle="create_role"/>}/>
            </Route>
          )}


          <Route path="/Permissions" element={<PermComponent component={<Permissions />} pTitle="read_permissions"/>} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </section>
    </>
  );
};

export default Content;
