import TourSummary from "./info_summary/info_summary";
import Discount from "./discount/discount"

import React, { Component } from 'react';
import Layout from "antd/es/layout/layout";

class Payment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = "https://d30w0v1mttprqz.cloudfront.net/img/features/payment/payment-1.svg";
        return (
            <Layout className="row">
                <TourSummary style={
                    {
                        width: "50vw"
                    }
                }></TourSummary>

                <div className="row mb-5" style={
                    {
                        margin: "0 25vw",
                        width: "55vw"
                    }
                }>
                    <div className="col-4">
                        <Discount></Discount>
                    </div>

                    <div className="col-4">
                        <Discount></Discount>
                    </div>
                    <div className="col-4">
                        <Discount></Discount>
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
}

export default Payment;