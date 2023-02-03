import React from "react";
import { createPortal } from "react-dom";

const ModalContainer = ({ children, fullScreen, title, id, className, closeFunction}) => {
  return createPortal(
    <>
      <div
        className={`modal fade background-smoke animate__animated animate__fadeIn animate__fast ${className || ""}` }
        id={id}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className={`modal-dialog animate__animated animate__fadeInDown animate__fast ${fullScreen ? "modal-fullscreen" : ""}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title flex-fill" id="exampleModalLabel">
              {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeFunction || null}
              ></button>
            </div>
            <div className="modal-body">
             {children}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeFunction || null}
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,

    document.getElementById("modals-root")
  );
};

export default ModalContainer;
