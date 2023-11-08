import React from "react";

export default class RcmSidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="home-rcm_sidebar col col-md-2">
                <h1 className="rcm-sidebar_header">Categories</h1>
                <div className="rcm-sidebar_list">
                    <p style={{ color: "rgb(1, 194, 1)", "font-style": "italic" }}>Destinations</p>
                    <p>Family tours</p>
                    <p>Honey mons</p>
                    <p>Adventures</p>
                    <p>Visa-on-arrivals</p>
                    <p>Special tours</p>
                    <p>Sales</p>
                </div>
            </div>
        )
    }
}