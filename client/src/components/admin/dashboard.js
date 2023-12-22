import React from 'react';
import "./style.css"
import Sidebar from "./sidebar/sidebar"
import Content from './content/content';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
        <Sidebar></Sidebar>
        <Content></Content>
    </div >
  );
}
