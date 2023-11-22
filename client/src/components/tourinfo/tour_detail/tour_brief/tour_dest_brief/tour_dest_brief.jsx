import "../../tour_detail.css"
import "../../tour_full/tour_dest/tour_dest.css"
import React from "react"

class TourDestBrief extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="buffer-block" style={{
                    width: "50%",
                    height: "20px",
                    "border-right": "0.025px solid gray",
                    display: this.props.first === "true" ? "none" : "block"
                }}></div>

                <div className="brief-dest">{this.props.title}</div>
                <div className="buffer-block" style={{
                    width: "50%",
                    height: "20px",
                    "border-right": "0.025px solid gray",
                    display: this.props.last === "true" ? "none" : "block"
                }}></div>
                <div className="trans-block" style={{ display: this.props.last === "true" ? "none" : "flex" }}>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "train" ? "block" : "none"
                    }}>
                        <i className="fa-solid fa-train"></i>
                    </div>
                </div>
                <div className="trans-block" style={{ display: this.props.last === "true" ? "none" : "flex" }}>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "motor" ? "block" : "none"
                    }}>
                        <i className="fa-solid fa-motorcycle"></i>
                    </div>
                </div>
                <div className="trans-block" style={{ display: this.props.last === "true" ? "none" : "flex" }}>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "plane" ? "block" : "none"
                    }}>
                        <i className="fa-solid fa-plane"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default TourDestBrief