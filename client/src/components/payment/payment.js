import TourSummary from "./info_summary/info_summary";
import Discount from "./discount/discount"
import { useLocation } from "react-router-dom";
import React, { Component } from 'react';
import Layout from "antd/es/layout/layout";

const Payment = () => {
    const location = useLocation();
    // Extract
    const {dataPackage} = location.state;

    const imageUrl = "https://d30w0v1mttprqz.cloudfront.net/img/features/payment/payment-1.svg";
    return (
        <Layout className="row">
            <TourSummary style={
                {
                    width: "50vw"
                }
            } dataPackage={dataPackage}></TourSummary>

            <div className="row mb-5" style={
                {
                    margin: "0 25vw",
                    width: "55vw",
                    paddingLeft: 0
                }
            }>
                <div className="col col-4 col-md-4">
                    <Discount discount={0} dataPackage={dataPackage}></Discount>
                </div>

                <div className="col col-4 col-md-4">
                    <Discount discount={10}  dataPackage={dataPackage}></Discount>
                </div>
                <div className="col col-4 col-md-4">
                    <Discount discount={20} dataPackage={dataPackage}></Discount>
                </div>
            </div>

            <img
                className="pt-5"
                src={imageUrl}
                alt="Payment Background"
                style={{
                    height: 'auto',
                    display: 'block',
                    margin: "0 25vw",
                    width: "50vw",
                    padding: "0"
                }}
            />

        </Layout>
    )
}

export default Payment;