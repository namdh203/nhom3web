import React from 'react'
import "./profile.css"

import {Modal} from "antd"

import { getFullProperty, updateCustomer } from "./ProfileFunction"

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            cardNo: "",
            address: "",
            phoneNumber: "",
            email: "",
            passport: "",
            avatar: "",
            avatar_list: [
                "https://cdn-icons-png.flaticon.com/512/6213/6213814.png",
                "https://cdn-icons-png.flaticon.com/512/3127/3127452.png",
                "https://cdn-icons-png.flaticon.com/512/5217/5217388.png",
                "https://cdn-icons-png.flaticon.com/512/3364/3364492.png",
                "https://img.freepik.com/free-vector/bali-concept-illustration_114360-15908.jpg",
                "https://cdn-icons-png.flaticon.com/512/939/939633.png",
                "https://cdn-icons-png.flaticon.com/512/1500/1500258.png",
                "https://cdn-icons-png.flaticon.com/512/2548/2548306.png",
                "https://cdn-icons-png.flaticon.com/512/1455/1455689.png",
                "https://cdn-icons-png.flaticon.com/512/939/939633.png",
                "https://cdn-icons-png.flaticon.com/512/1500/1500258.png",
                "https://cdn-icons-png.flaticon.com/512/2548/2548306.png",
                "https://cdn-icons-png.flaticon.com/512/1455/1455689.png"
            ],
            choose: false,
            success: false,
            openModal: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onBlackLayer = this.onBlackLayer.bind(this)
        this.onAvaClick = this.onAvaClick.bind(this)
        this.onChangeAva = this.onChangeAva.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleOk() {
        this.setState({ openModal: false })
        window.location.reload();
    }

    handleCancel() {
        this.setState({ openModel: false})
        window.location.reload();
    }


    onChange(e) {
        // console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangeAva(e) {
        // console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.src })
    }

    onBlackLayer() {
        this.setState({ choose: false})
    }

    onAvaClick() {
        this.setState({ choose: true})
    }

    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            cardNo: this.state.cardNo,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            passport: this.state.passport,
            avatar: this.state.avatar
        }

        updateCustomer(newUser).then(res => {
            // alert(res.msg)
            this.setState({success: true, openModal: true})
        })


    }

    componentDidMount() {

        const email = this.props.email

        if (email !== null) {
            console.log(email);
            getFullProperty(email).then(res => {
                this.setState({
                    name: res.name,
                    cardNo: res.cardNo,
                    address: res.address,
                    phoneNumber: res.phoneNumber,
                    email: res.email,
                    passport: res.passport,
                    avatar: res.avatar
                });
            }).catch(err => {
                console.log(err)
            })
        } else {
            console.log('localStorage trống.');
        }
    }


    render() {

        if (this.state.name === "") {
            console.log(this.state.avatar)
            return <p>Loading...</p>
        }

        return (
            <div className="profile-wrapper">
                {this.state.success ? <div><Modal open={this.state.openModal} onOk={this.handleOk} onCancel={this.handleCancel} zIndex="2000">
                    <div className="notice-wrapper" style={{ width: "100%" }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/943/943593.png"
                            className="img-fluid modal-notice info"
                            alt="Responsive"
                        />
                    </div>

                    <h1 className="modal-msg">Update information successfully</h1>

                </Modal></div> : ""}
                <div className="buffer-block" style={{ height: "100px" }}></div>
                <div className="container-md">
                    <h1>User Profile</h1>
                    <div className="buffer-block mid"></div>
                    <div className="profile-body">
                        <div className="row gx-5">
                            <div className="col col-md-3 col-12 profile-avatar">
                                <img
                                    src={this.state.avatar !== null ? this.state.avatar : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    className="img-fluid profile-avatar_img"
                                    alt="Responsive" 
                                    onClick={this.onAvaClick}/>
                                <div className="profile-quick_info">
                                    <h3>{this.state.name}</h3>
                                    <p>Phone: {this.state.phoneNumber !== null ? this.state.phoneNumber : "None"}</p>
                                    <p>Email: {this.state.email !== null ? this.state.email : "None"}</p>
                                    <p>Address: {this.state.address !== null ? this.state.address : "None"}</p>
                                    <p>CardNo: {this.state.cardNo !== null ? this.state.cardNo : "None"}</p>
                                    <p>Passport: {this.state.passport !== null ? this.state.passport : "None"}</p>
                                </div>
                            </div>
                            <div className="col col-md-9 col-12 profile-detail">
                                <h2>Information</h2>
                                <form className="user-profile_form" onSubmit={this.onSubmit}>
                                    <div className="mb-3">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>CardNo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cardNo"
                                            placeholder="Enter your card no"
                                            value={this.state.cardNo}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter your address"
                                            value={this.state.address}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phoneNumber"
                                            placeholder="Enter your phone number"
                                            value={this.state.phoneNumber}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="readonlyInput"
                                            name="email"
                                            placeholder="Enter your email address"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Passport</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="passport"
                                            placeholder="Enter your passport"
                                            value={this.state.passport}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary profile-btn">
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="choose-ava_wrapper" style={{display: `${this.state.choose ? "block" : "none"}`}}>
                    <div className="black-layer" style={{
                        "z-index": "9",
                        display: "flex",
                    }} onClick={this.onBlackLayer}></div>
                    <div className="choose-ava">
                        <h2>Choose Avatar</h2>
                        <div className="row">
                            <div className="current-ava_wrapper col col-md-6 col-12">
                                <div className="row gy-5">
                                    <div className="col col-md-12 col-12" style={{display: "flex", "alignItems": "center", "justifyContent": "center"}}>
                                        <img
                                            src={this.state.avatar !== null ? this.state.avatar : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"}
                                            className="img-fluid profile-avatar_current"
                                            alt="Responsive"
                                        />
                                    </div>
                                    <div className="col col-md-12 col-12" style={{display: "flex", "alignItems": "center", "justifyContent": "center"}}>
                                        <div className="save-ava" onClick={this.onSubmit} style={{width: "20%"}}>
                                            <div className="save-btn" style={{"textAlign": "center"}}>
                                                Save
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ava-option_wrapper col col-md-6 col-12">
                                <div className="row g-5">
                                    {this.state.avatar_list.map((ava) => (
                                        <div className="col col-md-4 col-6 ava-option">
                                            <img src={ava} className="img-fluid" name="avatar" alt="Responsive" onClick={this.onChangeAva} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}