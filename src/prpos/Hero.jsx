import Contact_form from "./Contact_form"
import GoogleImg from '../assets/img/google.png'
import Shaps_4 from '../assets/img/shaps-4.png'
import Shaps_1 from '../assets/img/shaps-1.png'
import Shaps_2 from '../assets/img/shaps-2.png'
import Shaps_3 from '../assets/img/shaps-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Hero() {

    return (
        <section className="hero-section" style={{ backgroundImage: "url('src/assets/img/line-img.jpg')" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-text sec-title-animation animation-style2">
                            <span className="title-animation">The best ways to </span>
                            <h2 className="title-animation">Promote a New Product or Service</h2>
                            <div className="d-flex listing">
                                <p>Start your business today with a great and strong landing page made to enhance the marketers workflow.</p>
                            </div>
                        </div>
                        <div className="review">
                            <a href="#" className="button btn"><span><span>Try 14 Days for Free</span></span></a>
                            <img alt="img" src={GoogleImg} />
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
                    <div className="col-lg-5">
                        <Contact_form />
                    </div>
                </div>
            </div>
            <ul className="shaps-img">
                <li><img src={Shaps_4} alt="img" /></li>
                <li><img src={Shaps_4} alt="img" /></li>
                <li><img src={Shaps_1} alt="img" /></li>
                <li><img src={Shaps_2} alt="img" /></li>
                <li><img src={Shaps_3} alt="img" /></li>
            </ul>
        </section>
    )
}

export default Hero 