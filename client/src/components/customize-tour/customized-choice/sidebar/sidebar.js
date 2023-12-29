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
    CreditCardOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="sidebar-customize" style={{"border-right": "0.025px solid #333"}}>
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
                    { label: "Activities", key: "act", icon: <CoffeeOutlined /> },
                ]}
            ></Menu>
            <div className="back-btn" onClick={() => {
                window.location.href = localStorage.getItem("preUrl")
            }}>Back to itinerary</div>
        </div>
    )
}
export default Sidebar