import React from "react";
import { Link } from "react-router-dom";
import "../tour_customize.css";
import TourDestBrief from "./tour_dest_brief/tour_dest_brief";
import "./tour_schedule_brief.css";

class TourBriefSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTotalCost() {
    let totalCost = 0;
    let keyArrays = Object.keys(localStorage);
    let actAvgCost = 20,
      restAvgCost = 30,
      accomAvgCost = 80,
      transAvgCost = 15,
      destAvgCost = 50;

    for (let i = 0; i < keyArrays.length; i++) {
      for (let j = 0; j < this.props.dest.length; j++) {
        let item = localStorage.getItem(keyArrays[i]);
        let length = item.split(",").length;

        if (keyArrays[i].startsWith(`act_dest${this.props.dest[j].id}`)) {
          totalCost += length * actAvgCost;
        } else if (
          keyArrays[i].startsWith(`accom_dest${this.props.dest[j].id}`)
        ) {
          totalCost += length * accomAvgCost;
        } else if (
          keyArrays[i].startsWith(`rest_dest${this.props.dest[j].id}`)
        ) {
          totalCost += length * restAvgCost;
        } else if (
          keyArrays[i].startsWith(`trans_dest${this.props.dest[j].id}`)
        ) {
          totalCost += length * transAvgCost;
        }
      }
    }

    totalCost += this.props.dest.length * destAvgCost;

    return totalCost;
  }

  render() {
    let tourName = "";

    for (let i = 0; i < this.props.dest.length; i++) {
      tourName += `${this.props.dest[i].name}`;
      if (i < this.props.dest.length - 1) {
        tourName += ", ";
      }
    }

    const dataPackage = {
      totalCost: this.getTotalCost(),
      tourName: tourName,
      startDate: this.props.date,
      duration: this.props.duration,
    };
    return (
      <div className="schedule-wrapper">
        <h1>Brief</h1>
        <div className="schedule brief">
          <div className="brief-dest">Your location</div>
          {this.props.dest.map((dest, index) => (
            <TourDestBrief
              key={index}
              title={dest.name}
              trans="train"
            ></TourDestBrief>
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
