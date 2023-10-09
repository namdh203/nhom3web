import React from 'react';
import "./dashbroad.css"
import SpecialRcmBlock from './special_rcm_block';
import RcmBlock from './rcm_block';

export default function Dashboard() {
  return(
    <>
      <img src="http://pyt-images.imgix.net/images/web_app/dawn/global/hero_desktop.png?h=500&fit=crop&dpr=1&auto=format,compress&q=100" className="img-fluid home-banner" alt="Responsive"/>
      <div className="home-rcm container-md">
        <h1 className="rcm_header">Recommendations</h1>
        <div className="rcm-body">
            <SpecialRcmBlock title="Best Choice" />
            <RcmBlock title="Trending Destinations" />
            <RcmBlock title="Bali Packages" />
            <RcmBlock title="Paris Packages" />
            <SpecialRcmBlock title="Spain Destinations" />
            <RcmBlock title="Australia Packages" />
            <RcmBlock title="Europe Packages" />
            <RcmBlock title="Abu Dhabi Packages" />
            <RcmBlock title="Thailand Packages" />
            <div className="rcm-tutorial">
              <img src="https://poaphotos.com/wp-content/uploads/sites/21/2019/01/tutorials.jpg" className="img-fluid rcm-tutorial_img" alt="Responsive"/>
              <div className="rcm-tutorial_btn">
                <h2>How to use</h2>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

