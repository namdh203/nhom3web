import React from "react";
import "./style.css";
import Sidebar from "./sidebar/sidebar";
import CustomizedContent from "./content/content";

export default class ChooseCustomized extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <>
        <div className="buffer-block" style={{ height: "55px" }}></div>
        <div className="customize-container">
          <Sidebar></Sidebar>
          <CustomizedContent></CustomizedContent>
        </div>
      </>
    );
  }
}
