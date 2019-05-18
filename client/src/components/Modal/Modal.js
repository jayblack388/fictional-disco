import React from "react";
import ReactModal from "react-modal";

import Icon from "../Icon";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  content: {
    overflow: "visible",
    width: "40%",
    height: "fit-content",
    top: "50%",
    transform: "translate(70%, -50%)",
    fontSize: "1.4rem"
  }
};

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

const Modal = ({
  contentLabel,
  show,
  onClose,
  className,
  header,
  children,
  style
}) => (
  <ReactModal
    isOpen={show}
    onRequestClose={onClose}
    style={style || modalStyles}
    contentLabel={contentLabel}
  >
    <div className={className}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="header font-weight-bold" style={{ fontSize: "1.8rem" }}>
          {header}
        </div>
        <div style={{ cursor: "pointer" }} onClick={onClose}>
          <Icon icon="close" style={{ fontSize: "2rem" }} />
        </div>
      </div>
      {children}
    </div>
  </ReactModal>
);

export default Modal;
