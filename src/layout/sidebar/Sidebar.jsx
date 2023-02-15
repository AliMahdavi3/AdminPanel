import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Avatar from "./Avatar";
import SidebarItems from "./SidebarItems";
import TitleGroup from "./TitleGroup";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    setOpen(!open);
  };
  const user = useSelector(state=>state.usersReducer.data)


  return (
    <>
      <Navbar handleSidebar={handleSidebar} />
      {open ? (
        <div className="sidebar" style={{ right: open ? "-10px" : "-250px" }}>
          <div className="close-btn-sidebar m-2">
            <button onClick={handleSidebar}>
              <i className="bi bi-x-octagon-fill"></i>
            </button>
            <h3 className="sidebar-logo">  A<span>P</span>  </h3>
          </div>
            {/* ================================================================= */}
          <Avatar imgPath={user.image || "./assets/image/avatar.png" }/>
            {/* ================================================================= */}
          <div className="sidebar-links mt-3">
            <SidebarItems   targetPath="/"   icon="bi bi-speedometer2"   title="داشبورد" pTitle="read_"/>
            {/* ================================================================= */}
            <div className="sidebar_items_scroll">
              <TitleGroup title="فروشگاه" pTitles={[  "read_categories",  "read_products",  "read_brands",  "read_guarantees", "read_colors", "read_discounts"]}/>
              <div className="d-flex flex-column">
                <SidebarItems  targetPath="/Categories" icon="bi bi-card-list" title="مدیریت دسته بندی محصولات" pTitle="read_categories"  />
                <SidebarItems  targetPath="/product"  icon="bi bi-list"  title="مدیریت محصولات"  pTitle="read_products"/>
                <SidebarItems  targetPath="/Brands"  icon="bi bi-behance"  title="مدیریت برند"  pTitle="read_brands"/>
                <SidebarItems  targetPath="/Guaranties"  icon="bi bi-bookmark-check-fill"  title="مدیریت گارانتی ها"  pTitle="read_guarantees"  />
                <SidebarItems  targetPath="/colors"  icon="bi bi-palette"  title="مدیریت رنگ ها"  pTitle="read_colors" />
                <SidebarItems  targetPath="/discounts"  icon="bi bi-disc"  title="مدیریت تخفیف ها"  pTitle="read_discounts"  />
              </div>
            {/* ================================================================= */}
              <TitleGroup title="سفارشات و سبد" pTitle={["read_carts",  "read_orders",  "read_deliveries"]}/>
              <div className="d-flex flex-column">
                <SidebarItems  targetPath="/cartEdit"  icon="bi bi-bag-plus"  title="مدیریت سبد ها"  pTitle="read_carts"  />
                <SidebarItems  targetPath="/orders"  icon="bi bi-cart"  title="مدیریت سفارشات"  pTitle="read_orders"  />
                <SidebarItems  targetPath="/ManageDelivery"  icon="bi bi-send-check"  title="مدیریت نحوه ارسال"  pTitle="read_deliveries"  />
              </div>
              {/* ================================================================= */}
              <TitleGroup title="کاربران و همکاران" pTitles={["read_users",  "read_roles",  "read_permissions"]}/>
              <div className="d-flex flex-column">
                <SidebarItems  targetPath="/user"  icon="bi bi-people"  title="مشاهده کاربران"  pTitle="read_users"  />
                <SidebarItems  targetPath="/Roles"  icon="bi bi-person-rolodex"  title="نقش ها"  pTitle="read_roles"  />
                <SidebarItems  targetPath="/Permissions"  icon="bi bi-collection"  title="مجوز ها"  pTitle="read_permissions"  />
              </div>
              {/* ================================================================= */}
              <TitleGroup title="ارتباطات" pTitles={["read_questions",  "read_comments"]}/>
              <div className="d-flex flex-column">
                <SidebarItems  targetPath="/Questions"  icon="bi bi-question-circle"  title="سوال ها"  pTitle="read_questions"  />
                <SidebarItems  targetPath="/Comment"  icon="bi bi-chat"  title="نظرات"  pTitle="read_comments"  />
              </div>
              {/* ================================================================= */}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Sidebar;
