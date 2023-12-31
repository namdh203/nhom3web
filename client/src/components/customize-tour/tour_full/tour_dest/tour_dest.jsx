import "./tour_dest.css";
import AddImg from "./addition_img";
import {
  getAccomSiteData,
  getTransSiteData,
  getRestSiteData,
  getActSiteData,
} from "./GetDestSite.js";
import React from "react";

class TourDestination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accoms: [],
      selectedAccom: null, // only allow 1 place per destination for simplicity
      trans: [],
      selectedTrans: null,
      rests: [],
      selectedRests: null,
      activities: [],
      selectedActs: null,
    };

    this.onCustomizeClicked = this.onCustomizeClicked.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  async componentDidMount() {
    try {
      const accomRes = await getAccomSiteData(this.props.destId);
      const transRes = await getTransSiteData(this.props.destId);
      const restsRes = await getRestSiteData(this.props.destId);
      const activityRes = await getActSiteData(this.props.destId);

      if (!accomRes || !transRes || !restsRes) {
        console.log("Get destination data failed");
      } else {
        this.setState(
          {
            accoms: accomRes,
            trans: transRes,
            rests: restsRes,
            activities: activityRes,
          },
          () => {
            this.handleData();
          }
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  handleData() {
    if (!localStorage.getItem(`rest_dest${this.props.destId}`)) {
      this.setState({ selectedRests: this.state.rests.slice(0, 2) });
    } else {
      const storageRests = JSON.parse(
        localStorage.getItem(`rest_dest${this.props.destId}`)
      ).arr;

      this.setState({
        selectedRests: this.state.rests.filter(function (element) {
          return storageRests.includes(element.id);
        }),
      });
    }

    if (!localStorage.getItem(`accom_dest${this.props.destId}`)) {
      this.setState({ selectedAccom: this.state.accoms[0] });
    } else {
      const storageAccom = JSON.parse(
        localStorage.getItem(`accom_dest${this.props.destId}`)
      ).chosenAccom;

      this.setState({
        selectedAccom: this.state.accoms.find(
          (accom) => accom.id === storageAccom
        ),
      });
    }

    if (!localStorage.getItem(`trans_dest${this.props.destId}`)) {
      this.setState({ selectedTrans: this.state.trans.slice(0, 2) });
    } else {
      const storageTrans = JSON.parse(
        localStorage.getItem(`trans_dest${this.props.destId}`)
      ).arr;

      this.setState({
        selectedTrans: this.state.trans.filter(function (element) {
          return storageTrans.includes(element.id);
        }),
      });
    }

    if (!localStorage.getItem(`act_dest${this.props.destId}`)) {
      this.setState({ selectedActs: this.state.activities.slice(0, 2) });
    } else {
      const storageActs = JSON.parse(
        localStorage.getItem(`act_dest${this.props.destId}`)
      ).arr;

      this.setState({
        selectedActs: this.state.activities.filter(function (element) {
          return storageActs.includes(element.id);
        }),
      });
    }
  }

  onCustomizeClicked() {
    localStorage.setItem("preUrl", window.location.href);
    window.location.href = `/customize`;
  }

  render() {
    if (
      !this.state.selectedAccom ||
      !this.state.selectedActs ||
      !this.state.selectedRests ||
      !this.state.selectedTrans
    ) {
      return <p>Loading...</p>;
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
                  <AddImg
                    scripts={this.state.selectedAccom.name}
                    image={this.state.selectedAccom.demoImage}
                    pos="leftTop"
                    site="accommodation/hotel"
                    id={this.state.selectedAccom.accomId}
                  />
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-truck-plane"></i>
                <div>
                  {this.state.selectedTrans.map((tran, index) => (
                    <AddImg
                      scripts={tran.name}
                      image={tran.demoImage}
                      pos="leftTop"
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-drumstick-bite"></i>
                <div>
                  {this.state.selectedRests.map((rest, index) => (
                    <AddImg
                      scripts={rest.name}
                      image={rest.demoImage}
                      pos="leftTop"
                      site="restaurant/res"
                      id={rest.restId}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="col col-md-3 col-sm-6 col-6">
                <i className="fa-solid fa-heart-pulse"></i>
                <div>
                  {this.state.selectedActs.map((act, index) => (
                    <AddImg
                      scripts={act.name}
                      image={act.demoImage}
                      pos="leftTop"
                      site="activity/act"
                      id={act.activityId}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tour-dest_customize"
            onClick={() => {
              this.onCustomizeClicked();
              localStorage.setItem("current_dest", this.props.destId);
            }}
          >
            + Customize
          </div>
        </div>
      </>
    );
  }
}

export default TourDestination;
