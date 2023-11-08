import React from 'react'
import BannerImg from './banner_img/banner_img.jsx'
import "./home_banner.css"
import { Carousel } from 'antd';

const HomeBanner = (props) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} style={{width: "100%"}}>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
            <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
        </Carousel>
    );
};
export default HomeBanner;


// <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>