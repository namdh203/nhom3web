import React from "react";
import { Popover } from "antd";

export default class AddImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onclick = () => {
    if (this.props.site !== "trans") {
      window.location.href = `/${this.props.site}?id=${this.props.id}`;
    } else {
      window.location.href = `/recommendations/trans?page_num=1`;
    }
  };

  render() {
    // console.log(this.props);
    return (
      <Popover
        placement={this.props.pos}
        content={
          <div style={{ width: "300px" }}>
            <img
              src={this.props.image}
              className="img-fluid"
              alt="Responsive"
            />
            {/* <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" /> */}
          </div>
        }
      >
        <div
          className="tour-addition_info"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={this.onclick}
        >
          {this.props.scripts}
        </div>
      </Popover>
    );
  }
}
