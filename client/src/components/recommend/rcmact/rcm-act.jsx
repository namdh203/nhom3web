import React from 'react'
import "../../../index.css"
import "./rcm-act.css"

import RcmActCard from './rcm-act-card.jsx'
import { getActList } from "./RcmActFunction.js"

export default class RcmAct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actData: null,
            pagenum: null,
            card_per_page: 8,
            pagelist: null
        }
    }

    componentDidMount() {

        var page_list = []

        getActList(50).then(res => {
            this.setState({ actData: res }, () => {
                for (let i = 0; i < res.length / this.state.card_per_page; i ++) {
                    page_list.push(i)
                }

                this.setState({pagelist: page_list})
            })
        })

        const currentURL = window.location.href;

        const url = new URL(currentURL);

        var page_num = url.searchParams.get("page_num")

        page_num = parseInt(page_num)

        if (page_num === null) {
            page_num = 1
        }

        this.setState({pagenum: page_num});
        // const name = url.searchParams.get("name");


    }

    render() {

        if (this.state.actData === null || this.state.pagelist === null || this.state.page_num === null) {
            return <p>Loading...</p>
        } else {
            console.log("Page num: ", this.state.pagenum + 1)
        }

        return (
            <div className="rcm-accom_wrapper">
                <div className="buffer-block" style={{ "height": "51px" }}>

                </div>

                <div className="rcm-banner">
                    <img src="https://d1pk12b7bb81je.cloudfront.net/thumbor/lndbHoMuqXVkuSU_6fFL98IwGvY=/1920x910/https://d1pk12b7bb81je.cloudfront.net/images/photos/slideshows/1691513163_family-activities-photo-6.jpg" className="img-fluid rcm-banner_img" alt="Responsive" />
                    <div className="rcm-banner_intro">
                        <h2>Recommended Activities Options for visitors.</h2>
                        <p>Here are some of our recommendations for your trip.</p>
                        <a href="#main">
                            <div className="nav-btn_wrapper">
                                <div className="nav-btn">
                                    <span>View all activities   <i className="fa-solid fa-angle-down"></i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="rcm-main" id="main">
                    <div className="rcm-main_wrapper row gx-4 gy-5">
                        {this.state.actData.slice((this.state.pagenum - 1) * this.state.card_per_page,
                        this.state.card_per_page * this.state.pagenum).map(act => (
                            <RcmActCard act={act}></RcmActCard>
                        ))}
                    </div>

                </div>

                <nav aria-label="Page navigation rcm-pagination">
                    <ul className="pagination justify-content-center no-margin-bottom pb-40px">
                        <li className="page-item">
                            <a className="page-link" href={`?page_num=${Math.max(this.state.pagenum - 1, 1)}`}>Previous</a>
                        </li>
                        {this.state.pagelist.map((page) => (
                            <li className={`page-item${(this.state.pagenum == page + 1) ? " chosen" : ""}`}><a className="page-link" href={`?page_num=${page + 1}`}>{page + 1}</a></li>
                        ))}
                        <li className="page-item">
                            <a className="page-link" href={`?page_num=${Math.min(this.state.pagenum + 1, this.state.pagelist.length)}`}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}