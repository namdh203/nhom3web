import React from 'react';
import BigRcmCard from "./big_rcm_card"
import "../../../dashbroad.css"

import { getPopularCountry } from "../RcmbodyFunction"


export default class BigRcmBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countryData: {}
        }
    }

    componentDidMount() {
        getPopularCountry()
        .then(res => {
            this.setState({'countryData': res})
        }).catch(err => {
            console.log('error: ' + err)
        })
    }


    render() {
        return (
            <div className="rcm-block">
                <BigRcmCard id={this.state.countryData.id} name={this.state.countryData.countryName} desc={this.state.countryData.description} src={this.state.countryData.demoImage} />
            </div>
        )
    }
}

