import React from "react";
import Layout from "antd/es/layout/layout";
import { Typography, Input, Select } from "antd";
import Link from "antd/es/typography/Link";
import "./payment_step_1.css";

const { Header, Footer, Sider, Content } = Layout;
const { Paragraph, Title } = Typography;

export default class PaymentStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: 0,
      totalCost: 328,
      currency: "$",
    };
  }

  render() {
    const { discount, totalCost, currency } = this.state;
    return (
      <div>
        <Link href="/payment">
          <div
            className="black-layer"
            style={{
              "z-index": "9",
              display: "flex",
            }}
          >
            Some content
          </div>
        </Link>
        <div
          id="step1-wrapper"
          className="position-absolute border border-secondary "
          style={{
            top: "45vh",
            left: "50vw",
            width: "25vw",
            height: "75vh",
            backgroundColor: "white",
            transform: "translate(-50%, -50%)",
            zIndex: "10",
          }}
        >
          <Layout
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <div
              className="row m-0"
              style={{ backgroundColor: "rgb(24, 214, 24)", height: "10%" }}
            >
              <div className="col-4">
                <img
                  className="my-2 mx-0"
                  src="https://i.imgur.com/qm46CNl.png"
                  style={{
                    width: "100%",
                    height: "65%",
                  }}
                />
              </div>
            </div>

            {
              // Payment method information
            }
            <Content
              className="m-2"
              style={{
                height: "80%",
              }}
            >
              <Title className="my-2" level={5}>
                Pay Via Cards
              </Title>
              <Select
                defaultValue="Card"
                style={{ width: "90%" }}
                options={[
                  { value: "MasterCard", label: "MasterCard" },
                  { value: "Visa", label: "Visa" },
                  { value: "America Express", label: "America Express" },
                  { value: "Discover", label: "Discover" },
                ]}
              ></Select>

              <Title className="mt-5" level={5}>
                Card information
              </Title>
              <div className="d-flex flex-column">
                <div className="row">
                  <Input
                    className="card-info-input m-2 col-8"
                    placeholder="Card number"
                  />

                  <Input
                    className="card-info-input mt-2 col-3"
                    placeholder="Expiry"
                  />
                </div>

                <div className="row">
                  <Input
                    className="card-info-input m-2 col-8"
                    placeholder="Holder's name"
                  />

                  <Input className="card-info-input mt-2 col-3" placeholder="CVV" />
                </div>
              </div>
            </Content>

            <div
              className="d-flex flex-row border-top border-secondary p-2 shadow-lg"
              style={{
                height: "10%",
              }}
            >
              <Title level={4}>
                {totalCost} {currency}
                <Paragraph className="text-nowrap p-0" type="secondary">
                  Discount: {discount}%
                </Paragraph>
              </Title>
              <button
                className="btn btn-success"
                style={{
                  marginLeft: "3vh",
                  width: "80%",
                }}
              >
                Pay Now
              </button>
            </div>
          </Layout>
        </div>
      </div>
    );
  }
}
