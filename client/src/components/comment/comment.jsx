import React from "react";

import "./comment.css";
import { getComment, sendComment } from "./CmtFunction";
import { Modal } from "antd";

export default class TourComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_cmt: [],
      comment: "",
      failed: false,
      openModal: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onCommentClick = this.onCommentClick.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOk() {
    this.setState({ openModal: false });
    window.location.href = "/sign-in";
  }

  handleCancel() {
    this.setState({ openModal: false });
    window.location.href = "/sign-in";
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.comment)
  }

  onCommentClick() {
    // e.preventDefault()

    const key = localStorage.key(0);

    if (key === null) {
      this.setState({ failed: true, openModal: true });
    } else {
      const user_json = JSON.parse(localStorage.getItem("user"));

      const cmt = this.state.comment;

      sendComment(
        user_json.id,
        user_json.email,
        this.props.type,
        this.props.type_name,
        cmt,
        user_json.name,
        user_json.avatar
      ).then((res) => {
        // alert(res.msg)
        getComment(this.props.type, this.props.type_name).then((res) => {
          if (res) {
            console.log("Update new comment table");

            this.setState({ current_cmt: res, comment: "" });
          }
        });

        this.forceUpdate();
      });
    }
  }

  componentDidMount() {
    getComment(this.props.type, this.props.type_name).then((res) => {
      if (res) {
        this.setState({ current_cmt: res });
      }
    });
  }

  render() {
    // console.log(this.props.type, this.props.type_name, this.props.user["id"], this.props.user["email"])

    return (
      <div className="be-comment-block">
        {this.state.failed ? (
          <div>
            <Modal
              open={this.state.openModal}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              zIndex="2000"
            >
              <div className="notice-wrapper" style={{ width: "100%" }}>
                <img
                  src="https://www.publicdomainpictures.net/pictures/360000/nahled/nein-symbol-rot-warnung.png"
                  className="img-fluid modal-notice warn"
                  alt="Responsive"
                />
              </div>

              <h1 className="modal-msg">Please log in to comment!</h1>
            </Modal>
          </div>
        ) : (
          ""
        )}
        <h1 className="comments-title">
          Comments ({this.state.current_cmt.length})
        </h1>
        {this.state.current_cmt.map((cmt) => (
          <div className="be-comment">
            <div className="be-img-comment">
              <a href="blog-detail-2.html">
                <img src={cmt.avatar} alt="" className="be-ava-comment" />
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                <a href="blog-detail-2.html">{cmt.name}</a>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o"></i>
                {cmt.createAt}
              </span>

              <p className="be-comment-text">{cmt.comment}</p>
            </div>
          </div>
        ))}
        <form className="form-block">
          <div className="row g-4">
            {/* <div className="col-xs-12 col-sm-6">
                                <div className="form-group fl_icon">
                                    <div className="icon"><i className="fa fa-user"></i></div>
                                    <input className="form-input" type="text" placeholder="Your name" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 fl_icon">
                                <div className="form-group fl_icon">
                                    <div className="icon"><i className="fa fa-envelope-o"></i></div>
                                    <input className="form-input" type="text" placeholder="Your email" />
                                </div>
                            </div> */}
            <h2 style={{ fontSize: "24px" }}>Write your comments</h2>
            <div className="col-xs-12">
              <form className="form-group">
                <textarea
                  id="myTextarea"
                  className="form-input"
                  rows="4"
                  cols="50"
                  name="comment"
                  value={this.state.comment}
                  placeholder="Write down your comments"
                  onChange={this.onChange}
                ></textarea>
              </form>
              <div
                className="btn btn-primary pull-right"
                style={{ width: "100%", marginTop: "15px" }}
                onClick={this.onCommentClick}
              >
                Comment
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
