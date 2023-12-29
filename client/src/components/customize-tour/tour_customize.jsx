import React from 'react';
import "./tour_customize.css"
import TourFullSchedule from './tour_full/tour_schedule_full';
import TourBriefSchedule from './tour_brief/tour_schedule_brief';
import "../../index.css"
import "./tour_full/tour_dest/tour_dest.css"

import { getDestData } from './TourCustomizeFunction.js'; 

class TourCustomize extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destData: null
        }
    }

    componentDidMount() {
        var urlParams = new URLSearchParams(window.location.search);

        var itiListString = urlParams.get('itiList');

        var itiList = itiListString ? itiListString.split(',') : [];

        itiList = itiList.map(function(iti) {
            return parseInt(iti, 10);
        });

        getDestData(itiList).then(res => {
            if (!res) {
                console.log("Get dest id failed")
            } else {
                // console.log(res)
                this.setState({'destData': res})
            }
        })
    }

    render() {
        if (this.state.destData === null) {
            return <p>Loading ...</p>
        } 

        return (
            <div className="tour-detail_wrapper">
                <div className="buffer-block"></div>
                <h1 className="detail-header">Schedule</h1>
                <div className="row g-4">
                    <div className="brief-schedule col col-md-3">
                        <TourBriefSchedule dest={this.state.destData}></TourBriefSchedule>
                    </div>
                    <div className="col col-md-9 col-sm-12 col-12">
                        <TourFullSchedule dest={this.state.destData}></TourFullSchedule>
                    </div>
                </div>
            </div>
        )
    }
}

export default TourCustomize;