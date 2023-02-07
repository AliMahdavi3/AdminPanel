import React from "react";
import { Routes, Route } from "react-router-dom";
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

const Content = () => {
  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Categories" element={<Category />} >
            <Route path=":categoryId" element={<CategoryChildren/>}/>
          </Route>
          <Route path="/Categories/:categoryId/atrributes" element={<AddAttributes />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/product/add-product" element={<AddProduct />} />
          <Route path="/product/set-attr" element={<SetAttribute />} />
          <Route path="/product/gallery" element={<ProductGallery />} />
          <Route path="/Colors" element={<Colors />} />
          <Route path="/Guaranties" element={<Guaranties />} />
          <Route path="/Brands" element={<Brands />} />


          <Route path="/Discounts" element={<Discount />} >
            <Route path="add-discount-code"  element={<AddDiscount/>}/>
          </Route>


          <Route path="/CartEdit" element={<CartEdit />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/ManageDelivery" element={<ManageDelivery />} />


          <Route path="/user" element={<User />} >
            <Route path="add-user" element={<AddUser/>}/>
          </Route>


          <Route path="/Roles" element={<Roles />} >
            <Route path="add-role" element={<AddRoles/>}/>
          </Route>


          <Route path="/Permissions" element={<Permissions />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </section>
    </>
  );
};

export default Content;
