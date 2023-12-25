import React from 'react'
import "../../index.css"
import "./tour_info.css"
import TourIntro from "./tour_intro/tour_intro.jsx"
import TourDetail from "./tour_detail/tour_detail.jsx"
import TourDesc from './tour_decs/tour_desc.jsx'
import SubNav from "./sub_nav/sub_nav.jsx"
import { getTourData, getDestData } from '../tourinfo/TourFunction.js' 

export default class TourInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tourData: null,
            destData: null
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

        getDestData(id).then(res => {
            if (!res) {
                console.log("Get dest id failed")
            } else {
                // console.log(res)
                this.setState({'destData': res})
            }
        })
    }

    render() {

        if (this.state.tourData === null || this.state.destData === null) {
            return <p>Loading...</p>
        }

        return (
            <div className="tour-info_wrapper" style={{ "backgroundColor": "rgb(238, 234, 234)", "paddingBottom": "40px" }}>
                <div className="buffer-block" style={{ "backgroundColor": "rgb(238, 234, 234)" }}></div>
                <SubNav></SubNav>
                <TourIntro tour={this.state.tourData}/>
                <TourDesc tour={this.state.tourData}></TourDesc>
                <TourDetail dest={this.state.destData} />
            </div>
        )
    }
}