import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Shaps from "../assets/img/shaps-4.png"
import Shaps2 from "../assets/img/shaps-1.png"
import Shaps3 from "../assets/img/shaps-2.png"
import Google from "../assets/img/google-w.png"
import Logo from "../assets/img/logo.png"

function Footer() {

    return (
        <footer className="gap no-bottom" style={{ backgroundImage: "url('src/assets/img/footer.jpg')" }} >
            <div className="container">
                <div className="footer-try">
                    <div>
                        <h2>Start Your Business and Achieve Goals</h2>
                        <p>Great and strong landing page made to enhance the marketer's workflow.</p>
                    </div>
                    <a href="#" className="button btn"><span><span>Try 14 Days for Free</span></span></a>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-logo">
                            <img src={Logo} alt="img" />
                            <p>component library to build your own components  of UI. Reuse existing Hero, sections component lie your own components. </p>
                            <ul className="social-media">
                                <li><a href="#"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="widget-title">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="about.html">About Us</a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="#">Timeline </a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="#">Image Gallery </a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="contact.html">Contact Us</a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="faq.html">Faq’s</a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="#">Quality Management</a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="#">Health &amp; Safety </a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="#">Environmental</a></li>
                                <li><i><FontAwesomeIcon icon={faAnglesRight} /></i><a href="#">Environmental</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="widget-title">
                            <h3>Contact Us</h3>
                            <div className="get-in-touch">
                                <div><i className="flaticon-map-location"></i></div>
                                <div>
                                    <span>Phone No:</span>
                                    <h6><a href="callto:+15554361747">+1 0109 -1812-347</a></h6>
                                </div>
                            </div>
                            <div className="get-in-touch">
                                <div><i className="flaticon-iphone"></i></div>
                                <div>
                                    <span>Email Address:</span>
                                    <h6><a href="mailto:business@domain.com">business@domain.com</a></h6>
                                </div>
                            </div>
                            <div className="get-in-touch mb-0">
                                <div><i className="flaticon-mail-inbox-app"></i></div>
                                <div>
                                    <span className="pt-2 pb-0">12/7 new town, 245x Town 1214 Street, United State</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-rights">
                    <p>© 2025 websole by Websole. All Rights Reserved.</p>
                    <div className="review">
                        <img alt="img" src={Google} />
                        <ul className="star">
                            <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                            <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                            <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                            <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                            <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                        </ul>
                        <h6>(5.0) </h6>
                    </div>
                </div>
            </div>
            <ul className="shaps-img">
                <li><img src={Shaps} alt="img" /></li>
                <li><img src={Shaps2} alt="img" /></li>
                <li><img src={Shaps3} alt="img" /></li>
            </ul>
        </footer>
    );
}


export default Footer