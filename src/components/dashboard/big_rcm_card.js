import React from 'react'

export default function BigRcmCard(props) {
    return (
        <>
            <div className="brcm-card_wrapper">
                <img src={props.src} className="img-fluid brcm-card_img" alt="big-card"></img>
                <div className="container">
                    <div className="row brcm-card_inter">
                        <div className="col-md-4 brcm-card_choice">
                            <h1 className="brcm-card_know">Know more</h1>
                        </div>
                        <div className="col-md-4 brcm-card_choice">
                            <h1 className="brcm-card_contact">Contact us</h1>
                        </div>
                        <div className="col-md-4 brcm-card_choice last-choice">
                            <h1 className="brcm-card_booking">Book now</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}