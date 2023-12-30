import React from "react";
import "../tour_detail.css";
import {Link} from "react-router-dom"
import TourDestination from "./tour_dest/tour_dest";

class TourFullSchedule extends React.Component {
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
        shortDescription: this.props.tour.additionInfo[0]
    }
    return (
      <div className="schedule full">
        <div className="schedule-start_wrapper">
          <p className="schedule-start">Your location</p>
        </div>
        {this.props.dest.map((dest, index) => (
          <TourDestination
            destId={dest.id}
            header={dest.name}
            image={dest.demoImage}
            desc={dest.description}
            trans="train"
            key={index}
          />
        ))}

        <Link className="text-decoration-none" to={{ pathname: "/payment" }} state={{dataPackage}}>
          <div className="tour-cost_full">
            <h1>Get Cost</h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default TourFullSchedule;
