import React from 'react'

import './sidebar.css'
import { Menu } from 'antd'
import {
    UserOutlined,
    ContactsOutlined,
    EnvironmentOutlined,
    CarOutlined,
    HomeOutlined,
    CoffeeOutlined,
    SmileOutlined,
    ArrowLeftOutlined,
    CreditCardOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="sidebar-customize" style={{"border-right": "0.025px solid #333"}}>
            <div className="back-btn" onClick={() => {
                window.location.href = localStorage.getItem("preUrl")
            }}>
                <ArrowLeftOutlined />
                {"          "} Back to itinerary
            </div>
            <Menu
                mode="inline"
                onClick={({ key }) => {
                    navigate(key)
                }}
                // theme="dark"
                style={{"border-right": "none", paddingTop: "20px"}}
                // selectedKeys="trans"
                items={[
                    { label: "Transportations", key: "trans", icon: <CarOutlined /> },
                    { label: "Accommodations", key: "accom", icon: <HomeOutlined /> },
                    { label: "Restaurants", key: "rest", icon: <CoffeeOutlined /> },
                    { label: "Activities", key: "act", icon: <SmileOutlined /> },
                ]}
            ></Menu>
        </div>
    )
}
export default Sidebar