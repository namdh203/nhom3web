import React, { useState } from "react";
import { Modal } from "antd";
import "./notification.css";

const Notification = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        zIndex="2000"
      >
        <div className="notice-wrapper" style={{ width: "100%" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/943/943593.png"
            className="img-fluid modal-notice info"
            alt="Responsive"
            style={{ display: `${props.type === "info" ? "block" : "none"}` }}
          />
        </div>
        <img
          src="https://www.publicdomainpictures.net/pictures/360000/nahled/nein-symbol-rot-warnung.png"
          className="img-fluid modal-notice warn"
          alt="Responsive"
          style={{ display: `${props.type === "warn" ? "block" : "none"}` }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/2048px-OOjs_UI_icon_alert-yellow.svg.png"
          className="img-fluid modal-notice error"
          alt="Responsive"
          style={{ display: `${props.type === "error" ? "block" : "none"}` }}
        />

        <h1 className="modal-msg">{props.msg}</h1>
      </Modal>
    </>
  );
};
export default Notification;
