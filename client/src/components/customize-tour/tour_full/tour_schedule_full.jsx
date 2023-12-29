import React from "react";
import {Link} from "react-router-dom"
import "../tour_customize.css";
import TourDestination from "./tour_dest/tour_dest";

class TourFullSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTotalCost() {
    let totalCost = 0;
    let keyArrays = Object.keys(localStorage);
    let actAvgCost = 20, restAvgCost = 30, accomAvgCost = 80, transAvgCost = 15, destAvgCost = 50;

    // console.log(localStorage);
    for (let i = 0; i < keyArrays.length; i++) {

        for (let j = 0; j < this.props.dest.length; j++) {
            let item = localStorage.getItem(keyArrays[i]);
            let length = item.split(",").length;;

            if (keyArrays[i].startsWith(`act_dest${this.props.dest[j].id}`)) {
                totalCost += length * actAvgCost;
                
            } else if (keyArrays[i].startsWith(`accom_dest${this.props.dest[j].id}`)) {
                totalCost += length * accomAvgCost;

            } else if (keyArrays[i].startsWith(`rest_dest${this.props.dest[j].id}`)) {
                totalCost += length * restAvgCost;

            } else if (keyArrays[i].startsWith(`trans_dest${this.props.dest[j].id}`)) {
                totalCost += length * transAvgCost
            }
        }
    }

    totalCost += this.props.dest.length * destAvgCost;

    return totalCost;
  }

  render() {
    let tourName = "";
    
    for (let i = 0; i < this.props.dest.length; i++) {
        tourName += `${this.props.dest[i].name}`
        if (i < this.props.dest.length - 1) {
            tourName += ", "
        }
    }

    const dataPackage = {
        totalCost: this.getTotalCost(),
        tourName: tourName,
        startDate: this.props.date,
        tourId: -1,
        shortDescription: this.props.dest[0].additionInfo[0]
    }
    return (
      <div className="schedule full">
        <div className="schedule-start_wrapper">
          <p className="schedule-start">Your location</p>
        </div>
        {this.props.dest.map((dest) => (
          <TourDestination
            destId={dest.id}
            header={dest.name}
            image={dest.demoImage}
            desc={dest.description}
            trans="train"
          />
        ))}

        <Link
          className="text-decoration-none"
          to={{ pathname: "/payment" }}
          state={{ dataPackage }}
        >
          <div className="tour-cost_full">
            <h1>Get Cost</h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default TourFullSchedule;
