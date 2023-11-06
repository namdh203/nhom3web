import React from 'react'
import "./home_banner.css"
import BannerImg from './banner_img.jsx'
import BannerBtn from "./banner_btn.jsx"

export default function HomeBanner(props) {
    return (
        <>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerBtn></BannerBtn>
        </>
    )
}