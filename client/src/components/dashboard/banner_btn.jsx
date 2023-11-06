import React from "react";
import { outBackward, outForward } from "./banner_btn.js";

export default class BannerBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="banner-forward" onClick={outForward}>
                    <i class="fa-solid fa-chevron-right banner-arrow banner-arrow-forward"></i>
                </div>
                <div className="banner-backward" onClick={outBackward}>
                    <i class="fa-solid fa-chevron-left banner-arrow banner-arrow-backward"></i>
                </div>
            </>
        )
    }
}