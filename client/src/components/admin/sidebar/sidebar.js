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
        <div className="sidebar" style={{"border-right": "0.025px solid #333"}}>
            <div className="admin-info">
                <div class="be-img-comment admin">
                    <a href="blog-detail-2.html">
                        <img src={JSON.parse(localStorage.getItem(localStorage.key(0))).avatar} alt="" class="be-ava-comment" />
                    </a>
                </div>
                <h3>{JSON.parse(localStorage.getItem(localStorage.key(0))).name}</h3>
                <p>{JSON.parse(localStorage.getItem(localStorage.key(0))).email}</p>
            </div>
            <Menu
                mode="inline"
                onClick={({ key }) => {
                    navigate(key)
                }}
                style={{"border-right": "none"}}
                items={[
                    { label: "Account", key: "account", icon: <UserOutlined /> },
                    { label: "Tour", key: "tour", icon: <ContactsOutlined /> },
                    { label: "Destination", key: "destination", icon: <EnvironmentOutlined /> },
                    { label: "Transportation", key: "transportation", icon: <CarOutlined /> },
                    { label: "Accommodation", key: "accommodation", icon: <HomeOutlined /> },
                    { label: "Dining Place", key: "dining", icon: <CoffeeOutlined /> },
                    { label: "Payment", key: "payment", icon: <CreditCardOutlined /> },
                ]}
            ></Menu>
        </div>
    )
}
export default Sidebar