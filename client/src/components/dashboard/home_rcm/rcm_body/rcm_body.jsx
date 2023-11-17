import React from "react";
import RcmBlock from "./rcm_block/rcm_block.js"
import MdRcmBlock from "./md_rcm_block/md_rcm_block.js"
import BigRcmBlock from "./brcm_block/big_rcm_block.js";

export default class RcmBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'destination'
        }
    }

    componentDidMount() {
        const currentURL = window.location.href;

        const url = new URL(currentURL);

        const type = url.searchParams.get("type");

        if(type !== null) {
            this.setState({'type': type}, () => {
                console.log(this.state.type)
            })
        } else {
            this.setState({'type': 'destination'}, () => {
                console.log(this.state.type)
            })
        }
    }

    render() {

        const type = (new URL(window.location.href)).searchParams.get("type") 

        if ((type !== null && type !== this.state.type)) {
            return <p>loading...</p>
        }

        return (
            <div className="home-rcm col col-md-10 col-sm-12">
                <div className="rcm-body">
                    <RcmBlock type={this.state.type} />
                    <BigRcmBlock/>
                    <RcmBlock type={this.state.type} />
                    <MdRcmBlock type={this.state.type} />
                    <BigRcmBlock/>
                    <RcmBlock type={this.state.type} />
                    <BigRcmBlock/>
                    <MdRcmBlock type={this.state.type} />
                </div>
            </div>
        )
    }
}