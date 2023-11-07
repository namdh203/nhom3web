import React from "react";
import "./sub_nav.css"
import TabBtn from "./tab_btn/tab_btn";
import { goDesc, goIntro, goSche } from "./tab_btn/add_btn.js";

export default class SubNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="sub-nav_wrapper container-md fixed-top">
                <div className="sub-nav row">
                    <TabBtn title="Introduction" borderRadius="0 0 0 20px" addClass="intro" isChosen="true" onClick={goIntro}></TabBtn>
                    <TabBtn title="Description" borderRadius="0 0 0 0" addClass="desc" isChosen="false" onClick={goDesc}></TabBtn>
                    <TabBtn title="Schedule" borderRadius="0 0 20px 0" addClass="sche" isChosen="false" onClick={goSche}></TabBtn>
                </div>
            </div>
        )
    }
}