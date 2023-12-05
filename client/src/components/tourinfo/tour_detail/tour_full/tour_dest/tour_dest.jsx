import React from "react";
import "./tour_dest.css"
import "../../../../../index.js"

import AddImg from "./addition_img";

// import { Collapse } from 'antd';

class TourDestination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <>
                <div className="buffer-block" style={{
                    width: "50%",
                    height: "35px",
                    "border-right": "0.025px solid gray",
                    display: "block"
                }}></div>
                <div className="trans-block" style={{ display: this.props.last === "true" ? "none" : "flex" }}>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "train" ? "block" : "none"
                    }}>
                        <i class="fa-solid fa-train"></i>
                    </div>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "plane" ? "block" : "none"
                    }}>
                        <i class="fa-solid fa-plane"></i>
                    </div>
                    <div className="trans-choice" style={{
                        display: this.props.trans === "motor" ? "block" : "none"
                    }}>
                        <i class="fa-solid fa-motorcycle"></i>
                    </div>
                </div>
                <div className="buffer-block" style={{
                    width: "50%",
                    height: "35px",
                    "border-right": "0.025px solid gray",
                    display: "block"
                }}>

                </div>

                <div className="tour-dest_wrapper">
                    <div className="tour-dest_header">{this.props.header}</div>
                    <div className="tour-dest_info-wrapper">
                        <div className="tour-dest_info intro row gx-4 odd">
                            <div className="col col-md-6">
                                <p>{this.props.desc}</p>
                            </div>
                            <div className="col col-md-6">
                                <img src={this.props.image} className="img-fluid" alt="Responsive" />
                            </div>

                        </div>
                        <div className="tour-dest_info info row gx-4 odd">
                            <div className="col col-md-3">
                                <i class="fa-solid fa-hotel"></i>
                                <div>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="leftTop"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="leftTop"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="leftTop"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="leftTop"></AddImg>
                                    
                                </div>
                            </div>
                            <div className="col col-md-3">
                                <i class="fa-solid fa-truck-plane"></i>
                                <div>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                </div>
                            </div>
                            <div className="col col-md-3">
                                <i class="fa-solid fa-drumstick-bite"></i>
                                <div>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="top"></AddImg>
                                </div>
                            </div>
                            <div className="col col-md-3">
                                <i class="fa-solid fa-heart-pulse"></i>
                                <div>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="rightTop"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="rightTop"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="rightTop"></AddImg>
                                    <AddImg scripts="fasdfasdfadsf" image={this.props.image} pos="rightTop"></AddImg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// export default TourDestination;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found:a welcome guest in many households across the world.
// `;
// const items = [
//   {
//     key: '1',
//     label: 'ACCOMODATION',
//     children: <p>Accomodation:</p>,
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children: <p>{text}</p>,
//   },
// ];
// const TourDestination = () => {
//   const onChange = (key) => {   
//     console.log(key);
//   };
//   return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
// };

export default TourDestination;