import React from "react";
import Layout from "antd/es/layout/layout";
import { Typography } from "antd";
import { Icon } from "antd";
import { AccountBookFilled } from "@ant-design/icons";

const { Paragraph, Title } = Typography;
const { Content } = Layout;

export default class Discount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: 0,
      totalCost: 328,
      currency: "$",
    };
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    window.location.href = "/payment/payment-step-1"
  }

  render() {
    const { discount, totalCost, currency } = this.state;
    return (
      <div>
        <Layout>
          <Content className="row">
            <div className="col-10 border border-light rounded shadow-lg row d-flex justify-content-center">
              <div className="col-6 m-2 p-2">
           
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733186.png"
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
                {totalCost} {currency}
              </Title>

              <div className="d-flex justify-content-center mb-3" >
                <button className="btn btn-outline-success text-center" onClick={this.onclick}>
                  Pay now
                </button>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
