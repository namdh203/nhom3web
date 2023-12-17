import React from 'react';
import { Popover } from 'antd';

export default class AddImg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Popover placement={this.props.pos} content={
                <div style={{"width": "300px"}}>
                    <img src={this.props.image} className="img-fluid" alt="Responsive" />
                    {/* <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" />
                    <img src={this.props.image} style={{'margin-top': '5px'}} className="img-fluid" alt="Responsive" /> */}
                </div>
            }>
                <p className="tour-addition_info" style={{whiteSpace: "nowrap", "overflow": "hidden"} }>{this.props.scripts}</p>
            </Popover>
        )
    }
};

