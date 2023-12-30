import React from "react";
import { Link } from 'react-router-dom'
import "../../../index.css";
import "./rcm-accom.css";

import RcmAccomCard from "./rcm-accom-card.jsx";
import { getAccomList } from "./RcmAccomFunction.js";

export default class RcmAccom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accomData: null,
      pagenum: null,
      card_per_page: 12,
      pagelist: null,
      query: ""
    };

    this.onChange = this.onChange.bind(this)
  }

  loadAccom() {
    var page_list = [];
    getAccomList(50, this.state.query).then((res) => {
      this.setState({ accomData: res }, () => {
        for (let i = 0; i < res.length / this.state.card_per_page; i++) {
          page_list.push(i);
        }

        this.setState({ pagelist: page_list });
      });
    });
  }

  componentDidMount() { 
    const currentURL = window.location.href;

    const url = new URL(currentURL);

    var query = url.searchParams.get("query");

    if (query === null) {
      query = ""
    }

    this.setState({query: query}, () => {
      this.loadAccom()
    })

    var page_num = url.searchParams.get("page_num");

    page_num = parseInt(page_num);

    if (isNaN(page_num)) {
      page_num = 1;
    }

    this.setState({ pagenum: page_num });
    // const name = url.searchParams.get("name");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, pagenum: 1 }, () => {
      this.loadAccom()
    })
  }

  render() {
    if (
      this.state.accomData === null ||
      this.state.pagelist === null ||
      this.state.pagenum === null
    ) {
      return <p>Loading...</p>;
    } else {
      console.log("Page num: ", this.state.pagenum + 1);
    }

    return (
      <div className="rcm-accom_wrapper">
        <div className="buffer-block" style={{ height: "51px" }}></div>

        <div className="rcm-banner">
          <img src="https://bpb-eu-w2.wpmucdn.com/blogs.lincoln.ac.uk/dist/a/8671/files/2022/04/StMarks-011-by-E-Egg-Joiner-P-small1500.jpg" className="img-fluid rcm-banner_img" alt="Responsive" />
          <div className="rcm-banner_intro">
            <h2>Recommended Accommodation Options for visitors.</h2>
            <p>Here are some of our recommendations for your trip.</p>
            <a href="#main">
              <div className="nav-btn_wrapper">
                <div className="nav-btn">
                  <span>View all accommodations   <i className="fa-solid fa-angle-down"></i></span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="rcm-main" id="main">
          <div className="searchBar">
            <h2>Which accommodation....?</h2>
            <input type="text" value={this.state.query} name="query" placeholder="Accommodation" onChange={this.onChange} />
          </div>
          <div className="rcm-main_wrapper row gx-4 gy-5">
            {this.state.accomData
              .slice(
                (this.state.pagenum - 1) * this.state.card_per_page,
                this.state.card_per_page * this.state.pagenum
              )
              .map((accom, index) => (
                <RcmAccomCard key={index} accom={accom}></RcmAccomCard>
              ))}
          </div>
        </div>

        <nav aria-label="Page navigation rcm-pagination">
          <ul className="pagination justify-content-center no-margin-bottom pb-40px">
            <li className="page-item">
              <a className="page-link" href={`?page_num=${Math.max(this.state.pagenum - 1, 1)}&query=${this.state.query}`}>Previous</a>
            </li>
            {this.state.pagelist.map((page, index) => (
              <li key={index} className={`page-item${(this.state.pagenum == page + 1) ? " chosen" : ""}`}><a className="page-link" href={`?page_num=${page + 1}&query=${this.state.query}`}>{page + 1}</a></li>
            ))}
            <li className="page-item">
              <a className="page-link" href={`?page_num=${Math.min(this.state.pagenum + 1, this.state.pagelist.length)}&query=${this.state.query}`}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
