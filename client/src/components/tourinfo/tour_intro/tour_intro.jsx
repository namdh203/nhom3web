import React from 'react';
import "../tour_info.css"
import "./tour_intro.css"
import { Carousel } from 'antd';
import Comment from "../../comment/comment.jsx"

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
                <Carousel afterChange={onChange} style={{ width: "100%", height: "100%"}}>
                    <div className="tour-banner_wrapper">
                        <img src={this.props.tour.demoImage} className="img-fluid tour-banner" alt="Responsive" />
                    </div>
                </Carousel>

                <div className="intro-info">
                    <div className="short-info">
                        <h3>Prize: </h3>
                        <p>The prize of this tour is from <span style={{ color: "green", "fontWeight": "bold" }}>{this.props.tour.price}</span> to <span style={{ color: "green", "fontWeight": "bold" }}>{this.props.tour.price + 10}</span> {this.props.tour.priceCurrency}</p>
                    </div>
                    <div className="short-info">
                        <h3>Time: </h3>
                        <p>This tour starts from <span style={{ color: "orange", "fontWeight": "bold" }}>{this.props.tour.startDate.slice(0, 10)}</span> to <span style={{ color: "red", "fontWeight": "bold" }}>{this.props.tour.endDate.slice(0, 10)}</span>. So you can arrange schedule that is suitable.</p>
                    </div>

                    <div className="short-info">
                        <h3>VOTING</h3>
                        <span style={{"paddingLeft": "20px"}}>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </span> (3651/4564 rating)
                    </div>



                    <div className="short-info">
                        <h3 className="short-info_header">Special Info:</h3>
                        <div className="special-about">
                            {this.props.tour.additionInfo.map((info, index) => (
                                <p key={index}><i className="fa-solid fa-check" style={{ color: "green" }}></i>        {info}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <Comment type="tour" type_name={this.props.tour.title}></Comment>
            </div>
        )
    }
}