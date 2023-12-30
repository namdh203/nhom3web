import React from "react";
import Layout from "antd/es/layout/layout";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { AccountBookFilled } from "@ant-design/icons";

const { Paragraph, Title } = Typography;
const { Content } = Layout;

export default class Discount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: this.props.discount,
      dataPackage: this.props.dataPackage,
      currency: "$",
    };
  }

  render() {
    const { discount, currency, dataPackage } = this.state;
    let totalCost = dataPackage.totalCost;

    const actualCost = (totalCost * (100 - discount)) / 100;
    const lgCashAmount =
      "https://img.freepik.com/premium-vector/big-money-concept-big-pile-cash-hundreds-dollars-gold-coins-with-dollar-sign-isometry-vector_517145-472.jpg?w=1380";
    const mdCashAmount =
      "https://cdn-icons-png.flaticon.com/512/733/733186.png";
    const smCashAmount =
      "https://i.pinimg.com/736x/da/b5/18/dab5182d48a80ec5948361a3aa272580.jpg";
    let cashImage;
    if (discount < 10) {
      cashImage = lgCashAmount;
    } else if (discount < 20) {
      cashImage = mdCashAmount;
    } else {
      cashImage = smCashAmount;
    }
    return (
      <div>
        <Layout style={{paddingLeft: 0}}>
          <Content className="row" style={{paddingLeft: "10px"}}>
            <div className="col-10 bg-white border border-light rounded shadow-lg row d-flex justify-content-center">
              <div className="col-6 m-2 p-2">
                <img
                  src={cashImage}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                ></img>
              </div>

              <Paragraph className="text-center m-3" type="secondary">
                Seal the deal with {100 - discount}% payment
              </Paragraph>

              <Title level={3} className="text-center mt-0" type="secondary">
                {actualCost} {currency}
              </Title>

              <div className="d-flex justify-content-center mb-3">
                <Link
                  to={{ pathname: "/payment/payment-step-1" }}
                  state={{
                    dataPackage,
                    discount,
                    totalCost,
                    actualCost,
                    currency,
                  }}
                >
                  <button className="btn btn-outline-success text-center">
                    Pay now
                  </button>
                </Link>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
