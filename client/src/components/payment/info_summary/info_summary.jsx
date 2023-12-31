import React from "react";
import "./info_summary.css";
import Layout from "antd/es/layout/layout";
import { Typography } from "antd";

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default class TourSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourName: this.props.dataPackage.tourName,
      description: `${this.props.dataPackage.shortDescription} trip`,
      startDate: this.props.dataPackage.startDate,
      totalCost: this.props.dataPackage.totalCost,
      currency: "$",
    };
  }

  render() {
    let { tourName, description, startDate, totalCost, currency } = this.state;
    startDate = new Date(startDate).toISOString().split("T")[0];
    return (
      <Layout className="payment-wrapper">
        <div className="buffer-block" style={{ height: "40px" }}></div>
        <Content style={{ paddingLeft: "0" }}>
          <div className="row justify-content-center">
            <div className="bg-summary col-6 border border-secondary rounded my-5">
              <Title level={5} className="text-center m-1" strong="true">
                {tourName}
              </Title>
              <Paragraph className="text-center" type="secondary">
                {description} on {startDate}
              </Paragraph>

              <div className="">
                <div className="m-0 d-flex flex-row justify-content-between">
                  <div>
                    <Title className="m-0" type="secondary" level={4}>
                      Total cost
                    </Title>
                    <Paragraph className="m-0" type="secondary">
                      inclusive of all taxes and fees.
                    </Paragraph>
                  </div>

                  <Title className="align-self-end" level={2}>
                    {totalCost} {currency}
                  </Title>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </Content>
      </Layout>
    );
  }
}
