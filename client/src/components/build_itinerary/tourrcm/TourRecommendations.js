import "./rcm-tour.css";

import axios from "axios";
import React, { Component } from "react";
import TourCard from "./TourCard";

export default class TourRecommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourData: null,
      pagenum: props.page_num,
      card_per_page: 12,
      pagelist: null,
      dest: null,
    };
  }

  componentDidMount() {
    var page_list = [];
    this.getTourList(50).then((res) => {
      this.setState({ tourData: res }, () => {
        for (let i = 0; i < res.length / this.state.card_per_page; ++i) {
          page_list.push(i);
        }

        this.setState({ pagelist: page_list });
      });
    });

    const currentURL = window.location.href;
    const url = new URL(currentURL);

    var page_num = url.searchParams.get("page_num");
    page_num = parseInt(page_num);
    if (isNaN(page_num)) page_num = 1;

    const destination = url.searchParams.get("dest");

    this.setState({ pagenum: page_num, dest: destination });
  }

  getTourList = async (length) => {
    const response = await axios.post("/tours/getaccomlists", {
      length: length,
    });
    return response.data;
  };

  render() {
    if (
      this.state.tourData === null ||
      this.state.pagelist === null ||
      this.state.pagenum === null
    ) {
      return <p>Loading...</p>;
    }
    return (
      <div className="rcm-tour_wrapper">
        <div style={{ height: "51px" }}></div>
        <div className="rcm-banner">
          <div className="crop">
            <img
              src="https://i.pinimg.com/originals/10/39/d3/1039d3383061ccffd6cfa291fd46b833.jpg"
              className="img-fluid rcm-banner_img"
              alt="Banner background: Paris sunset"
            />
          </div>

          <div className="rcm-banner_intro">
            <h2>Recommended Tour Packages for your chosen Cities</h2>
            <p>Here are some of our recommendations for your trip.</p>
            <a href="#main">
              <div className="nav-btn_wrapper">
                <div className="nav-btn">
                  <span>
                    View all Packages <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="rcm-main" id="main">
          <div className="rcm-main_wrapper row gx-4 gy-5">
            {this.state.tourData
              .slice(
                (this.state.pagenum - 1) * this.state.card_per_page,
                this.state.card_per_page * this.state.pagenum
              )
              .map(
                (tour) => tour.pricePerNight < 180 && <TourCard tour={tour} />
              )}
          </div>
        </div>

        <nav aria-label="Page navigation rcm-pagination">
          <ul className="pagination justify-content-center no-margin-bottom pb-40px">
            <li className="page-item">
              <a
                className="page-link"
                href={`?page_num=${Math.max(this.state.pagenum - 1, 1)}`}
              >
                Previous
              </a>
            </li>
            {this.state.pagelist.map((page) => (
              <li
                className={`page-item${
                  this.state.pagenum === page + 1 ? " chosen" : ""
                }`}
              >
                <a className="page-link" href={`?page_num=${page + 1}`}>
                  {page + 1}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link"
                href={`?page_num=${Math.min(
                  this.state.pagenum + 1,
                  this.state.pagelist.length
                )}`}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
