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
                <TourDestination header="Uluwatu Temple" last="false" first="true" trans="plane" />
                <TourDestination header="Tirta Gangga" last="false" first="false" trans="train" />
                <TourDestination header="Lempuyang" last="true" first="false" trans="plane" />
                <div className="tour-cost">
                    <h1>Get Cost</h1>
                </div>
            </div>
        )
    }
}


export default TourFullSchedule;