import React, { Component } from "react";
import { login } from './UserFunction.js'
import { Link } from "react-router-dom"
import "../../App.css"
import "../dashboard/dashboard.js"

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            console.log(res)
            const body = document.body
            const nav_items = body.querySelectorAll(".nav-item")
            for (let i = 0; i < nav_items.length; i++) {
                nav_items[i].style.display = "none"
            }   
            window.location.href = "/"

        })
    }

    render() {
        return (
            <div className="auth-wrapper">
                <Link className="dashboard-link" to={"/"}>
                    <div className="black-layer" style={{
                        "z-index": "9",
                        display: "flex"
                    }}></div>
                </Link>
                <div className="auth-inner">
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                    </form>
                </div>
            </div>
        );
    }
}