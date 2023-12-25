import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-info container-md">
                <div className="row g-5">
                    <div className="col col-md-3 col-sm-12 col-12 footer-logo" style={{"textAlign": "left"}}>
                        <a href='/'>
                            <img style={{"scale": 0.8}} className="footer-logo_img" src="https://i.imgur.com/qm46CNl.png" alt="logo" />
                        </a>
                        <p style={{"margin-top": "10px", "font-size": "14px", "textAlign": "justify"}}>Your ultimate travel companion! Personalized itineraries and smart destination recommendations make every journey unforgettable.</p>
                        <div className="footer-icon">
                            <div className="footer-icon_wrapper">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                                <a href="#" style={{ "marginRight": "20px" }}><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-2 col-sm-12 col-12 footer-category">
                        <h3>CATEGORY</h3>
                            <div className="footer-category_1">
                                <a href="/?type=destination&id=0">
                                    <p>Destinations</p>
                                </a>
                                <a href="/?type=family&id=1">
                                    <p>Family tours</p>
                                </a>
                                <a href="/?type=honey moon&id=2">
                                    <p>Honey mons</p>
                                </a>
                                <a href="/?type=adventure&id=3">
                                    <p>Adventures</p>
                                </a>
                            </div>
                    </div>
                    <div className="col col-md-2 col-sm-12 col-12 footer-social">
                        <h3>SOCIAL</h3>
                        <a href="#">
                            <p><i className="fa-brands fa-facebook"></i> Facebook</p>
                        </a>
                        <a href="#">
                            <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                        </a>
                        <a href="#">
                            <p><i className="fa-brands fa-tiktok"></i> Tiktok</p>
                        </a>
                        <a href="#">
                            <p><i className="fa-brands fa-youtube"></i> Youtube</p>
                        </a>
                    </div>
                    <div className="col col-md-5 col-sm-12 col-12 footer-contact">
                        <h3>CONTACT US</h3>
                        <form id="contact-us">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    // className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    style={{width: "100%", padding: "5px 10px"}}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea cols="18" rows="3" placeholder='Enter message' style={{width: "100%", padding: "5px 10px"}}></textarea>
                            </div>
                            <div className='form-contact_btn'>Send</div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="footer-aboutus">
                <h1 className="aboutus-header">About us</h1>
                <p className="aboutus-info">We are the some good men that always want to go anywhere, so we develop this app in order to support not only ourself but also everybody who has the same this hobby as us. This application can do a lot of things, from giving you some tour recommendations, better food places or the schedules which suitable for your budget, to help you customize your schedule.</p>
            </div> */}
            <div className="footer-admin">
                <p>Nhóm 7 - Web App - INT3306 3</p>
            </div>
        </div>
        // <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        //     <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        //         <div class="me-5 d-none d-lg-block">
        //         <span>Get connected with us on social networks:</span>
        //         </div>
        //         <div>
        //         <a href="" class="me-4 text-reset">
        //             <i class="fab fa-facebook-f"></i>
        //         </a>
        //         <a href="" class="me-4 text-reset">
        //             <i class="fab fa-twitter"></i>
        //         </a>
        //         <a href="" class="me-4 text-reset">
        //             <i class="fab fa-google"></i>
        //         </a>
        //         <a href="" class="me-4 text-reset">
        //             <i class="fab fa-instagram"></i>
        //         </a>
        //         <a href="" class="me-4 text-reset">
        //             <i class="fab fa-linkedin"></i>
        //         </a>
        //         <a href="" class="me-4 text-reset">
        //             <i class="fab fa-github"></i>
        //         </a>
        //         </div>
        //     </section>
        //     <section class="">
        //         <div class="container text-center text-md-start mt-5">
        //         <div class="row mt-3">
        //             <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        //             <h6 class="text-uppercase fw-bold mb-4">
        //                 <i class="fas fa-gem me-3"></i>Company name
        //             </h6>
        //             <p>
        //                 Here you can use rows and columns to organize your footer content. Lorem ipsum
        //                 dolor sit amet, consectetur adipisicing elit.
        //             </p>
        //             </div>
        //             <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        //             <h6 class="text-uppercase fw-bold mb-4">
        //                 Products
        //             </h6>
        //             <p>
        //                 <a href="#!" class="text-reset">Angular</a>
        //             </p>
        //             <p>
        //                 <a href="#!" class="text-reset">React</a>
        //             </p>
        //             <p>
        //                 <a href="#!" class="text-reset">Vue</a>
        //             </p>
        //             <p>
        //                 <a href="#!" class="text-reset">Laravel</a>
        //             </p>
        //             </div>
        //             <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        //             <h6 class="text-uppercase fw-bold mb-4">
        //                 Useful links
        //             </h6>
        //             <p>
        //                 <a href="#!" class="text-reset">Pricing</a>
        //             </p>
        //             <p>
        //                 <a href="#!" class="text-reset">Settings</a>
        //             </p>
        //             <p>
        //                 <a href="#!" class="text-reset">Orders</a>
        //             </p>
        //             <p>
        //                 <a href="#!" class="text-reset">Help</a>
        //             </p>
        //             </div>
        //             <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        //             <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
        //             <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
        //             <p>
        //                 <i class="fas fa-envelope me-3"></i>
        //                 info@example.com
        //             </p>
        //             <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
        //             <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        //             </div>
        //         </div>
        //         </div>
        //     </section>
        //     <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.05)"}}>
        //         © 2021 Copyright:
        //         <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        //     </div>
        // </footer>
    )
}
