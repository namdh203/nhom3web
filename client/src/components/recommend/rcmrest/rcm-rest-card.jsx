import React from 'react'

export default class RcmRestCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="rcm-main_card col col-6 col-sm-6 col-md-3">
                <div className="rcm-main_card-wrapper">
                    <img src={this.props.rest.demoImage} className="img-fluid rcm-main_card-img rest" alt="Responsive" />
                    <div className="rcm-main_card-info">
                        <div className="card-header">
                            <h3 className="card-info_header">
                                {this.props.rest.name}
                            </h3>
                        </div>
                        <p className="contact" style={{ "margin-top": "5px" }}><i class="fa-solid fa-location-dot"></i>        {this.props.rest.address}</p>
                        <p className="contact"><i class="fa-solid fa-phone"></i>      {this.props.rest.telephone}</p>
                        {/* <p className="contact"><i class="fa-solid fa-envelope"></i>      {this.props.rest.contactEmail}</p> */}
                        {/* <div className="card-info_addition">
                        {this.props.accom.additionInfo.slice(0, 2).map(info => (
                            <p><i class="fa-solid fa-check"></i> {info}</p>
                        ))}
                        </div> */}
                        <div className="card-info_price">
                            <div className="know-btn">
                                <span>Know more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}