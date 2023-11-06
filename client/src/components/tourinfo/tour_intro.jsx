import React from 'react';
import "./tour_info.css"

export default class TourIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="intro-wrapper container-md" style={{display: "block"}}>
                <h1 className="tour-title">{this.props.title}</h1>
                <div className="tour-banner_wrapper">
                    <img src={this.props.banner} className="img-fluid tour-banner" alt="Responsive" />
                </div>
                <div className="short-info">
                    <h1 className="short-info_header">Something:</h1>
                    <p>Bali's main advantage is that it offers luxury hotels and private villas with swimming pools and spectacular views at an affordable price, making it a common choice among honeymooners and couples. And accommodation isn't the only place you'll find value for your money in </p>
                    <h1 className="short-info_header">Specials:</h1>
                    <p><i class="fa-solid fa-check"></i>        Nice Hotels</p>
                    <p><i class="fa-solid fa-check"></i>        Interesting Activities</p>
                    <p><i class="fa-solid fa-check"></i>        Smart Transportations</p>
                    <p><i class="fa-solid fa-check"></i>        High Quality Restaurants</p>
                </div>
            </div>
        )
    }
}