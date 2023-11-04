import React from 'react'
import "./home_banner.css"

export default function HomeBanner(props) {
    return (
        <>
            <img src={props.src} className="img-fluid home-banner" alt="Responsive"/>
            <div className="banner-info">
            <h1 className="banner-header">{props.name}</h1>
            <p className="banner-desc">{props.desc}</p>
            </div>
            <div className="banner-forward">
                <i class="fa-solid fa-chevron-right banner-arrow banner-arrow-forward"></i>
            </div>
            <div className="banner-backward">
                <i class="fa-solid fa-chevron-left banner-arrow banner-arrow-backward"></i>
            </div>
        </>
    )
}