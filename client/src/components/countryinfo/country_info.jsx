import React from 'react'
import "../../index.css"
import "../tourinfo/tour_info.css"
import "./country_info.css"
import SuggestCard from './suggest_card'
import { getCountryData, getTourData } from './CountryFunction'
import { Carousel } from 'antd';

export default class CountryInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countryData: null,
            tourData: null
        }

        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        const currentURL = window.location.href;

        const url = new URL(currentURL);

        const id = url.searchParams.get("id");
        const type = url.searchParams.get("type")
        // const name = url.searchParams.get("name");

        if (type == null) {
            type = "destination"
        }

        if (type != null) {
            getCountryData(id).then(res => {
                this.setState({ "countryData": res })
            }).catch(err => {
                console.log('err: ', err)
            })

            getTourData(id, type).then(res => {
                this.setState({ 'tourData': res })
            })
                .catch(err => {
                    console.log('err: ', err)
                })

        }
    }

    onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    render() {

        if (this.state.tourData === null || this.state.countryData === null) {
            return <p>Loading...</p>
        } 

        return (
            <div className="country_wrapper">
                <div className="buffer-block" style={{ 'height': '54px' }}></div>
                <div className="country-header_wrapper">
                    <h2 className="country-header">
                        {this.state.countryData.countryName} Tour
                    </h2>
                    <p style={{ "margin": "0" }}>Best packages in {this.state.countryData.countryName}</p>
                </div>
                <div className="country-info_wrapper">

                    {/* <img src={this.state.countryData.demoImage} className="img-fluid country-banner" alt="Responsive" /> */}
                    <Carousel afterChange={this.onChange} style={{ width: "100%" }}>
                        {this.state.tourData.map((tour) => (
                            <div className="country-banner_wrapper">
                                <img src={tour.demoImage} className="img-fluid country-banner" alt="Responsive" />
                            </div>
                        ))}
                    </Carousel>

                    <div className="main-info" style={{"height": "20px", "border-radius": "0 0 5px 5px"}}>

                    </div>

                    <div className="container-md country-info_main" style={{ "padding-bottom": "50px" }}>
                        <div className="country-desc">
                            <h2>Description</h2>

                            <p>{this.state.countryData.description}</p>
                        </div>
                        <div className="country-addition">
                            <h2>Addition Info</h2>
                            {this.state.countryData.additionInfo.slice(0, 4).map((info) => (
                                <p><i className="fa-solid fa-check"></i>        {info}</p>
                            ))}
                        </div>
                        <div className="suggest-tour row">
                            <h2 style={{ "margin": 0 }}>Tour Suggestions</h2>
                            {this.state.tourData.slice(0, 3).map((tour) => (
                                <SuggestCard tour={tour}></SuggestCard>
                            ))}


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}