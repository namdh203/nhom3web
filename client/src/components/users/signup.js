import React, { Component } from 'react'
import { register } from './UserFunction.js'
import { Link } from 'react-router-dom'
import '../../App.css'
import "../dashboard/dashboard.js"
import './signup.css'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
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

        if (!this.state.first_name.trim() || !this.state.last_name.trim()
        || !this.state.email.trim() || !this.state.last_name.trim()) {
            alert('Name & Email & Password are required fields');
            return;
        }

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            // rotes to sign-in
            if (res.status === "Registered!") {
                alert("Registered successfully! Please sign in again.")
                window.location.href = `/sign-in`;
            } else {
                alert("User has been existed! Let's check information again.")
            }
        })
    }


    render() {
        return (

            <div className="auth-wrapper-signup">
                <Link className="dashboard-link" to={"/"}>
                    <div className="black-layer" style={{
                        "z-index": "9",
                        display: "flex"
                    }}></div>
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
        )
    }
}