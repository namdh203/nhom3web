import RcmAccomCardCustom from "./rcm-accom-card-custom";
import "./accom_custom.css";
import { Modal } from "antd";
import React from "react";

const card_per_page = 12;

export default class AccomCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      pagenum: null,
      pagelist: null,
      chosenAccom: null,
      openModal: false,
    };

    this.save = this.save.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  componentDidMount() {
    var page_list = [];

    for (let i = 0; i < this.props.data / card_per_page; i++) {
      page_list.push(i);
    }

    this.setState({ pagelist: page_list });

    const url = new URL(window.location);
    var page_num = url.searchParams.get("page_num");

    page_num = parseInt(page_num);

    if (isNaN(page_num)) {
      page_num = 1;
    }

    this.setState({ pagenum: page_num });
  }

  save() {
    var destId = JSON.parse(localStorage.getItem("current_dest"));
    const jsonFile = JSON.stringify({ chosenAccom: this.state.chosenAccom });
    localStorage.setItem(`accom_dest${destId}`, jsonFile);
    this.setState({ openModal: true });
  }

  render() {
    if (this.state.pagelist === null || this.state.pagenum === null) {
      return <p>Loading...</p>;
    }

    return (
      <div className="rcm-accom_wrapper">
        <div>
          <Modal
            open={this.state.openModal}
            onOk={this.closeModal}
            onCancel={this.closeModal}
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

        <div
          className="rcm-main"
          id="main"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div
            className="rcm-main_wrapper-custom row gx-10 gy-5"
            style={{ padding: "0 40px" }}
          >
            {this.props.data
              .slice(
                (this.state.pagenum - 1) * card_per_page,
                card_per_page * this.state.pagenum
              )
              .map((accom) => (
                <div
                  className="custom-card col col-6 col-sm-6 col-md-3"
                  onClick={() => this.setState({ chosenAccom: accom.id })}
                >
                  <RcmAccomCardCustom
                    accom={accom}
                    active={this.state.chosenAccom === accom.id}
                  ></RcmAccomCardCustom>
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
            {this.state.pagelist.map((page) => (
              <li
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
