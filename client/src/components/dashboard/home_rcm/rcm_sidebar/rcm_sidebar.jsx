import React from "react";
import "./rcm_sidebar.css"
import { Link } from "react-router-dom"

export default class RcmSidebar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0
        }
    }


    render() {

        return (
            <div className="home-rcm_sidebar col col-md-2">
                <h1 className="rcm-sidebar_header">Categories</h1>
                <div className="rcm-sidebar_list">
                    <Link className="sidebar-choice_link" to={'/?type=destination'}>
                        <p className="sidebar-choice choice-active" onClick={() => {
                            window.location.href = "/?type=destination"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });
                            this.setState({"id": 0})
                            children[0].classList.add("choice-active")

                        }}>Destinations</p>
                    </Link>
                    <Link className="sidebar-choice_link" to={'/?type=family'}>
                        <p className="sidebar-choice" onClick={() => {
                            window.location.href = "/?type=family"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });
                            this.setState({"id": 1})
                            children[1].classList.add("choice-active")

                        }}>Family Tours</p>
                    </Link>
                    <Link className="sidebar-choice_link" to={'/?type=honey moon'}>
                        <p className="sidebar-choice" onClick={() => {
                            window.location.href = "/?type=honey moon"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });
                            this.setState({"id": 2})
                            children[2].classList.add("choice-active")

                        }}>Honey moons</p>
                    </Link>
                    <Link className="sidebar-choice_link" to={'/?type=adventure'}>
                        <p className="sidebar-choice" onClick={() => {
                            window.location.href = "/?type=adventure"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });

                            this.setState({"id": 3})
                            children[3].classList.add("choice-active")

                        }}>Adventures</p>
                    </Link>
                    <Link className="sidebar-choice_link" to={'/?type=destination'}>
                        <p className="sidebar-choice" onClick={() => {
                            window.location.href = "/?type=destination"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });
                            this.setState({"id": 4})
                            children[4].classList.add("choice-active")

                        }}>Visa-on-arrivals</p>
                    </Link>
                    <Link className="sidebar-choice_link" to={'/?type=family'}>
                        <p className="sidebar-choice" onClick={() => {
                            window.location.href = "/?type=destination"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });
                            this.setState({"id": 5})
                            children[5].classList.add("choice-active")

                        }}>Special Tours</p>
                    </Link>
                    <Link className="sidebar-choice_link" to={'/?type=destination'}>
                        <p className="sidebar-choice" onClick={() => {
                            window.location.href = "/?type=destination"
                            const body = document.body
                            const list = body.querySelector(".rcm-sidebar_list")
                            var children = list.querySelectorAll("p")
                            children.forEach(function (child) {
                                child.classList.remove("choice-active");
                            });
                            this.setState({"id": 6})
                            children[6].classList.add("choice-active")

                        }}>Sales</p>
                    </Link>
                </div>
            </div >
        )
    }
}