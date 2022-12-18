import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <div id="my-sidebar">
          <div className="d-flex flex-column bg-light">
            <button className="close-btn fs-4" onClick={handleSidebar}>
              Close <i class="bi bi-x-square-fill text-danger"></i>
            </button>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
            <a href="#">Content</a>
            <a href="#">home</a>
            <a href="#">ooooo</a>
          </div>
        </div>
      ) : (
        <div id="main">
          <div>

            <button id="openNav" className="" onClick={handleSidebar}>
            <i className="bi bi-list-columns fs-1"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
