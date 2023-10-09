import React from 'react'
import "./dashbroad.css"

export default function RcmCard(props) {
    return (
        <>
            <div className="rcm-card_wrapper">
                <img src={props.src} className="img-fluid rcm-card_img" alt="big-card"></img>
            </div>
        </>
    )
}