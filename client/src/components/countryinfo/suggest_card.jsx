import React from 'react';
import "./country_info.css"

export default class SuggestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="suggest-card_wrapper">
                <div className="row">
                    <div className="col col-md-5 col-sm-5 sg-img" style={{ "padding": "0" }}>
                        <img src="https://pyt-images.imgix.net/images/campaignitinerary/photo-1540541338287-41700207dee6.avif?w=530&h=260&fit=crop&crop=entrophy&format=auto,compress,enhance" className="img-fluid suggest-img" alt="Responsive" />
                    </div>
                    <div className="col col-md-5 col-sm-5 sg-desc">
                        <h3>Luxury Bali Indonesia Package</h3>
                        <div>
                            <span>Duration: </span>
                            <span>5 days</span>
                        </div>
                        <div>
                            <span>Addition Info:</span><br />
                            <span>5 days</span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-sm-2 sg-interac">
                        <div className="row">
                            <div className="col col-md-12 col-sm-12 sg-know">
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