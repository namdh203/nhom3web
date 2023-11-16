import React from 'react';
import "../../../dashbroad.css"
import MdRcmCard from "./md_rcm_card.js"
import { getMdRcmData } from '../RcmbodyFunction';


export default class MdRcmBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tourData: [],
            country_id: Math.floor(Math.random() * 9) + 1
        }
    }

    componentDidMount() {
        getMdRcmData(this.state.country_id).then(res => {
            this.setState({ 'tourData': res })
        }).catch(err => {
            console.log('error: ' + err)
        })
    }

    render() {
        return (
            <div className="rcm-block">
                <div className="container-md">
                    <div className="row g-5">
                        {this.state.tourData.slice(0, 2).map((tour) => (
                            <div className="col col-sm-12 col-md-6">
                                <MdRcmCard id={tour.id} name={tour.title} desc={tour.description} src={tour.demoImage} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}