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
                    <p style={{ color: "rgb(1, 194, 1)", "font-style": "italic" }} onClick={() => {
                        window.location.href = `/?type=destination`
                    }}>Destinations</p>
                    <p onClick={() => {
                        window.location.href = `/?type=family`
                    }}>Family tours</p>
                    <p onClick={() => {
                        window.location.href = `/?type=honeymoon`
                    }}>Honey mons</p>
                    <p onClick={() => {
                        window.location.href = `/?type=adventure`
                    }}>Adventures</p>
                    <p onClick={() => {
                        window.location.href = `/?type=visa`
                    }}>Visa-on-arrivals</p>
                    <p onClick={() => {
                        window.location.href = `/?type=special`
                    }}>Special tours</p>
                    <p onClick={() => {
                        window.location.href = `/?type=sales`
                    }}>Sales</p>
                </div>
            </div>
        )
    }
}