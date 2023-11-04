import React from 'react'
import "./md_rcm_card.css"

export default function MdRcmCard(props) {
    return (
        <>
            <div className="mdrcm-card_wrapper">
                <img src={props.src} className="img-fluid mdrcm-card_img" alt="big-card"></img>
                <div className="mdrcm-card_info">
                    <h1 className="mdrcm-card_header">{props.name}</h1>
                    <p className="mdrcm-card_desc">{props.desc}</p>
                    <div className="container-md">
                        <div className="row mdrcm-card_inter">
                            <div className="col-md-6 mdrcm-card_choice">
                                <div>
                                    <h1 className="mdrcm-card_know">Know more</h1>
                                </div>
                            </div>
                            <div className="col-md-6 mdrcm-card_choice">
                                <div>
                                    <h1 className="mdrcm-card_contact">Contact us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}