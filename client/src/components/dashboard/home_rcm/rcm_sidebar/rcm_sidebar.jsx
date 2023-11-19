import React from "react";
import "./rcm_sidebar.css"

export default function RcmSidebar() {

    function getId() {
        const currentURL = window.location.href;

        const url = new URL(currentURL);

        const id = url.searchParams.get("id");

        return id
    }

    return (
        <div className="home-rcm_sidebar col col-md-2">
            <h1 className="rcm-sidebar_header">Categories</h1>
            <div className="rcm-sidebar_list">
                <p className="sidebar-choice choice-active" onClick={() => {
                    window.location.href = "/?type=destination&id=0"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    console.log(getId())

                    children[getId()].classList.add("choice-active")

                }}>Destinations</p>
                <p className="sidebar-choice" onClick={() => {
                    window.location.href = "/?type=family&id=1"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    children[getId()].classList.add("choice-active")

                }}>Family tours</p>
                <p className="sidebar-choice" onClick={() => {
                    window.location.href = "/?type=honey moon&id=2"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    children[getId()].classList.add("choice-active")

                }}>Honey mons</p>
                <p className="sidebar-choice" onClick={() => {
                    window.location.href = "/?type=destination&id=0"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    children[getId()].classList.add("choice-active")

                }}>Adventures</p>
                <p className="sidebar-choice" onClick={() => {
                    window.location.href = "/?type=family&id=1"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    children[getId()].classList.add("choice-active")

                }}>Visa-on-arrivals</p>
                <p className="sidebar-choice" onClick={() => {
                    window.location.href = "/?type=honey moon&id=2"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    children[getId()].classList.add("choice-active")

                }}>Special tours</p>
                <p className="sidebar-choice" onClick={() => {
                    window.location.href = "/?type=destination&id=0"
                    const body = document.body
                    const list = body.querySelector(".rcm-sidebar_list")
                    var children = list.querySelectorAll("p")
                    children.forEach(function (child) {
                        child.classList.remove("choice-active");
                    });

                    children[getId()].classList.add("choice-active")

                }}>Sales</p>
            </div>
        </div >
    )
}