import React from 'react'
import "../tour_detail.css"
import TourDestination from './tour_dest/tour_dest'

class TourFullSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='schedule full'>
                <div className="schedule-start_wrapper">
                    <p className="schedule-start">Your location</p>
                </div>
                {this.props.dest.map((dest) => (
                    <TourDestination header={dest.name} image={dest.demoImage} desc={dest.description} trans="train" />
                ))}

                <div className="tour-cost_full">
                    <h1>Get Cost</h1>
                </div>
            </div>
        )
    }
}


export default TourFullSchedule;