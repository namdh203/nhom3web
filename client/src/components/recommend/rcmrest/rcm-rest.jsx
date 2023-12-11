import React from 'react'
import "../../../index.css"
import "./rcm-rest.css"

import RcmRestCard from './rcm-rest-card.jsx'
import { getRestList } from "./RcmRestFunction.js"

export default class RcmRest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restData: null,
            pagenum: null,
            card_per_page: 8,
            pagelist: null
        }
    }

    componentDidMount() {

        var page_list = []

        getRestList(50).then(res => {
            this.setState({restData: res}, () => {
                for (let i = 0; i < res.length / this.state.card_per_page; i ++) {
                    page_list.push(i)
                }

                this.setState({pagelist: page_list})})
        }) 

        const currentURL = window.location.href;

        const url = new URL(currentURL);

        var page_num = url.searchParams.get("page_num")

        page_num = parseInt(page_num)

        if (page_num === null) {
            page_num = 1
        }

        this.setState({pagenum: page_num});
    }

    render() {

        if (this.state.restData === null || this.state.pagelist === null || this.state.page_num === null) {
            return <p>Loading...</p>
        }

        return (
            <div className="rcm-accom_wrapper">
                <div className="buffer-block" style={{ "height": "51px" }}>

                </div>

                <div className="rcm-banner">
                    <img src="https://www.theviewexeter.co.uk/resourcefiles/gallery-images/the-view-restaurant-1.jpg" className="img-fluid rcm-banner_img" alt="Responsive" />
                    <div className="rcm-banner_intro">
                        <h2>Recommended Restaurant Options for visitors.</h2>
                        <p>Here are some of our recommendations for your trip.</p>
                        <a href="#main">
                            <div className="nav-btn_wrapper">
                                <div className="nav-btn">
                                    <span>View all restaurants   <i class="fa-solid fa-angle-down"></i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="rcm-main" id="main">
                    <div className="rcm-main_wrapper row g-4">
                        {this.state.restData.slice((this.state.pagenum - 1) * this.state.card_per_page,
                        this.state.card_per_page * this.state.pagenum).map(rest => (
                            <RcmRestCard rest={rest}></RcmRestCard>
                        ))}
                    </div>

                </div>

                <nav aria-label="Page navigation rcm-pagination">
                    <ul class="pagination justify-content-center no-margin-bottom pb-40px">
                        <li class="page-item">
                            <a class="page-link" href={`?page_num=${Math.max(this.state.pagenum - 1, 1)}`}>Previous</a>
                        </li>
                        {this.state.pagelist.map((page) => (
                            <li class={`page-item${(this.state.pagenum == page + 1) ? " chosen" : ""}`}><a class="page-link" href={`?page_num=${page + 1}`}>{page + 1}</a></li>
                        ))}
                        <li class="page-item">
                            <a class="page-link" href={`?page_num=${Math.min(this.state.pagenum + 1, this.state.pagelist.length)}`}>Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}