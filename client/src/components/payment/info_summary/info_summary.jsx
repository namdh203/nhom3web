import React from "react";
import "./info_summary.css";
import Layout from "antd/es/layout/layout";
import { Typography } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Paragraph, Title } = Typography;

export default class TourSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourName: "Family Beach Retreat in Gold Coast",
      description: "Family trip",
      startDate: "20/10/2023",
      totalCost: 328,
      currency: "$",
    };
  }

  render() {
    const { tourName, description, startDate, totalCost, currency } =
      this.state;
    return (
      <Layout>
        <Header></Header>
        <Content>
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
                  

                  <Title className="align-self-end" level={3} style={
                    {

                    }
                  }>
                    {totalCost} {currency}
                  </Title>
                  
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}
