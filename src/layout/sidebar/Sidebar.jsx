import React from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Avatar from "./Avatar";
import SidebarItems from "./SidebarItems";
import TitleGroup from "./TitleGroup";


const Sidebar = () => {

  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar handleSidebar={handleSidebar}/>
      {open ? (
        <div className="sidebar" style={{ right: open ? "-10px" : "-250px" }}>
          <div className="close-btn-sidebar m-2">
            <button onClick={handleSidebar}>
              <i className="bi bi-x-octagon-fill"></i>
            </button>
            <h3 className="sidebar-logo">
              A<span>P</span>
            </h3>
          </div>
          <Avatar imgPath="./assets/image/avatar.png" />
          <div className="sidebar-links mt-3">
            <SidebarItems
              targetPath="/"
              icon="bi bi-speedometer2"
              title="داشبورد"
            />
            <TitleGroup title="فروشگاه" />
            <div className="d-flex flex-column">
              <SidebarItems
                targetPath="/Categories"
                icon="bi bi-card-list"
                title="مدیریت دسته بندی محصولات"
              />
              <SidebarItems
                targetPath="/product"
                icon="bi bi-list"
                title="مدیریت محصولات"
              />
              <SidebarItems
                targetPath="/Brands"
                icon="bi bi-behance"
                title="مدیریت برند"
              />
              <SidebarItems
                targetPath="/Guaranties"
                icon="bi bi-bookmark-check-fill"
                title="مدیریت گارانتی ها"
              />
              <SidebarItems
                targetPath="/colors"
                icon="bi bi-palette"
                title="مدیریت رنگ ها"
              />
              <SidebarItems
                targetPath="/discount"
                icon="bi bi-disc"
                title="مدیریت تخفیف ها"
              />
            </div>
            <TitleGroup title="سفارشات و سبد" />

            <div className="d-flex flex-column">
              <SidebarItems
                targetPath="/cartEdit"
                icon="bi bi-bag-plus"
                title="مدیریت سبد ها"
              />
              <SidebarItems
                targetPath="/orders"
                icon="bi bi-cart"
                title="مدیریت سفارشات"
              />
              <SidebarItems
                targetPath="/ManageDelivery"
                icon="bi bi-send-check"
                title="مدیریت نحوه ارسال"
              />
            </div>
            <TitleGroup title="کاربران و همکاران" />

            <div className="d-flex flex-column">
              <SidebarItems
                targetPath="/user"
                icon="bi bi-people"
                title="مشاهده کاربران"
              />
              <SidebarItems
                targetPath="/Roles"
                icon="bi bi-person-rolodex"
                title="نقش ها"
              />
              <SidebarItems
                targetPath="/Permissions"
                icon="bi bi-collection"
                title="مجوز ها"
              />
            </div>
            <TitleGroup title="ارتباطات" />

            <div className="d-flex flex-column">
              <SidebarItems
                targetPath="/Questions"
                icon="bi bi-question-circle"
                title="سوال ها"
              />
              <SidebarItems
                targetPath="/Comment"
                icon="bi bi-chat"
                title="نظرات"
              />
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
