import React from "react";
import "./tour_dest.css";
import "../../../../../index.js";
import "./GetDestSite.js";

import AddImg from "./addition_img";
import {
  getAccomSiteData,
  getTransSiteData,
  getRestSiteData,
  getActSiteData,
} from "./GetDestSite.js";

// import { Collapse } from 'antd';

class TourDestination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accomData: null,
      accoms: [],
      trans: [],
      rests: [],
      activity: [],
    };
  }

  async componentDidMount() {
    console.log("hello world");

    try {
      const accomRes = await getAccomSiteData(this.props.destId);
      const transRes = await getTransSiteData(this.props.destId);
      const restsRes = await getRestSiteData(this.props.destId);
      const activityRes = await getActSiteData(this.props.destId);

      if (!accomRes || !transRes || !restsRes) {
        console.log("Get DestAccom data failed");
      } else {
        this.setState({
          accoms: accomRes,
          trans: transRes,
          rests: restsRes,
          activity: activityRes,
        });
        console.log(this.state.rests);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  render() {
    return (
      <>
        <div className="buffer-block detail"></div>
        <div
          className="trans-block"
          style={{ display: this.props.last === "true" ? "none" : "flex" }}
        >
          <div
            className="trans-choice"
            style={{
              display: this.props.trans === "train" ? "block" : "none",
            }}
          >
            <i className="fa-solid fa-train"></i>
          </div>
          <div
            className="trans-choice"
            style={{
              display: this.props.trans === "plane" ? "block" : "none",
            }}
          >
            <i className="fa-solid fa-plane"></i>
          </div>
          <div
            className="trans-choice"
            style={{
              display: this.props.trans === "motor" ? "block" : "none",
            }}
          >
            <i className="fa-solid fa-motorcycle"></i>
          </div>
        </div>
        <div className="buffer-block detail"></div>

        <div className="tour-dest_wrapper">
          <div className="tour-dest_header">{this.props.header}</div>
          <div className="tour-dest_info-wrapper">
            <div className="tour-dest_info intro row gx-4 odd">
              <div className="col col-md-6">
                <p>{this.props.desc}</p>
              </div>
              <div className="col col-md-6">
                <img
                  src={this.props.image}
                  className="img-fluid"
                  alt="Responsive"
                />
              </div>
            </div>
            <div className="tour-dest_info info row gx-4 odd">
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-hotel"></i>
                <div>
                  {this.state.accoms[0] && (
                    <AddImg
                      scripts={this.state.accoms[0].name}
                      image={this.state.accoms[0].demoImage}
                      pos="leftTop"
                      site="accommodation/hotel"
                      id={this.state.accoms[0].accomId}
                    />
                  )}
                  {this.state.accoms[1] && (
                    <AddImg
                      scripts={this.state.accoms[1].name}
                      image={this.state.accoms[1].demoImage}
                      pos="leftTop"
                      site="accommodation/hotel"
                      id={this.state.accoms[1].accomId}
                    />
                  )}
                  {this.state.accoms[2] && (
                    <AddImg
                      scripts={this.state.accoms[2].name}
                      image={this.state.accoms[2].demoImage}
                      pos="leftTop"
                      site="accommodation/hotel"
                      id={this.state.accoms[2].accomId}
                    />
                  )}
                  {this.state.accoms[3] && (
                    <AddImg
                      scripts={this.state.accoms[3].name}
                      image={this.state.accoms[3].demoImage}
                      pos="leftTop"
                      site="accommodation/hotel"
                      id={this.state.accoms[3].accomId}
                    />
                  )}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-truck-plane"></i>
                <div>
                  {this.state.trans[0] && (
                    <AddImg
                      scripts={this.state.trans[0].name}
                      image={this.state.trans[0].demoImage}
                      pos="leftTop"
                      
                    />
                  )}
                  {this.state.trans[1] && (
                    <AddImg
                      scripts={this.state.trans[1].name}
                      image={this.state.trans[1].demoImage}
                      pos="leftTop"
                    />
                  )}
                  {this.state.trans[2] && (
                    <AddImg
                      scripts={this.state.trans[2].name}
                      image={this.state.trans[2].demoImage}
                      pos="leftTop"
                    />
                  )}
                  {this.state.trans[3] && (
                    <AddImg
                      scripts={this.state.trans[3].name}
                      image={this.state.trans[3].demoImage}
                      pos="leftTop"
                    />
                  )}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-drumstick-bite"></i>
                <div>
                  {this.state.rests[0] && (
                    <AddImg
                      scripts={this.state.rests[0].name}
                      image={this.state.rests[0].demoImage}
                      pos="leftTop"
                      site="restaurant/res"
                      id={this.state.rests[0].restId}
                    />
                  )}
                  {this.state.rests[1] && (
                    <AddImg
                      scripts={this.state.rests[1].name}
                      image={this.state.rests[1].demoImage}
                      pos="leftTop"
                      site="restaurant/res"
                      id={this.state.rests[1].restId}
                    />
                  )}
                  {this.state.rests[2] && (
                    <AddImg
                      scripts={this.state.rests[2].name}
                      image={this.state.rests[2].demoImage}
                      pos="leftTop"
                      site="restaurant/res"
                      id={this.state.rests[2].restId}
                    />
                  )}
                  {this.state.rests[3] && (
                    <AddImg
                      scripts={this.state.rests[3].name}
                      image={this.state.rests[3].demoImage}
                      pos="leftTop"
                      site="restaurant/res"
                      id={this.state.rests[3].restId}
                    />
                  )}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-heart-pulse"></i>
                <div>
                  {this.state.activity[0] && (
                    <AddImg
                      scripts={this.state.activity[0].name}
                      image={this.state.activity[0].demoImage}
                      pos="leftTop"
                      site="activity/act"
                      id={this.state.activity[0].activityId}
                    />
                  )}
                  {this.state.activity[1] && (
                    <AddImg
                      scripts={this.state.activity[1].name}
                      image={this.state.activity[1].demoImage}
                      pos="leftTop"
                      site="activity/act"
                      id={this.state.activity[1].activityId}
                    />
                  )}
                  {this.state.activity[2] && (
                    <AddImg
                      scripts={this.state.activity[2].name}
                      image={this.state.activity[2].demoImage}
                      pos="leftTop"
                      site="activity/act"
                      id={this.state.activity[2].activityId}
                    />
                  )}
                  {this.state.activity[3] && (
                    <AddImg
                      scripts={this.state.activity[3].name}
                      image={this.state.activity[3].demoImage}
                      pos="leftTop"
                      site="activity/act"
                      id={this.state.activity[3].activityId}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
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
