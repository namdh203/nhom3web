import React from 'react';
import BigRcmCard from "./big_rcm_card"
import "./dashbroad.css"


export default function SpecialRcmBlock(props) {
    return (
        <>
            <h2 className="rcm-title">{props.title}</h2>
            <BigRcmCard name="Singapore" desc="Singapore is a sunny, tropical island  in South-east Asia, off the southern tip of the Malay Peninsula. The city-state is 710 square kilometres and inhabited by five million people from four major communities; Chinese (majority), Malay, Indian and Eurasian." src="https://thanhtratinh.hatinh.gov.vn/images/singapore.jpeg"/>
        </>
    )
}