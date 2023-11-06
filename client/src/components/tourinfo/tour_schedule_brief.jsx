import React from "react";
import "./tour_detail.css"
import TourDestBrief from "./tour_dest_brief";
import "./tour_schedule_brief.css"

class TourBriefSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="schedule-wrapper">
                <h1>Brief</h1>
                <div className='schedule brief'>

                    <TourDestBrief last="false" first="true" title="Uluwatu Temple" trans="train"></TourDestBrief>
                    <TourDestBrief last="false" first="false" title="Tirta Gangga" trans="motor"></TourDestBrief>
                    <TourDestBrief last="true" first="false" title="Lempuyang" trans="motor"></TourDestBrief>

                </div>
                <div className="tour-cost">
                    <h1>Get Cost</h1>
                </div>
            </div>
        )
    }
}

export default TourBriefSchedule