import React from "react";
import "./rcm_sidebar.css"
import { Link } from "react-router-dom"

export default class RcmSidebar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        const currentURL = window.location.href;

        const url = new URL(currentURL);

        var id = url.searchParams.get("id");

        if (id == null) {
            id = 0
        }

        this.setState({ "id": id })
    }


    render() {

        if (this.state.id == null) {
            return <p>Loading</p>
        }

        return (
            <div className="home-rcm_sidebar sticky-top col col-md-2">
                <div id="scrollspy1" class="sticky-top">
                    <div className="buffer-block" style={{"height": "75px"}}></div>
                    <h1 className="rcm-sidebar_header">Categories</h1>
                    <div className="rcm-sidebar_list">
                        <ul class="nav flex-column nav-pills menu-sidebar">
                            <li class="nav-item">
                                <p className={`sidebar-choice ${this.state.id == 0 ? "choice-active" : ""}`} onClick={() => {
                                    window.location.href = "/?type=destination&id=0"
                                }}>Destinations</p>
                            </li>
                            <li class="nav-item">
                                <p className={`sidebar-choice ${this.state.id == 1 ? "choice-active" : ""}`} onClick={() => {
                                    window.location.href = "/?type=family&id=1"
                                }}>Family Tours</p>
                            </li>
                            <li class="nav-item">
                                <p className={`sidebar-choice ${this.state.id == 2 ? "choice-active" : ""}`} onClick={() => {
                                    window.location.href = "/?type=honey moon&id=2"
                                }}>Honey moons</p>
                            </li>
                            <li class="nav-item">
                                <p className={`sidebar-choice ${this.state.id == 3 ? "choice-active" : ""}`} onClick={() => {
                                    window.location.href = "/?type=adventure&id=3"
                                }}>Adventures</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}