import React from "react";
import { clicked } from "./add_btn.js";

export default class TabBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`sub-nav_tab col col-md-4 ${this.props.addClass} ${
          this.props.isChosen === "true" ? "chosen" : ""
        }`}
        style={{ borderRadius: this.props.borderRadius }}
        onClick={() => clicked(this.props.addClass)}
      >
        <div className="tab-btn" onClick={this.props.onClick}>
          {this.props.title}
        </div>
      </div>
    );
  }
}
