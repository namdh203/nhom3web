import React from 'react'
import "./history.css"

import { Modal } from "antd"

import { getFullProperty, updateCustomer } from "./ProfileFunction"

import Tour from "./user_history/user_history"

export default class TourHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            avatar: "",
            choose: false,
            success: false,
            openModal: false
        }

        this.onBlackLayer = this.onBlackLayer.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleOk() {
        this.setState({ openModal: false })
        window.location.reload();
    }

    handleCancel() {
        this.setState({ openModel: false })
        window.location.reload();
    }

    onBlackLayer() {
        this.setState({ choose: false })
    }

    // onSubmit(e) {
    //     e.preventDefault()

    //     const newUser = {
    //         name: this.state.name,
    //         cardNo: this.state.cardNo,
    //         address: this.state.address,
    //         phoneNumber: this.state.phoneNumber,
    //         email: this.state.email,
    //         passport: this.state.passport,
    //         avatar: this.state.avatar
    //     }

    //     updateCustomer(newUser).then(res => {
    //         // alert(res.msg)
    //         this.setState({success: true, openModal: true})
    //     })


    // }

    componentDidMount() {

        const user = JSON.parse(localStorage.getItem("user"))

        if (user !== null) {
            const email = user.email
            console.log(email);
            getFullProperty(email).then(res => {
                this.setState({
                    name: res.name,
                    address: res.address,
                    phoneNumber: res.phoneNumber,
                    email: res.email,
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
            <div className="history-wrapper">
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
                    <div className="row" style={{justifyContent: "center", alignItems: "center"}}>
                        <div className="col col-9 col-md-9">
                            <h1>Tour History</h1>
                        </div>
                        <div className="col col-md-3 col-3 history-user_info">
                            <h1>{this.state.name}</h1>
                        </div>
                    </div>
                    <div className="buffer-block mid"></div>
                    <div className="history-body">
                        <Tour />
                    </div>
                </div>

            </div>

        )
    }
}