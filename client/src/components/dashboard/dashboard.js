import React from 'react';
import "./dashbroad.css"
import HomeBanner from './home_banner/home_banner.js';
import RcmSidebar from "./home_rcm/rcm_sidebar/rcm_sidebar.jsx"
import RcmBody from './home_rcm/rcm_body/rcm_body.jsx';

export default function Dashboard() {
  return (
    <div className="home-wrapper">
      <div className="buffer-block" style={{ height: "20px" }}></div>

      <HomeBanner src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg" name="Paris" desc="Paris is unarguably one of the most beautiful cities in the world, the capital of France, of art and of fashion. 
                Climb to the top of the  Eiffel Tower, stroll down the Champs Elysées, visit the Louvre, see many shows and exhibitions, 
                or simply wander along the banks  of the Seine...read in French in the Tuileries garden, and quite simply take the time to 
                experience the Parisian way of life!" />

      <div className="home-rcm_wrapper" style={{ margin: "0 50px" }}>
        <div className="row gx-5">
          <RcmSidebar ></RcmSidebar>
          <RcmBody></RcmBody>
        </div>
      </div>
    </div >
  );
}

