import React from "react";

import "./sidebar.css";
import { Menu } from "antd";
import {
  UserOutlined,
  ContactsOutlined,
  EnvironmentOutlined,
  CarOutlined,
  HomeOutlined,
  SmileOutlined,
  CoffeeOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div
      className="sidebar"
      style={{
        "border-right": "0.025px solid #333",
        backgroundColor: "#001529",
        color: "#fff",
      }}
    >
      <div className="admin-info">
        <div className="be-img-comment admin">
          <a href="blog-detail-2.html">
            <img
              src={JSON.parse(localStorage.getItem("user")).avatar}
              alt=""
              className="be-ava-comment"
              style={{ backgroundColor: "#fff" }}
            />
          </a>
        </div>
        <h3>{JSON.parse(localStorage.getItem("user")).name}</h3>
        <p>{JSON.parse(localStorage.getItem("user")).email}</p>
      </div>
      <Menu
        mode="inline"
        onClick={({ key }) => {
          navigate(key);
        }}
        theme="dark"
        style={{ "border-right": "none" }}
        items={[
          { label: "Account", key: "account", icon: <UserOutlined /> },
          { label: "Tour", key: "tour", icon: <ContactsOutlined /> },
          {
            label: "Destination",
            key: "destination",
            icon: <EnvironmentOutlined />,
          },
          {
            label: "Transportation",
            key: "transportation",
            icon: <CarOutlined />,
          },
          {
            label: "Accommodation",
            key: "accommodation",
            icon: <HomeOutlined />,
          },
          { label: "Activity", key: "activity", icon: <SmileOutlined /> },
          { label: "Dining Place", key: "dining", icon: <CoffeeOutlined /> },
          { label: "Payment", key: "payment", icon: <CreditCardOutlined /> },
        ]}
      ></Menu>
    </div>
  );
}
export default Sidebar;
