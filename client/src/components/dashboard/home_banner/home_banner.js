import React from 'react'
import BannerImg from './banner_img/banner_img.jsx'
import "./home_banner.css"
import { Carousel } from 'antd';
import { getBannerData } from './BannerFunction.js';

class HomeBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerData: []
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    componentDidMount() {
        getBannerData(7).then(res => {
            this.setState({ 'bannerData': res })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        // console.log(this.state.bannerData)
        return (
            
                <Carousel afterChange={this.onChange} style={{ width: "100%" }}>
                    {this.state.bannerData.map((banner) => (
                        <BannerImg src={banner.demoImage} name={banner.title} desc={banner.description} />
                    ))}
                </Carousel>
        );
    }
};
export default HomeBanner;


// <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>