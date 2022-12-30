import React from "react";
import { useState } from "react";
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
      <div className="navbar fixed-top mb-5 bg-dark">
      <div className="sidebar-btn">
          <button onClick={handleSidebar}>
            <i className="bi bi-layout-text-sidebar"></i>
          </button>
        </div>
        <h2 className="text-light">
          Panel<span>Admin</span>
        </h2>

        <div className="nav-icons">
          <button>
            <i className="bi bi-bell-fill"></i>
          </button>
          <button>
            <i className="bi bi-search"></i>
          </button>
          <button>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
      {open ? (
        <div className="sidebar" style={{right: open ? "0px" : "-250px" }}>
          <div className="close-btn-sidebar m-2">
            <button onClick={handleSidebar}>
              <i className="bi bi-x-octagon-fill"></i>
            </button>
            <h3 className="sidebar-logo">A<span>P</span></h3>
          </div>
          <Avatar imgPath="./assets/image/avatar.png"/>
          <div className="sidebar-links mt-3">
            <SidebarItems icon="bi bi-speedometer2" title="داشبورد" />
            <TitleGroup title="فروشگاه" />
            <div className="d-flex flex-column">
              <SidebarItems
                icon="bi bi-card-list"
                title="مدیریت گروه محصولات"
              />
              <SidebarItems icon="bi bi-list" title="مدیریت محصول" />
              <SidebarItems icon="bi bi-behance" title="مدیریت برند" />
              <SidebarItems
                icon="bi bi-bookmark-check-fill"
                title="مدیریت گارانتی ها"
              />
              <SidebarItems icon="bi bi-palette" title="مدیریت رنگ ها" />
              <SidebarItems icon="bi bi-disc" title="مدیریت تخفیف ها" />
            </div>
            <TitleGroup title="سفارشات و سبد" />

            <div className="d-flex flex-column">
              <SidebarItems icon="bi bi-bag-plus" title="مدیریت سبد ها" />
              <SidebarItems icon="bi bi-cart" title="مدیریت سفارشات" />
              <SidebarItems icon="bi bi-send-check" title="مدیریت نحوه ارسال" />
            </div>
            <TitleGroup title="کاربران و همکاران" />

            <div className="d-flex flex-column">
              <SidebarItems icon="bi bi-people" title="مشاهده کاربران" />
              <SidebarItems icon="bi bi-person-rolodex" title="نقش ها" />
              <SidebarItems icon="bi bi-collection" title="مجوز ها" />
            </div>
            <TitleGroup title="ارتباطات" />

            <div className="d-flex flex-column">
              <SidebarItems icon="bi bi-question-circle" title="سوال ها" />
              <SidebarItems icon="bi bi-chat" title="نظرات" />
            </div>
          </div>
        </div>
      ) : (
        <div>

        </div>
      )}
    </>
  );
};

export default Sidebar;
