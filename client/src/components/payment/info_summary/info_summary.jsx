import React from "react";
import Paragraph from "antd/es/skeleton/Paragraph";
import "./info_summary.css";

export default class TourSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourName: "Family Beach Retreat in Gold Coast",
      description: "family trip",
      startDate: "20/10/2023",
      totalCost: 328,
      currency: "$",
    };
  }

  render() {
    const { tourName, description, startDate, totalCost, currency } =
      this.state;
    return (
      <div className="">
        <div className="row justify-content-center">
        <div className="block" style={{ height: '200px' }}>

        </div>

          <div className="bg-summary col-6 border border-secondary rounded">
            <div className="text-center">{tourName}</div>
            <div className="text-center">{description} on {startDate}</div>
            <div>Total cost: {currency} {totalCost}</div>
          </div>
        </div>

        {/* <p>
                    {tourName}
                </p>
                <Paragraph>
                    {tourName}
                </Paragraph>
                <Paragraph>
                    {tourName}
                </Paragraph>
                <Paragraph>
                    {tourName}
                </Paragraph>
                <Paragraph>
                    {description} on {startDate}
                </Paragraph>
                <Paragraph>
                Total cost: {currency}{totalCost}
                </Paragraph>
                <Paragraph>
                    I have read and understood the Terms & Conditions
                </Paragraph> */}
      </div>
    );
  }
}
