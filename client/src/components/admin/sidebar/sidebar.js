import React from 'react'

import './sidebar.css'
import { Menu } from 'antd'
import {
    AccountBookOutlined,
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
        <div className="sidebar">
            <Menu
                mode="inline"
                onClick={({key}) => {
                    navigate(key)
                }}
                items={[
                    { label: "Home", key: "home"},
                    { label: "Account", key: "account", icon: <AccountBookOutlined /> },
                    { label: "User", key: "user", icon: <UserOutlined /> },
                    { label: "Tour", key: "tour", icon: <ContactsOutlined />},
                    { label: "Destination", key: "destination", icon: <EnvironmentOutlined />},
                    { label: "Transportation", key: "transportation", icon: <CarOutlined />},
                    { label: "Accomodation", key: "accomodation", icon:<HomeOutlined /> },
                    { label: "Dining Place", key: "dining", icon: <CoffeeOutlined />},
                    { label: "Payment", key: "payment", icon: <CreditCardOutlined /> },
                ]}
            ></Menu>
        </div>
    )
}
export default Sidebar