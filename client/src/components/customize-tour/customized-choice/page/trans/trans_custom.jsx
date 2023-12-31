import React from "react";
import RcmTransCardCustom from "./rcm-trans-card-custom";
import { Modal } from "antd";

export default class RestCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      pagenum: null,
      card_per_page: 12,
      pagelist: null,
      query: "",
      activeList: [],
      success: false,
      openModal: true,
    };

    this.onChange = this.onChange.bind(this);
    this.loadTrans = this.loadTrans.bind(this);
    this.checkInclude = this.checkInclude.bind(this);
    this.save = this.save.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOk() {
    this.setState({ openModal: false });
  }

  handleCancel() {
    this.setState({ openModal: false });
  }

  loadTrans() {
    var page_list = [];

    const query = this.state.query;

    var filteredData = this.props.data.filter(function (data) {
      return data.name.includes(query);
    });

    // console.log("Id: ", filteredData[0].id)

    for (let i = 0; i < filteredData.length / this.state.card_per_page; i++) {
      page_list.push(i);
    }

    this.setState({ pagelist: page_list, filteredData: filteredData });
  }

  componentDidMount() {
    this.setState({ activeList: [] });
    const currentURL = window.location.href;

    const url = new URL(currentURL);

    var query = url.searchParams.get("query");

    if (query === null) {
      query = "";
    }

    this.setState({ query: query }, () => {
      this.loadTrans();
    });

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
      this.loadTrans();
    });
  }

  checkInclude(id) {
    for (let i = 0; i < this.state.activeList.length; i++) {
      if (this.state.activeList[i] === id) {
        return true;
      }
    }

    return false;
  }

  save() {
    var destId = JSON.parse(localStorage.getItem("current_dest"));
    const jsonFile = JSON.stringify({ arr: this.state.activeList.join(",") });
    localStorage.setItem(`trans_dest${destId}`, jsonFile);
    this.setState({ success: true }, () => {
      if (this.state.openModal === false) {
        this.setState({ openModal: true });
      }
    });
  }

  render() {
    if (
      this.state.transData === null ||
      this.state.pagelist === null ||
      this.state.pagenum === null
    ) {
      return <p>Loading...</p>;
    } else {
      console.log("Page num: ", this.state.pagenum + 1);
    }

    return (
      <div className="rcm-accom_wrapper">
        {this.state.success ? (
          <div>
            <Modal
              open={this.state.openModal}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              zIndex="2000"
            >
              <div className="notice-wrapper" style={{ width: "100%" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/943/943593.png"
                  className="img-fluid modal-notice info"
                  alt="Responsive"
                />
              </div>

              <h1 className="modal-msg">Save customization successfully!</h1>
            </Modal>
          </div>
        ) : (
          ""
        )}
        {/* <div className="buffer-block" style={{ height: "51px" }}></div> */}

        {/* <div className="rcm-banner">
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
                </div> */}

        <div
          className="rcm-main"
          id="main"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* <div className="searchBar">
                        <h2>Which accommodation....?</h2>
                        <input type="text" value={this.state.query} name="query" placeholder="Accommodation" onChange={this.onChange} />
                    </div> */}
          <div
            className="rcm-main_wrapper-custom row gx-10 gy-5"
            style={{ padding: "0 40px" }}
          >
            {this.state.filteredData
              .slice(
                (this.state.pagenum - 1) * this.state.card_per_page,
                this.state.card_per_page * this.state.pagenum
              )
              .map((trans, index) => (
                <div
                  className="custom-card col col-6 col-sm-6 col-md-3"
                  key={index}
                  onClick={() => {
                    if (!this.state.activeList.includes(trans.transId)) {
                      this.setState(
                        {
                          activeList: this.state.activeList.concat(
                            trans.transId
                          ),
                        },
                        () => {
                          console.log("Active List: ", this.state.activeList);
                        }
                      );
                    } else {
                      const index = this.state.activeList.indexOf(
                        trans.transId
                      );
                      if (index !== -1) {
                        const newArray = [...this.state.activeList];
                        newArray.splice(index, 1);
                        this.setState({ activeList: newArray }, () => {
                          console.log("Active List: ", this.state.activeList);
                        });
                      }
                    }
                  }}
                >
                  <RcmTransCardCustom
                    trans={trans}
                    active={this.state.activeList.includes(trans.transId)}
                  ></RcmTransCardCustom>
                </div>
              ))}
          </div>
          <div className="save-custom" onClick={() => this.save()}>
            <div className="save=customer_btn">Save</div>
          </div>
        </div>

        <nav
          aria-label="Page navigation rcm-pagination"
          style={{ backgroundColor: "#fff" }}
        >
          <ul
            className="pagination justify-content-center no-margin-bottom pb-40px"
            style={{ marginTop: "0", paddingTop: "20px" }}
          >
            <li className="page-item">
              <a
                className="page-link"
                href={`?page_num=${Math.max(this.state.pagenum - 1, 1)}&query=${
                  this.state.query
                }`}
              >
                Previous
              </a>
            </li>
            {this.state.pagelist.map((page, index) => (
              <li
                key={index}
                className={`page-item${
                  this.state.pagenum === page + 1 ? " chosen" : ""
                }`}
              >
                <a
                  className="page-link"
                  href={`?page_num=${page + 1}&query=${this.state.query}`}
                >
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
                )}&query=${this.state.query}`}
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
