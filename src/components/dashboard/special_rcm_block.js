import React from 'react';
import BigRcmCard from "./big_rcm_card"
import "./dashbroad.css"


export default function SpecialRcmBlock(props) {
    return (
        <>
            <h2 className="rcm-title">{props.title}</h2>
            <div className='row gx-4'>
                <div className='col col-md-6'>
                    <BigRcmCard src="http://pyt-images.imgix.net/images/activity/amazing-bali-big-card.png?w=566&h=438&dpr=1&auto=format,compress&q=40"/>
                </div>
                <div className='col col-md-6'>
                    <BigRcmCard src="https://pyt-images.imgix.net/images/activity/extrodinary-bali-big-cards.png?w=566&h=438&dpr=1&auto=format,compress&q=40"/>
                </div>
            </div>
        </>
    )
}