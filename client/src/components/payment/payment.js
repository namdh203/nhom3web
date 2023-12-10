import TourSummary from "./info_summary/info_summary";

import React, { Component } from 'react';

class Payment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                 <TourSummary></TourSummary>
            </div>
        )
    }
}

export default Payment;