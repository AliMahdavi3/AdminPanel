import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <nav className="header fixed-top p-1">
        <ul className="list-unstyled d-flex justify-content-between align-items-center">
          <li className="li-menu d-flex">
            <button
              variant="primary"
              onClick={handleShow}
              className="me-2 text-light rotate-center"
            >
              <i className="bi bi-list col-1 col-sm-1 "></i>
            </button>
            <Offcanvas
              className="my-canvas"
              show={show}
              onHide={handleClose}
              placement={"start"}
            >
              <Offcanvas.Header closeButton>
                <h2 className="title">آموزشگاه کدیاد</h2>
              </Offcanvas.Header>
              <Offcanvas.Body className="canvas-body">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>خانه</span>
                        <i className="bi bi-house text-dark fs-3"></i>
                      </div>
                    </a>
                  </li>
                  <hr className="fw-bold" />
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>دوره ها</span>
                        <i className="bi bi-cast text-dark  fs-3"></i>
                      </div>
                    </a>
                  </li>
                  <hr className="fw-bold" />
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>مدرسین</span>
                        <i className="bi bi-person-bounding-box text-dark  fs-3"></i>
                      </div>
                    </a>
                  </li>
                  <hr className="fw-bold" />
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>مقالات</span>
                        <i className="bi bi-calendar-check-fill text-dark  fs-3"></i>
                      </div>
                    </a>
                  </li>
                  <hr className="fw-bold" />
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>بروز رسانی ها</span>
                        <i className="bi bi-box-arrow-in-up text-dark  fs-3"></i>
                      </div>
                    </a>
                  </li>
                  <hr className="fw-bold" />
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>درباره ما</span>
                        <i className="bi bi-file-earmark-text text-dark  fs-3"></i>
                      </div>
                    </a>
                  </li>
                  <hr className="fw-bold" />
                  <li>
                    <a href="#">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>پرسش و پاسخ</span>
                        <i className="bi bi-question-circle-fill text-dark  fs-3"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>

            <div className="box col-12">
              <form name="search">
                <input
                  type="text"
                  className="input"
                  name="txt"
                  onmouseout="this.value = ''; this.blur();"
                />
              </form>
              <i className="bi bi-search search"></i>
            </div>
          </li>
          <li>
            <a href="#" className="mighty col-1">
              <h2 className="col-1">MightyDeveloper</h2>
            </a>
          </li>
          <li className="li-menu d-flex">
            <details class="dropdown drop">
              <summary role="button">
                <a className="button me-2 text-light">
                  <i className="bi bi-bell-fill"></i>
                </a>
              </summary>

              <ul>
                <li>
                  <a href="#">
                    جلسه جدید سالیدیتی !
                    <img
                      src="./assets/image/log.png"
                      className="drop-img "
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    جلسه جدید جاوااسکریپت !
                    <img
                      src="./assets/image/js.png"
                      className="drop-img "
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    جلسه جدید css !
                    <img
                      src="./assets/image/css.png"
                      className="drop-img "
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </details>

            <button
              className="me-2 text-light rotate-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="bi bi-person-circle "></i>
            </button>

            <div
              className="offcanvas offcanvas-end"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-body">
                <button
                  type="button"
                  className="close-x"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="bi bi-x"></i>
                </button>
                <div className=" justify-content-center d-flex">
                  <img
                    src="./assets/image/avatar.png"
                    className="rounded-circle img-fluid img-user"
                    alt=""
                  />
                </div>
                <hr className="mt-4" />
                <div className="user-link px-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>داشبورد</span>
                          <i className="bi bi-speedometer2 fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>تغییر رمز</span>
                          <i className="bi bi-key-fill  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>دوره های شما</span>
                          <i className="bi bi-collection-play-fill  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>فاکتورها</span>
                          <i className="bi bi-calendar-check-fill  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>ویرایش</span>
                          <i className="bi bi-pencil-square  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>گفت وگو</span>
                          <i className="bi bi-chat-fill  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>کیف پول</span>
                          <i className="bi bi-wallet-fill  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>اعلانات</span>
                          <i className="bi bi-chat-dots-fill  fs-3"></i>
                        </div>
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>خروج</span>
                          <i className="bi bi-box-arrow-left fs-3"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
