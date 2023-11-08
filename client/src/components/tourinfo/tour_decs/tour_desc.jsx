import React from "react";
import "./tour_desc.css"

export default class TourDesc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="tour-desc_wrapper container-md" style={{display: "none"}}>
                <div className="tour-desc">
                    <h1>Description</h1>
                    <p>Despite what many people think, Bali is not just a holiday destination that offers paradisiacal beaches, but it also has a lot more to offer its range of tourists. In Bali, you can enjoy the mountain as well as coastal landscapes, rich cultural heritage as well as many unique and fun activities!</p>

                    <p>Bali's main advantage is that it offers luxury hotels and private villas with swimming pools and spectacular views at an affordable price, making it a common choice among honeymooners and couples. And accommodation isn't the only place you'll find value for your money in Bali; on this incredible island, you can treat yourself to luxury massages and spa treatments whilst still staying within your budget.</p>

                    <p>Bali is also popular among lovers of watersports and particularly surfers for its magnificent waves!</p>

                    <h1>Duration </h1>
                    <p>This tour usually lasts about 5 - 7 days with a lot of vibrant activities that can stimulate your interest.</p>

                    <h1>Options</h1>
                    <table className="tour-desc_options">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>TOUR NAME</td>
                                <td>DURATION</td>
                                <td>START DATE</td>
                                <td>END DATE</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Combo 1</td>
                                <td>5 days</td>
                                <td>15th June</td>
                                <td>20th June</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Combo 2</td>
                                <td>3 days</td>
                                <td>16th July</td>
                                <td>19th July</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Combo 2</td>
                                <td>3 days</td>
                                <td>16th July</td>
                                <td>19th July</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Combo 3</td>
                                <td>4 days</td>
                                <td>16th October</td>
                                <td>20th October</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Combo 4</td>
                                <td>3 days</td>
                                <td>1st November</td>
                                <td>4th November</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Combo 5</td>
                                <td>3 days</td>
                                <td>16th December</td>
                                <td>19th December</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="tour-factor_wrapper">
                    <div className="tour-factor">
                        <i class="fa-regular fa-calendar-days"></i>
                        <span>Planning</span>
                    </div>
                    <div className="tour-factor">
                        <i class="fa-solid fa-truck-plane"></i>
                        <span>Transportations</span>
                    </div>
                    <div className="tour-factor">
                        <i class="fa-solid fa-hotel"></i>
                        <span>Accommodations</span>
                    </div>
                    <div className="tour-factor">
                        <i class="fa-solid fa-heart-pulse"></i>
                        <span>Activities</span>
                    </div>
                    <div className="tour-factor last-element">
                        <i class="fa-solid fa-drumstick-bite"></i>
                        <span>Restaurants</span>
                    </div>
                </div>
            </div>
        )
    }
}