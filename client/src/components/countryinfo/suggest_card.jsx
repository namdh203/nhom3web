import React from 'react';
import "./country_info.css"

export default class SuggestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onclick = this.onclick.bind(this)
    }

    onclick() {
        window.location.href = "/tour/bali-tour"
    }

    render() {
        return (
            <div className="suggest-card_wrapper">
                <div className="row">
                    <div className="col col-md-5 col-sm-5 sg-img" style={{ "padding": "0" }}>
                        <img src={this.props.tour.demoImage} onClick={this.onclick} className="img-fluid suggest-img" alt="Responsive" />
                    </div>
                    <div className="col col-md-5 col-sm-5 sg-desc">
                        <h3>{this.props.tour.title}</h3>
                        <div className="sg-info">
                            <label>Duration: </label>
                            <span> {this.props.tour.duration} days</span>
                        </div>
                        <div className="sg-info">
                            <label>Start Date:</label>
                            <span> {this.props.tour.startDate.slice(0, 10)}</span>
                        </div>
                        <div className="sg-info">
                            <label>End Date:</label>
                            <span> {this.props.tour.endDate.slice(0, 10)}</span>
                        </div>
                        <div className="sg-info">
                            <label>Addition Info:</label><br />
                            <div>
                                {this.props.tour.additionInfo.slice(0, 5).map((info) => (
                                    <p style={{ "margin": 0 }}><i class="fa-solid fa-check" style={{ color: "green" }}></i>        {info}</p>
                                ))}
                            </div>
                        </div>
                        <div className="sg-info">
                            <label>Price:</label>
                            <span> {this.props.tour.price} USD</span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-sm-2 sg-interac">
                        <div className="row">
                            <div className="col col-md-12 col-sm-12 sg-know" onClick={this.onclick}>
                                <h3>Know more</h3>
                            </div>
                            <div className="col col-md-12 col-sm-12 sg-book">
                                <h3>Book now</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}