import React from "react";
import "../home_banner.css"  

export default class BannerImg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="banner-wrapper">
                <img src={this.props.src} className="img-fluid home-banner" alt="Responsive" />
                <div className="banner-info">
                    <h1 className="banner-header">{this.props.name}</h1>
                    <p className="banner-desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}