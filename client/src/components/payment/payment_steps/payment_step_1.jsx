import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Typography, Input, Select } from "antd";
import { useLocation, Link } from "react-router-dom";
import { createPaymentTransaction } from "./paymentFunc";
import "./payment_step_1.css";

const { Header, Footer, Sider, Content } = Layout;
const { Paragraph, Title } = Typography;

const PaymentStep1 = () => {
  const location = useLocation();

  const { discount, totalCost, actualCost, currency, dataPackage } =
    location.state;

  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [holderName, setHolderName] = useState("");
  const [cvv, setCVV] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let description = {
      tourId: dataPackage.tourId ? dataPackage.tourId : "none",
      cardType: cardType,
      cardNumber: cardNumber,
      expiry: expiry,
      holderName: holderName,
      cvv: cvv
    };

    if (!description || !description.cardType || !description.cardNumber || !description.expiry || !description.holderName || !description.cvv) {
      alert("Please fill out the form before payment");
      return;
    }

    // Send data to database and then alert success
    if (localStorage) {
      let firstKey = Object.keys(localStorage)[0];
      let storage = JSON.parse(localStorage[firstKey]);

      if (storage.id) {
        const newPayment = {
          userId: storage.id,
          payDate: new Date().toISOString(),
          amount: actualCost,
          currency: "USD",
          description: JSON.stringify(description),
        };

        createPaymentTransaction(newPayment).then((res) => {
          if (res === "Payment transaction created") {
            alert("Payment transaction created successfully!");
            // window.location.href = `/profile`;
          } else {
            alert(
              "Failed to create payment transaction. Please try again later."
            );
          }
        });
      } else {
        console.log("Please sign in to pay for your tour!");
      }
    } else {
      alert("Please sign in to pay for your tour!");
    }
  };

  return (
    <div>
      <Link to={{ pathname: "/payment" }} state={{ dataPackage }}>
        <div
          className="black-layer"
          style={{
            "z-index": "9",
            display: "flex",
          }}
        ></div>
      </Link>
      <div
        id="step1-wrapper"
        className="position-absolute border border-secondary "
        style={{
          top: "45vh",
          left: "50vw",
          width: "40vw",
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
            <div className="" style={{ width: "100%", height: "100%" }}>
              <img
                className="my-2 mx-0"
                src="https://i.imgur.com/qm46CNl.png"
                style={{
                  maxWidth: "100%",
                  height: "70%",
                  whiteSpace: "nowrap",
                }}
              />
            </div>
          </div>

          {
            // Payment method information
          }
          <form onSubmit={handleSubmit} style={{ height: "100%" }}>
            <Content className="mx-4" style={{ height: "86%" }}>
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
                onChange={(value) => setCardType(value)}
              ></Select>

              <Title className="mt-5" level={5}>
                Card information
              </Title>
              <div className="d-flex flex-column">
                <div className="row">
                  <Input
                    className="card-info-input m-2 col-8"
                    placeholder="Card number"

                    onChange={(e) => setCardNumber(e.target.value)}
                  />

                  <Input
                    className="card-info-input mt-2 col-3"
                    placeholder="Expiry"

                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>

                <div className="row">
                  <Input
                    className="card-info-input m-2 col-8"
                    placeholder="Holder's name"

                    onChange={(e) => setHolderName(e.target.value)}
                  />

                  <Input
                    className="card-info-input mt-2 col-3"
                    placeholder="CVV"

                    onChange={(e) => setCVV(e.target.value)}
                  />
                </div>
              </div>
            </Content>

            <div
              className="d-flex flex-row border-top border-secondary p-2 shadow-lg"
              style={{
                height: "13%",
              }}
            >
              <Title level={4}>
                {actualCost} {currency}
                <Paragraph className="text-nowrap p-0" type="secondary">
                  Cash saved: {(totalCost * discount) / 100} $
                </Paragraph>
              </Title>
              <button
                className="btn btn-success"
                style={{
                  marginLeft: "3vh",
                  width: "80%",
                }}
                type="submit"
              >
                Pay Now
              </button>
            </div>
          </form>
        </Layout>
      </div>
    </div>
  );
};

export default PaymentStep1;
