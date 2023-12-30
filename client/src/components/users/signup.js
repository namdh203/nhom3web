import React, { Component } from "react";
import { register } from "./UserFunction.js";
import { Link } from "react-router-dom";

import { Modal } from "antd";
import "../../App.css";
import "../dashboard/dashboard.js";
import "./signup.css";

// import Notification from "../notification/notification.jsx";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: {},
      openModal: false,
      success: false,
      failed: false,
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
    window.location.href = `/sign-in`;
  }

  handleCancelModified() {
    this.setState({ openModal: false });
    window.location.href = `/sign-in`;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    if (
      !this.state.first_name.trim() ||
      !this.state.last_name.trim() ||
      !this.state.email.trim() ||
      !this.state.last_name.trim()
    ) {
      alert("Name & Email & Password are required fields");
      return;
    }

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      // rotes to sign-in
      if (res.status === "Registered!") {
        // alert("Registered successfully! Please sign in again.")
        this.setState({ success: true, openModal: true });
      } else {
        this.setState({ failed: true, openModal: true });
        // alert("User has been existed! Let's check information again.")
      }
    });
  }

  render() {
    return (
      <div className="auth-wrapper-signup">
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

              <h1 className="modal-msg">
                Registered successfully! Please sign in again.
              </h1>
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
                User has been existed! Let's check information again.
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
        <div className="auth-inner-signup">
          <div className="image_signup">
            <img
              src="travel_signup.png"
              alt="Registration img"
              className="registration-image"
            />
          </div>
          <form onSubmit={this.onSubmit} className="signup-form">
            <h3>Sign Up</h3>

            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="First name"
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Last name"
                value={this.state.last_name}
                onChange={this.onChange}
              />
            </div>
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
                Create account
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
