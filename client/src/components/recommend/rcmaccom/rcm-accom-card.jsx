import React from "react";

export default class RcmAccomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onclick = () => {
    window.location.href = `/accommodation/hotel?id=${this.props.accom.id}`;
  };

  render() {
    return (
      <div className="rcm-main_card col col-6 col-sm-6 col-md-3">
        <div className="rcm-main_card-wrapper">
          <img
            src={this.props.accom.demoImage}
            className="img-fluid rcm-main_card-img"
            alt="Responsive"
          />
          <div className="rcm-main_card-info">
            <div className="card-header">
              <h3 className="card-info_header">{this.props.accom.name}</h3>
            </div>
            <p className="contact" style={{ marginTop: "5px" }}>
              <i className="fa-solid fa-location-dot"></i>{" "}
              {this.props.accom.address}
            </p>
            <p className="contact">
              <i className="fa-solid fa-phone"></i> {this.props.accom.telephone}
            </p>
            <p className="contact">
              <i className="fa-solid fa-envelope"></i>{" "}
              {this.props.accom.contactEmail}
            </p>
            {/* <div className="card-info_addition">
                        {this.props.accom.additionInfo.slice(0, 2).map(info => (
                            <p><i className="fa-solid fa-check"></i> {info}</p>
                            <p><i className="fa-solid fa-check"></i> {info}</p>
                        ))}
                        </div> */}
            <div className="card-info_price">
              <div className="price-info">
                <span>Price per night</span>
                <br />
                <span className="price">
                  {this.props.accom.pricePerNight}{" "}
                  {this.props.accom.priceCurrency}
                </span>
              </div>
              <div className="know-btn" onClick={this.onclick}>
                <span>Know more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
