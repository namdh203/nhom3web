import React from "react";
import "./country_info.css";

export default class SuggestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    window.location.href = `/tour?id=${this.props.tour.id}&name=${this.props.tour.title}`;
  }

  render() {
    return (
      <div className="suggest-card_wrapper container-md">
        <div className="row">
          <div
            className="col col-md-5 col-sm-5 col-5 sg-img"
            style={{ padding: "0" }}
          >
            <img
              src={this.props.tour.demoImage}
              onClick={this.onclick}
              className="img-fluid suggest-img"
              alt="Responsive"
            />
          </div>
          <div className="col col-md-7 col-sm-7 col-7 sg-desc">
            <h3>{this.props.tour.title}</h3>
            <div className="sg-info">
              <label>Duration: </label>
              <span> {this.props.tour.duration} days</span>
            </div>
            <div className="sg-info date">
              <label>Start Date:</label>
              <span> {this.props.tour.startDate.slice(0, 10)}</span>
            </div>
            <div className="sg-info date">
              <label>End Date:</label>
              <span> {this.props.tour.endDate.slice(0, 10)}</span>
            </div>
            <div className="sg-info add">
              <label>Addition Info:</label>
              <br />
              <div>
                {this.props.tour.additionInfo.slice(0, 4).map((info, index) => (
                  <p style={{ margin: 0 }} key={index}>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "green" }}
                    ></i>{" "}
                    {info}
                  </p>
                ))}
              </div>
            </div>
            <div className="sg-info">
              <label>Price:</label>
              <span> {this.props.tour.price} USD</span>
            </div>
            <div className="row sg-interac gx-5">
              <div className="col col-12 sg-know" onClick={this.onclick}>
                <h3>Know more</h3>
              </div>
              {/* <div className="col col-md-6 col-sm-6 col-6 sg-book">
                <h3>Book now</h3>
              </div> */}
            </div>
          </div>
          {/* <div className="col col-md-2 col-sm-12 sg-interac">
                        <div className="row">
                            <div className="col col-md-12 col-sm-6 sg-know" onClick={this.onclick}>
                                <h3>Know more</h3>
                            </div>
                            <div className="col col-md-12 col-sm-6 sg-book">
                                <h3>Book now</h3>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    );
  }
}
