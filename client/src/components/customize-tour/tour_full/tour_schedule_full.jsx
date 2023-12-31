import React from "react";
import { Link } from "react-router-dom";
import "../tour_customize.css";
import TourDestination from "./tour_dest/tour_dest";

class TourFullSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destDuration: [],
    };
  }

  // componentDidMount() {
  //   const destDur = [];
  //   this.props.destss.forEach((_, index) => {
  //     destDur.push(
  //       this.props.duration / this.props.destss.length +
  //         (index === 0 ? this.props.duration % this.props.destss.length : 0)
  //     );
  //   });
  //   this.setState({ destDuration: destDur });
  // }

  getTotalCost() {
    let totalCost = 0;
    let keyArrays = Object.keys(localStorage);
    let actAvgCost = 20,
      restAvgCost = 30,
      accomAvgCost = 80,
      transAvgCost = 15,
      destAvgCost = 50;

    // console.log(localStorage);
    for (let i = 0; i < keyArrays.length; i++) {
      for (let j = 0; j < this.props.dests.length; j++) {
        let item = localStorage.getItem(keyArrays[i]);
        let length = item.split(",").length;

        if (keyArrays[i].startsWith(`act_dest${this.props.dests[j].id}`)) {
          totalCost += length * actAvgCost;
        } else if (
          keyArrays[i].startsWith(`accom_dest${this.props.dests[j].id}`)
        ) {
          totalCost += length * accomAvgCost;
        } else if (
          keyArrays[i].startsWith(`rest_dest${this.props.dests[j].id}`)
        ) {
          totalCost += length * restAvgCost;
        } else if (
          keyArrays[i].startsWith(`trans_dest${this.props.dests[j].id}`)
        ) {
          totalCost += length * transAvgCost;
        }
      }
    }

    totalCost += this.props.dests.length * destAvgCost;

    return totalCost;
  }

  render() {
    let tourName = "";

    for (let i = 0; i < this.props.dests.length; i++) {
      tourName += `${this.props.dests[i].name}`;
      if (i < this.props.dests.length - 1) {
        tourName += ", ";
      }
    }

    const dataPackage = {
      totalCost: this.getTotalCost(),
      tourName: tourName,
      startDate: this.props.date,
      // tourId: -1,
      shortDescription: this.props.dests[0].additionInfo[0],
    };
    return (
      <div className="schedule full">
        <div className="schedule-start_wrapper">
          <p className="schedule-start">Your location</p>
        </div>
        {this.props.dests.map((dest, index) => (
          <TourDestination
            destId={dest.id}
            header={dest.name}
            image={dest.demoImage}
            desc={dest.description}
            trans="train"
            key={index}
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
