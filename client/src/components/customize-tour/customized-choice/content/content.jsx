import React from "react";
import {
  getAccomSiteData,
  getTransSiteData,
  getRestSiteData,
  getActSiteData,
} from "../../tour_full/tour_dest/GetDestSite.js";

import { Route, Routes } from "react-router-dom";
import AccomCustom from "../page/accom/accom_custom.jsx";
import RestCustom from "../page/rest/rest_custom.jsx";
import ActCustom from "../page/act/act_custom.jsx";
import TransCustom from "../page/trans/trans_custom.jsx";

export default class CustomizedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transData: null,
      actData: null,
      restData: null,
      accomData: null,
    };
  }

  async componentDidMount() {
    var destId = JSON.parse(localStorage.getItem("current_dest"));
    console.log("DestId: ", destId);

    try {
      const accomRes = await getAccomSiteData(destId);
      const transRes = await getTransSiteData(destId);
      const restsRes = await getRestSiteData(destId);
      const activityRes = await getActSiteData(destId);

      if (!accomRes || !transRes || !restsRes) {
        console.log("Get DestAccom data failed");
      } else {
        this.setState({
          accomData: accomRes,
          transData: transRes,
          restData: restsRes,
          actData: activityRes,
        });
        console.log("RestData: ", this.state.accomData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  render() {
    if (
      this.state.accomData === null ||
      this.state.actData === null ||
      this.state.restData === null ||
      this.state.transData === null
    ) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        {/* <div className="buffer-block" style={{height: "37px", backgroundColor: "e9f0f8", width: "100%"}}></div> */}
        <Routes>
          <Route index element={<TransCustom data={this.state.transData} />} />
          <Route
            path="/trans"
            element={<TransCustom data={this.state.transData} />}
          />
          <Route
            path="/accom"
            element={<AccomCustom data={this.state.accomData} />}
          />
          <Route
            path="/rest"
            element={<RestCustom data={this.state.restData} />}
          />
          <Route
            path="/act"
            element={<ActCustom data={this.state.actData} />}
          />
        </Routes>
      </div>
    );
  }
}
