import React from 'react';
import "./dashbroad.css"
import MdRcmCard from "./md_rcm_card.js"


export default function MdRcmBlock(props) {
    return (
        <div className="rcm-block">
            <h2 className="rcm-title">{props.title}</h2>
            <div className="container-md">
                <div className="row gx-5">
                    <div className="col col-sm-12 col-md-6">
                        <MdRcmCard name="Singapore City" desc="Singapore is a sunny, tropical island  in South-east Asia, off the southern tip of the Malay Peninsula. The city-state is 710 square kilometres and inhabited by five million people from four major communities; Chinese (majority), Malay, Indian and Eurasian.z" src="https://icdn.dantri.com.vn/zoom/1200_630/2023/02/01/sing-1675238397587.jpg"/>
                    </div>
                    <div className="col col-sm-12 col-md-6">
                        <MdRcmCard name="Singapore City" desc="Singapore is a sunny, tropical island  in South-east Asia, off the southern tip of the Malay Peninsula. The city-state is 710 square kilometres and inhabited by five million people from four major communities; Chinese (majority), Malay, Indian and Eurasian.z" src="https://vietluxtour.com/upload/images/2022/singapore/singapore.jpeg"/>
                    </div>
                    {/* <div className="col col-sm-12 col-md-6">
                        <MdRcmCard src="https://www.doing-business-international.com/wp-content/uploads/2023/01/Singapore.webp"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}