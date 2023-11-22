import React from "react";
import "./tour_dest.css"
import "../../../../../index.js"

class TourDestination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="buffer-block" style={{
                    width: "50%",
                    height: "35px",
                    "border-right": "0.025px solid gray",
                    display: this.props.first === "true" ? "none" : "block"
                }}></div>
                <div className="tour-dest_wrapper">
                    <div className="tour-dest_header">{this.props.header}</div>
                    <div className="tour-dest_info row gx-4">
                        <div className="label col col-md-2">Accom:</div>
                        <div className="detail col col-md-10">
                            <a href="../accomodation/hotel">Anantara Uluwatu Bali Resort, </a>
                            <span>Budget Accommodation, Private Villas, Karma Kandara, Bulgari Resort Bali, Alila Villas Uluwatu.</span>
                        </div>
                    </div>
                    <div className="tour-dest_info row gx-4">
                        <div className="label col col-md-2">Transportation:</div>
                        <div className="detail col col-md-10">Car Rental, Taxis, Bicycle Rental, Public Transportation.</div>
                    </div>
                    <div className="tour-dest_info row gx-4">
                        <div className="label col col-md-2">Restaurant:</div>
                        <div className="detail col col-md-10">Single Fin Bali, Warungs, El Kabron Cliff Club, Ulu Cliffhouse, Jimbaran Seafood Restaurants, Balangan Café, Sundays Beach Club.</div>
                    </div>
                    <div className="tour-dest_info row gx-4">
                        <div className="label col col-md-2">Acivity:</div>
                        <div className="detail col col-md-10">
                            <div className="choice">
                                <img src="https://a.cdn-hotels.com/gdcs/production142/d1653/b667788d-ebdf-4b27-8bab-22bc59175055.jpg" className="img-fluid" alt="Responsive" />
                                <span>Explore Uluwatu Temple</span>
                            </div>
                            <div className="choice">
                                <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/o3oq0rci3gucwvpu7pqp/Kecak%20Dance%20Show%20Ticket%20in%20Uluwatu%20and%20Melasti%20Beach%2C%20Bali.jpg" className="img-fluid" alt="Responsive" />
                                <span>Kecak Dance Performance</span>
                            </div>
                            <div className="choice">
                                <img src="https://lushpalm.com/wp-content/uploads/2015/11/surfing-uluwatu-view-from-warungs.jpg" className="img-fluid" alt="Responsive" />
                                <span>Surfing</span>
                            </div>
                            <div className="choice">
                                <img src="https://theworldtravelguy.com/wp-content/uploads/2021/02/DJI_0360.jpg" className="img-fluid" alt="Responsive" />
                                <span>Rock Climbing</span>
                            </div>
                        </div>
                    </div>
                    <div className="tour-dest_add">
                        <i className="fa-solid fa-plus" style={{ "margin-right": "10px" }}></i>
                        <span>Add Info</span>
                    </div>
                </div>
                <div className="buffer-block" style={{
                    width: "50%",
                    height: "35px",
                    "border-right": "0.025px solid gray",
                    display: this.props.last === "true" ? "none" : "block"
                }}>

                </div>
                <div className="trans-block" style={{display: this.props.last === "true" ? "none" : "flex"}}>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "train" ? "block" : "none"
                    }}>
                        <i className="fa-solid fa-train"></i>
                    </div>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "plane" ? "block" : "none"
                    }}>
                        <i className="fa-solid fa-plane"></i>
                    </div>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "motor" ? "block" : "none"
                    }}>
                        <i className="fa-solid fa-motorcycle"></i>
                    </div>
                </div>
            </>
        )
    }
}

export default TourDestination;