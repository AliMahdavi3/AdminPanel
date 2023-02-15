import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({handleSidebar}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector(state=>state.usersReducer.data)
  
  return (
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

        <button className="list-offcanvs" onClick={handleShow}>
          <i className="bi bi-list"></i>
        </button>
        <Offcanvas placement={"end"} show={show} onHide={handleClose} className="offcan">
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <ul className="list-unstyled fs-4 pointer">
              <li className="my-3 text-center">
                <a href="#" className="text-dark">{user.full_name || user.user_name}</a>
              </li>
              <hr />
              <hr />
              <li className="my-3 ms-3">
                <i className="bi bi-speedometer2 mx-3"></i>
                <a href="#" className="text-dark">داشبورد</a>
              </li>
              <li className="my-3 ms-3">
                <i className="bi bi-send mx-3"></i>
                <a href="#" className="text-dark">تیکت ها</a>
              </li>
              <li className="my-3 ms-3">
                <i className="bi bi-chat-left-text-fill mx-3"></i>
                <a href="#" className="text-dark">پیام ها</a>
              </li>
              <hr className="mb-3"/>
            <Link className="link-a ms-3" to={"/Logout"}>
              <i className="bi bi-power mx-3"></i>
              <span>خروج</span>
            </Link>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      
    </div>
  );
};

export default Navbar;
