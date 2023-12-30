import React, { Component } from "react";
import { login } from "./UserFunction.js";
import { Link } from "react-router-dom";
import { Modal } from "antd";

import "../../App.css";
import "../dashboard/dashboard.js";
import "./login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      success: false,
      failed: false,
      openModal: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOkModified = this.handleOkModified.bind(this);
    this.handleCancelModified = this.handleCancelModified.bind(this);
  }

  handleOk() {
    this.setState({ openModal: false });
  }

  handleCancel() {
    this.setState({ openModal: false });
  }

  handleOkModified() {
    this.setState({ openModal: false });
    window.location.href = `/`;
  }

  handleCancelModified() {
    this.setState({ openModal: false });
    window.location.href = `/`;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res.status === "Success") {
        // alert("Login successfully!")
        const body = document.body;
        const nav_items = body.querySelectorAll(".nav-item");
        for (let i = 0; i < nav_items.length; i++) {
          nav_items[i].style.display = "none";
        }
        // window.location.href = "/"

        this.setState({ success: true, openModal: true });

        const user_ = {
          email: this.state.email,
          password: this.state.password,
          id: res.userId,
          role: res.role,
        };

        const user_json = JSON.stringify(user_);

        localStorage.setItem("user", user_json);
      } else {
        this.setState({ failed: true, openModal: true });

        // alert("Login failed! Username or password may be incorrect!")
      }
    });
  }

  render() {
    return (
      <div className="auth-wrapper-login">
        {this.state.success ? (
          <div>
            <Modal
              open={this.state.openModal}
              onOk={this.handleOkModified}
              onCancel={this.handleCancelModified}
              zIndex="2000"
            >
              <div className="notice-wrapper" style={{ width: "100%" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/943/943593.png"
                  className="img-fluid modal-notice info"
                  alt="Responsive"
                />
              </div>

              <h1 className="modal-msg">Login successfully!</h1>
            </Modal>
          </div>
        ) : (
          ""
        )}
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

              <h1 className="modal-msg">
                Login failed! Username or password may be incorrect!
              </h1>
            </Modal>
          </div>
        ) : (
          ""
        )}
        <Link className="dashboard-link" to={"/"}>
          <div
            className="black-layer"
            style={{
              zIndex: "9",
              display: "flex",
            }}
          ></div>
        </Link>
        <div className="auth-inner-login">
          <form onSubmit={this.onSubmit}>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right">
              Didn't <a href="sign-up"> Register?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
