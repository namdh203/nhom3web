import React from 'react';
import "./tour_detail.css"
import TourFullSchedule from './tour_schedule_full';
import TourBriefSchedule from './tour_schedule_brief';
import "../../index.css"
import "./tour_dest.css"

class TourDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="tour-detail_wrapper" style={{display: "none"}}>
                <div className="container-md">
                    <h1 className="detail-header">Schedule</h1>
                    <div className="row g-4">
                        <div className="col col-md-3">
                            <TourBriefSchedule></TourBriefSchedule>
                        </div>
                        <div className="col col-md-9 col-sm-12">
                            <TourFullSchedule></TourFullSchedule>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TourDetail;