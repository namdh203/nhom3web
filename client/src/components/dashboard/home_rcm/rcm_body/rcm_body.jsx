import React from "react";
import RcmBlock from "./rcm_block/rcm_block.js"
import MdRcmBlock from "./md_rcm_block/md_rcm_block.js"
import BigRcmBlock from "./brcm_block/big_rcm_block.js";

export default class RcmBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="home-rcm col col-md-10 col-sm-12">
                <div className="rcm-body">
                    <RcmBlock />
                    <BigRcmBlock />
                    <RcmBlock />
                    <MdRcmBlock />
                    <BigRcmBlock />
                    <RcmBlock />
                    <BigRcmBlock />
                    <MdRcmBlock />
                </div>
            </div>
        )
    }
}