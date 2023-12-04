import React from 'react'
import "../../index.css"
import "./tour_info.css"
import TourIntro from "./tour_intro/tour_intro.jsx"
import TourDetail from "./tour_detail/tour_detail.jsx"
import TourDesc from './tour_decs/tour_desc.jsx'
import SubNav from "./sub_nav/sub_nav.jsx"
import { getTourData } from '../tourinfo/TourFunction.js' 

export default class TourInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tourData: null
        }
    }

    componentDidMount() {
        const currentURL = window.location.href;

        const url = new URL(currentURL);

        const id = url.searchParams.get("id");

        getTourData(id).then(res => {
            if(!res) {
                console.log("Get data failed")
            } else {
                this.setState({'tourData': res})
            }
        }).catch(err => {
            console.log("error: ", err)
        })
    }

    render() {

        if (this.state.tourData === null) {
            return <p>Loading...</p>
        }

        return (
            <div className="tour-info_wrapper" style={{ "background-color": "rgb(238, 234, 234)", "padding-bottom": "40px" }}>
                <div className="buffer-block" style={{ "background-color": "rgb(238, 234, 234)" }}></div>
                <SubNav></SubNav>
                <TourIntro tour={this.state.tourData}/>
                <TourDesc tour={this.state.tourData}></TourDesc>
                <TourDetail />
            </div>
        )
    }
}