import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
const Navbar = ({handleSidebar}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
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
        <Offcanvas placement={"end"} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link className="link-a" to={"/Logout"}>خروج</Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      
    </div>
  );
};

export default Navbar;
