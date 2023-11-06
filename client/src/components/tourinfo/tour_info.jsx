import React from 'react'
import "../../index.css"
import "./tour_info.css"
import TourIntro from "./tour_intro.jsx"
import TourDetail from "./tour_detail.jsx"
import TourDesc from './tour_desc.jsx'
import SubNav from "./sub_nav.jsx"

export default function TourInfo(props) {
    return (
        <div style={{"background-color": "rgb(238, 234, 234)", "padding-bottom": "40px"}}>
            <div className="buffer-block" style={{"background-color": "rgb(238, 234, 234)"}}></div>
            <SubNav></SubNav>
            <TourIntro title={props.title} banner={props.banner} />
            <TourDesc></TourDesc>
            <TourDetail />
        </div>
    )
}