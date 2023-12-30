import React from "react";
import BannerImg from "./banner_img/banner_img.jsx";
import "./home_banner.css";
import { Carousel } from "antd";
import { getBannerData } from "./BannerFunction.js";
import SearchBar from "./SearchBar.js";

class HomeBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  componentDidMount() {
    const currentURL = window.location.href;

    const url = new URL(currentURL);

    var type = url.searchParams.get("type");

    if (type === null) {
      type = "destination";
    }

    if (type !== null) {
      getBannerData(7, type)
        .then((res) => {
          this.setState({ bannerData: res });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    // console.log(this.state.bannerData)
    return (
      <div style={{ position: "relative" }}>
        <Carousel
          afterChange={this.onChange}
          style={{ width: "100%" }}
          autoplay
          autoplaySpeed={"500"}
        >
          {this.state.bannerData.map((banner, index) => (
            <BannerImg
              src={banner.demoImage}
              name={banner.title}
              desc={banner.description}
              key={index}
            />
          ))}
        </Carousel>
        <h1 id="heading">
          <span
            style={{
              lineHeight: "100%",
              fontWeight: "700",
              color: "white",
            }}
          >
            Plan your next&nbsp;
          </span>
          <span id="hassle-free">Hassle-free&nbsp;</span>
          <span
            style={{
              lineHeight: "100%",
              fontWeight: "700",
              color: "white",
            }}
          >
            holiday
          </span>
        </h1>
        <SearchBar />
      </div>
    );
  }
}
export default HomeBanner;

// <BannerImg src={props.src} name={props.name} desc={props.desc}></BannerImg>
