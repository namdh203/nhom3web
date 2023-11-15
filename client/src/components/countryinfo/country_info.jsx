import React from 'react'
import "../../index.css"
import "../tourinfo/tour_info.css"
import "./country_info.css"
import SuggestCard from './suggest_card'

export default class CountryInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="country_wrapper">
                <div className="buffer-block" style={{ 'height': '54px' }}></div>
                <div className="country-header_wrapper">
                    <h2 className="country-header">
                        {this.props.name} Tour
                    </h2>
                </div>
                <div className="country-info_wrapper">

                    <div className="country-banner_wrapper">
                        <img src="https://lp-cms-production.imgix.net/2023-01/GettyImages-827446284.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75" className="img-fluid country-banner" alt="Responsive" />
                    </div>
                    <div className="main-info" style={{ "border-radius": "0", "margin-bottom": "0" }}>
                        <div className="row" style={{ 'height': '100%' }}>
                            <div className="main-info_item-wrapper col col-md-2 col-sm-6">
                                <div className="main-info_item">
                                    <h3>DURATION</h3>
                                    <p>5-7 days</p>
                                </div>
                            </div>
                            <div className="main-info_item-wrapper col col-md-2 col-sm-6">
                                <div className="main-info_item">
                                    <h3>PRIZE</h3>
                                    <p>$30-$40</p>
                                </div>
                            </div>
                            <div className="main-info_item-wrapper col col-md-2 col-sm-6"></div>
                            <div className="main-info_item-wrapper col col-md-2 col-sm-6"></div>
                            <div className="main-info_item-wrapper col col-md-2 col-sm-6"></div>

                            <div className="main-info_item-wrapper voting col col-md-2 col-sm-12">
                                <div className="main-info_item voting">
                                    <h3>VOTING</h3>
                                    <div>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-md" style={{"padding-bottom":"50px"}}>
                        <div className="country-desc">
                            <h2>Description</h2>

                            <p>A Bali tour promises an immersive journey into a realm of enchanting landscapes and rich cultural heritage. Nestled in the Indonesian archipelago, Bali captivates visitors with its lush green rice terraces, volcanic mountains, and pristine beaches. The island's natural beauty is complemented by a vibrant culture steeped in Hindu traditions. Travelers can witness traditional Balinese ceremonies, such as the mesmerizing dance performances and religious rituals at ancient temples like Uluwatu and Tanah Lot. Bali's cultural tapestry is woven into its daily life, from vibrant markets to art galleries showcasing the island's artistic prowess.</p>

                            <p>The allure of Bali extends beyond its cultural facets to its sun-kissed beaches that are nothing short of paradisiacal. From the bustling shores of Kuta to the serene stretches of Seminyak, Bali offers a spectrum of coastal experiences. Visitors can indulge in water activities like surfing, snorkeling, or simply unwind on the sands to soak in the tropical ambiance. Each beach has its own unique charm, whether it's the lively atmosphere of Seminyak, the surfing haven of Uluwatu, or the tranquil shores of Sanur. Bali's coastal allure complements its inland wonders, creating a diverse and unforgettable travel experience.</p>

                            <p className="last">In addition to its cultural and coastal treasures, Bali entices adventurers with its lush interior. Explore the picturesque Ubud, surrounded by terraced rice fields and dense jungles. Discover hidden waterfalls, trek through the verdant landscapes, or visit the Bali Swing for an adrenaline-pumping experience with breathtaking views. The island's diverse topography offers a perfect blend of relaxation and exploration, making a Bali tour an immersive and unforgettable escape into paradise.</p>
                        </div>
                        <div className="suggest-tour row">
                            <h2 style={{"margin": 0}}>Tour Suggestions</h2>
                            <SuggestCard></SuggestCard>
                            <SuggestCard></SuggestCard>
                            <SuggestCard></SuggestCard>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}