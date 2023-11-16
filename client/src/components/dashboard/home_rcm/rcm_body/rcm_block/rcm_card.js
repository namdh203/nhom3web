import React from 'react'
import "./rcm_card.css"

export default class RcmCard extends React.Component {
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
            <div className="rcm-card_wrapper" onClick={this.onclick}>
                <img src={this.props.src} className="img-fluid rcm-card_img" alt="big-card"></img>
                <div className="rcm-footer_black"></div>
                <div className="rcm-info_wrapper">
                    <h1 className="rcm-info">{this.props.name}</h1>
                    <h1 className="rcm-desc">{this.props.desc}</h1>
                </div>
            </div>
        )
    }
}