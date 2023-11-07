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
                    <RcmBlock className="odd" title="Bali Packages" />
                    <BigRcmBlock title="Best Choice" />
                    <RcmBlock title="Bali Packages" />
                    <RcmBlock title="Paris Packages" />
                    <MdRcmBlock title="Singapore Packages" />
                    <BigRcmBlock title="Spain Destinations" />
                    <RcmBlock title="Australia Packages" />
                    <BigRcmBlock title="Europe Packages" />
                    <RcmBlock title="Abu Dhabi Packages" />
                    <MdRcmBlock title="Thailand Packages" />
                    <div className="rcm-tutorial">
                        <img src="https://poaphotos.com/wp-content/uploads/sites/21/2019/01/tutorials.jpg" className="img-fluid rcm-tutorial_img" alt="Responsive" />
                        <div className="rcm-tutorial_btn">
                            <h2>How to use</h2>
                        </div>
                    </div>
                    {/* <div className="rcm-vertical-menu">
                <div className="rcm-menu_choice active">
                  <div>
                    <span>Trending Destinations</span>
                  </div>
                </div>

                <div className="rcm-menu_choice">
                  <div>
                    <span>Family Tours</span>
                  </div>
                </div>
                <div className="rcm-menu_choice">
                  <div>
                    <span>Honey mons</span>
                  </div>
                </div>
                <div className="rcm-menu_choice">
                  <div>
                    <span>Adventures</span>
                  </div>
                </div>
                <div className="rcm-menu_choice">
                  <div>
                    <span>Visa-on-arrivals</span>
                  </div>
                </div>
                <div className="rcm-menu_choice">
                  <div>
                    <span>Special Tours</span>
                  </div>
                </div>
                <div className="rcm-menu_choice">
                  <div>
                    <span>Sales</span>
                  </div>
                </div>
                <div className="move-btn_wrapper forward hidden" onClick={move_forward}>
                  <div className="move-btn">
                    <i class="fa-solid fa-chevron-left"></i>
                  </div>
                </div>
                <div className="move-btn_wrapper backward" onClick={move_backward}>
                  <div className="move-btn">
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </div> */}
                </div>
            </div>
        )
    }
}