import React from "react";

export default class RcmTransCardCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`rcm-main_card ${
          this.props.active ? "active" : ""
        } col col-12 col-sm-12 col-md-12`}
      >
        <div className="rcm-main_card-wrapper">
          <img
            src={this.props.trans.demoImage}
            className="img-fluid rcm-main_card-img act"
            alt="Responsive"
          />
          <div className="rcm-main_card-info">
            <div className="card-header">
              <h3 className="card-info_header">{this.props.trans.type}</h3>
            </div>
            {/* <p className="contact" style={{ marginTop: "5px" }}><i className="fa-solid fa-heart-pulse"></i>        {this.props.act.type}</p> */}
            {/* <p className="contact"><i className="fa-solid fa-phone"></i>      {this.props.act.telephone}</p>
                        <p className="contact"><i className="fa-solid fa-envelope"></i>      {this.props.act.contactEmail}</p> */}
            <div className="card-info_addition">
              {this.props.trans.additionInfo.slice(0, 5).map((info) => (
                <p>
                  <i className="fa-solid fa-check"></i> {info}
                </p>
              ))}
            </div>
            <div className="card-info_price">
              <div className="know-btn">
                <span>Know more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
