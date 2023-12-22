import React, { Component } from "react";

export default class TourCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rcm-main_card col col-6 col-sm-6 col-md-3">
        <div className="rcm-main_card-wrapper">
          <img
            src={this.props.tour.demoImage}
            className="img-fluid rcm-main_card-img"
            alt="Tour Package"
          />
          <div className="rcm-main_card-info">
            <div className="card-header">
              <h3 className="card-info_header">{this.props.tour.name}</h3>
            </div>
            <p className="contact" style={{ marginTop: "5px" }}>
              <i className="fa-solid fa-location-dot"></i>
              {" " + this.props.tour.address}
            </p>
            <p className="contact">
              <i className="fa-solid fa-phone"></i> {this.props.tour.telephone}
            </p>
            <p className="contact">
              <i className="fa-solid fa-envelope"></i>{" "}
              {this.props.tour.contactEmail}
            </p>
            <div className="card-info_price">
              <div className="price-info">
                <span>Price per night</span>
                <br />
                <span className="price">
                  {this.props.tour.pricePerNight}{" "}
                  {this.props.tour.priceCurrency}
                </span>
              </div>
              <div className="know-btn">
                <span>Customize</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
