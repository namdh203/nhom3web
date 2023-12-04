import React from 'react';
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-info container-md">
                <div className="row g-5">
                    <div className="col col-md-4 col-sm-12 footer-logo">
                        <img className="footer-logo_img" src="https://i.imgur.com/qm46CNl.png" alt="logo" />
                    </div>
                    <div className="col col-md-4 col-sm-12 footer-category">
                        <h3>Category</h3>
                        <div className="row g-5">
                            <div className="col col-md-6 col-sm-12 footer-category_1">
                                <a href="#">
                                    <p>Destinations</p>
                                </a>
                                <a href="#">
                                    <p>Family tours</p>
                                </a>
                                <a href="#">
                                    <p>Honey mons</p>
                                </a>
                                <a href="#">
                                    <p>Adventures</p>
                                </a>
                            </div>
                            <div className="col col-md-6 col-sm-12 footer-category_1">
                                <a href="#">
                                    <p>Visa-on-arrivals</p>
                                </a>
                                <a href="#">
                                    <p>Special tours</p>
                                </a>
                                <a href="#">
                                    <p>Sales</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-2 col-sm-12 footer-social">
                        <h3>Social</h3>
                        <a href="#">
                            <p><i class="fa-brands fa-facebook"></i> Facebook</p>
                        </a>
                        <a href="#">
                            <p><i class="fa-brands fa-instagram"></i> Instagram</p>
                        </a>
                        <a href="#">
                            <p><i class="fa-brands fa-tiktok"></i> Tiktok</p>
                        </a>
                        <a href="#">
                            <p><i class="fa-brands fa-youtube"></i> Youtube</p>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="footer-aboutus">
                <h1 className="aboutus-header">About us</h1>
                <p className="aboutus-info">We are the some good men that always want to go anywhere, so we develop this app in order to support not only ourself but also everybody who has the same this hobby as us. This application can do a lot of things, from giving you some tour recommendations, better food places or the schedules which suitable for your budget, to help you customize your schedule.</p>
            </div> */}
            <div className="footer-icon">
                <div className="footer-icon_wrapper">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="#" style={{"margin-right": "20px"}}><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div className="footer-admin">
                <p>Nhóm 7 - Web App - INT3306 3</p>
            </div>
        </div>
    )
}