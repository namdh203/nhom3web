import React from 'react';
import RcmCard from './rcm_card';

export default function RcmBlock(props) {
    return (
        <div className="rcm-block">
            <h2 className="rcm-title">{props.title}</h2>
            <div className="container-md">
                <div className='row g-4'>
                    <div className='col col-md-4 col-sm-6'>
                        <RcmCard name="Uluwatu temple" desc="Packages" url = "/tour/bali-tour" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4b/00/b2/uluwatu-temple-as-seen.jpg?w=500&h=-1&s=1"/>
                    </div>
                    <div className="col col-md-4 col-sm-6">
                        <RcmCard name="Tirta Gangga" desc="Packages" url = "/tour/bali-tour" src="https://a.cdn-hotels.com/gdcs/production153/d558/3484c783-ac9e-422f-96de-3c54f81f7e98.jpg"/>
                    </div>
                    <div className="col col-md-4 col-sm-6">
                        <RcmCard name="Lempuyang" desc="Packages" url = "/tour/bali-tour" src="https://therunawayfamily.com/wp-content/uploads/2023/06/gates-of-heaven-bali.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}