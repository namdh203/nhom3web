import React from 'react';
import RcmCard from './rcm_card';

export default function RcmBlock(props) {
    return (
        <>
            <h2 className="rcm-title">{props.title}</h2>
            <div className='row gx-4'>
                <div className='col col-md-3 col-sm-4'>
                    <RcmCard src="https://pyt-images.imgix.net/images/activity/2-min.png?dpr=1&auto=format,compress,enhance&q=40"/>
                </div>
                <div className="col col-md-3 col-sm-4">
                    <RcmCard src="https://pyt-images.imgix.net/images/activity/Eur2-min.png?dpr=1&auto=format,compress,enhance&q=40"/>
                </div>
                <div className='col col-md-3 col-sm-4'>
                    <RcmCard src="https://pyt-images.imgix.net/images/activity/Thailand1-min.png?dpr=1&auto=format,compress,enhance&q=40"/>
                </div>
                <div className="col col-md-3 col-sm-4">
                    <RcmCard src="https://pyt-images.imgix.net/images/activity/Singa4-min.png?dpr=1&auto=format,compress,enhance&q=40"/>
                </div>
            </div>
        </>
    )
}