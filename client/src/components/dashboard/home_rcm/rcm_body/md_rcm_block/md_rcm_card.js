import React from 'react'
import "./md_rcm_card.css"

export default class MdRcmCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onclick = this.onclick.bind(this)
    }

    onclick() {
        window.location.href = `/tour?id=${this.props.id}&name=${this.props.name}`
    }

    render() {
        return (
            <div className="mdrcm-card_wrapper">
                <img src={this.props.src} onClick={this.onclick} className="img-fluid mdrcm-card_img" alt="big-card"></img>
                <div className="mdrcm-card_info">
                    <h1 className="mdrcm-card_header">{this.props.name}</h1>
                    <p className="mdrcm-card_desc">{this.props.desc}</p>
                    <div className="container-md">
                        <div className="row gy-4 mdrcm-card_inter">
                            <div className="col-md-6 mdrcm-card_choice" onClick={this.onclick}>
                                <div>
                                    <h1 className="mdrcm-card_know">Know more</h1>
                                </div>
                            </div>
                            <div className="col-md-6 mdrcm-card_choice">
                                <div>
                                    <h1 className="mdrcm-card_contact">Book now</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}