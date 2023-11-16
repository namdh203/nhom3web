import React from 'react';
import "../tour_info.css"
import "./tour_intro.css"
import { Carousel } from 'antd';

const onChange = (currentSlide) => {
    console.log(currentSlide);
};

export default class TourIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="intro-wrapper" style={{ display: "block" }}>
                <h1 className="tour-title">{this.props.tour.title}</h1>
                <Carousel afterChange={onChange} style={{ width: "100%" }}>
                    <div className="tour-banner_wrapper">
                        <img src={this.props.tour.demoImage} className="img-fluid tour-banner" alt="Responsive" />
                    </div>
                </Carousel>
                <div className="main-info container-md">
                    <div className="row gx-5" style={{ 'height': '100%' }}>
                        <div className="main-info_item-wrapper col col-md-2 col-sm-6">
                            <div className="main-info_item">
                                <h3>Duration</h3>
                                <p>{this.props.tour.duration} days</p>
                            </div>
                        </div>
                        <div className="main-info_item-wrapper col col-md-2 col-sm-6">
                            <div className="main-info_item">
                                <h3>Prize</h3>
                                <p>{this.props.tour.price} {this.props.tour.priceCurrency}</p>
                            </div>
                        </div>
                        <div className="main-info_item-wrapper col col-md-2 col-sm-6">
                            <div className="main-info_item">
                                <h3>Start</h3>
                                <p>{this.props.tour.startDate.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div className="main-info_item-wrapper col col-md-2 col-sm-6">
                            <div className="main-info_item">
                                <h3>End</h3>
                                <p>{this.props.tour.endDate.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div className="main-info_item-wrapper col col-md-2 col-sm-6"></div>

                        <div className="main-info_item-wrapper voting col col-md-2 col-sm-12">
                            <div className="main-info_item voting">
                                <h3>VOTING</h3>
                                <div>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="short-info">
                    <h1 className="short-info_header">Special Info:</h1>
                    <div className="special-about">
                        {this.props.tour.additionInfo.map((info) => (
                            <p><i class="fa-solid fa-check" style={{ color: "green" }}></i>        {info}</p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}