import React from "react";
import "./tour_dest.css";
import "../../../../index.js";
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
      filteredAccoms: null,
      trans: [],
      filteredTrans: null,
      rests: [],
      filteredRests: null,
      activity: [],
      filteredAct: null,
    };

    this.onCustomizeClicked = this.onCustomizeClicked.bind(this)
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

    var filteredAccoms = null
    var filteredTrans = null
    var filteredRests = null
    var filteredAct = null

    if (!localStorage.getItem(`rest_dest${this.props.destId}`)) {
      filteredRests = this.state.rests.slice(0, 2)
      this.setState({filteredRests: filteredRests});
    } else {
      var filteredList2 = JSON.parse(localStorage.getItem(`rest_dest${this.props.destId}`)).arr
      filteredRests = this.state.rests.filter(function(element) {
        return filteredList2.includes(element.id);
      })
      this.setState({filteredRests: filteredRests}, () => {
        console.log("Rest: ", this.state.filteredRests)
      })

    }

    console.log("Rest: ", this.state.filteredRests)    

    if (!localStorage.getItem(`accom_dest${this.props.destId}`)) {
      filteredAccoms = this.state.accoms.slice(0, 2)
      this.setState({filteredAccoms: filteredAccoms});
    } else {
      var filteredList2 = JSON.parse(localStorage.getItem(`accom_dest${this.props.destId}`)).arr
      filteredAccoms = this.state.accoms.filter(function(element) {
        return filteredList2.includes(element.id);
      })
      this.setState({filteredAccoms: filteredAccoms})
      

    }

    console.log("Accom: ", this.state.filteredAccoms)

    if (!localStorage.getItem(`trans_dest${this.props.destId}`)) {
      filteredTrans = this.state.trans.slice(0, 2)
      this.setState({filteredTrans: filteredTrans});
    } else {
      var filteredList2 = JSON.parse(localStorage.getItem(`trans_dest${this.props.destId}`)).arr
      filteredTrans = this.state.trans.filter(function(element) {
        return filteredList2.includes(element.id);
      })
      this.setState({filteredTrans: filteredTrans})

    }

    console.log("Trans: ", this.state.filteredTrans)


    if (!localStorage.getItem(`act_dest${this.props.destId}`)) {
      filteredAct = this.state.activity.slice(0, 2)
      this.setState({filteredAct: filteredAct});
    } else {
      var filteredList2 = JSON.parse(localStorage.getItem(`act_dest${this.props.destId}`)).arr
      filteredAct = this.state.activity.filter(function(element) {
        return filteredList2.includes(element.id);
      })
      this.setState({filteredAct: filteredAct})
      

    }

    console.log("Act: ", this.state.filteredAct)
    

  }

  onCustomizeClicked(destId) {
    localStorage.setItem("preUrl", window.location.href)
    window.location.href = `/customize`
  }

  render() {

    if (!this.state.filteredAccoms || !this.state.filteredAct || !this.state.filteredRests || !this.state.filteredTrans) {
      return <p>Loading...</p>
    }

    if (this.state.filteredAccoms.length === 0 || this.state.filteredAct.length === 0 || this.state.filteredRests.length === 0 || this.state.filteredTrans.length === 0) {
      return <p>Loading...</p>
    }

    return (
      <>
        <div className="buffer-block detail"></div>
        <div
          className="trans-block"
          style={{
            display: this.props.last === "true" ? "none" : "flex",
          }}
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
                  {this.state.filteredAccoms.map((accom) => (
                    <AddImg
                      scripts={accom.name}
                      image={accom.demoImage}
                      pos="leftTop"
                      site="accommodation/hotel"
                      id={accom.accomId}
                    />
                  ))}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-truck-plane"></i>
                <div>
                  {this.state.filteredTrans.map((tran) => (
                    <AddImg
                      scripts={tran.name}
                      image={tran.demoImage}
                      pos="leftTop"
                    />
                  ))}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-drumstick-bite"></i>
                <div>
                  {this.state.filteredRests.map((rest) => (
                    <AddImg
                      scripts={rest.name}
                      image={rest.demoImage}
                      pos="leftTop"
                      site="restaurant/res"
                      id={rest.restId}
                    />
                  ))}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-heart-pulse"></i>
                <div>
                  {this.state.filteredAct.map((act) => (
                    <AddImg
                      scripts={act.name}
                      image={act.demoImage}
                      pos="leftTop"
                      site="activity/act"
                      id={act.activityId}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="tour-dest_customize" onClick={() => {
            this.onCustomizeClicked()
            localStorage.setItem("current_dest", this.props.destId)
          }}>+ Customize</div>
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
