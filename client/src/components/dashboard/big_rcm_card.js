import React from 'react'
import "./big_rcm_block.css"

export default function BigRcmCard(props) {
    return (
        <>
            <div className="brcm-card_wrapper">
                <div className="container">
                    <div className = "row gx-5">
                        <div className="col col-md-6 col-sm-12 brcm-card_img-wrapper">
                            <img src={props.src} className="img-fluid brcm-card_img" alt="big-card"></img>
                        </div>

                        <div className="col col-md-6 col-sm-12 brcm-card_info-wrapper">
                            <div>
                                <h1 className="brcm-card_header">{props.name}</h1>
                                <p className="brcm-card_desc">{props.desc}</p>
                                <div className="container-md">
                                    <div className="row brcm-card_inter">
                                        <div className="col-md-6 brcm-card_choice">
                                            <div>
                                                <h1 className="brcm-card_know">Know more</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6 brcm-card_choice">
                                            <div>
                                                <h1 className="brcm-card_contact">Contact us</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

