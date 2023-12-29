import React from "react";
import "../tour_detail.css";
import {Link} from "react-router-dom"
import TourDestBrief from "./tour_dest_brief/tour_dest_brief";
import "./tour_schedule_brief.css";

class TourBriefSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dataPackage = {
      totalCost: this.props.tour.price,
      tourName: this.props.tour.title,
      startDate: this.props.tour.startDate,
      tourId: this.props.tour.id,
      shortDescription: this.props.tour.additionInfo[0],
    };
    return (
      <div className="schedule-wrapper">
        <h1>Brief</h1>
        <div className="schedule brief">
          <div className="brief-dest">Your location</div>
          {this.props.dest.map((dest) => (
            <TourDestBrief title={dest.name} trans="train"></TourDestBrief>
          ))}
        </div>
        <Link
          className="text-decoration-none"
          to={{ pathname: "/payment" }}
          state={{ dataPackage }}
        >
          <div className="tour-cost">
            <h1>Get Cost</h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default TourBriefSchedule;
