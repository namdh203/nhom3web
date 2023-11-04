import React from 'react'
import "./rcm_card.css"

export default function RcmCard(props) {
    return (
        <>
            <div className="rcm-card_wrapper">
                <img src={props.src} className="img-fluid rcm-card_img" alt="big-card"></img>
                <div className="rcm-footer_black"></div>
                <div className="rcm-info_wrapper">
                    <h1 className="rcm-info">{props.name}</h1>
                    <h1 className="rcm-desc">{props.desc}</h1>
                </div>
            </div>
        </>
    )
}