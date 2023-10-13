import React from 'react';
import "./dashbroad.css"
import SpecialRcmBlock from './special_rcm_block';
import RcmBlock from './rcm_block'; 
import MdRcmBlock from './md_rcm_block';

export default function Dashboard() {
  return(
    <>
      <div className="home-banner_wrapper">
        <img src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg" className="img-fluid home-banner" alt="Responsive"/>
        <div className="banner-info">
          <h1 className="banner-header">Paris</h1>
          <p className="banner-desc">Paris is unarguably one of the most beautiful cities in the world, the capital of France, of art and of fashion. 
          Climb to the top of the  Eiffel Tower, stroll down the Champs Elysées, visit the Louvre, see many shows and exhibitions, 
          or simply wander along the banks  of the Seine...read in French in the Tuileries garden, and quite simply take the time to 
          experience the Parisian way of life!</p>
        </div>
        <div className="banner-forward">
            <i class="fa-solid fa-chevron-right banner-arrow banner-arrow-forward"></i>
        </div>
        <div className="banner-backward">
          <i class="fa-solid fa-chevron-left banner-arrow banner-arrow-backward"></i>
        </div>
      </div>
      <div className="home-rcm container-md">
        <div className="rcm-body">
            <RcmBlock title="Bali Packages" />
            <SpecialRcmBlock title="Best Choice" />
            <RcmBlock title="Bali Packages" />
            <RcmBlock title="Paris Packages" />
            <MdRcmBlock title="Singapore Packages" />
            <SpecialRcmBlock title="Spain Destinations" />
            <RcmBlock title="Australia Packages" />
            <SpecialRcmBlock title="Europe Packages" />
            <RcmBlock title="Abu Dhabi Packages" />
            <MdRcmBlock title="Thailand Packages" />
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

