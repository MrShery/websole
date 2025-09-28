import GoogleImg from '../assets/img/google.png'
import Shaps_4 from '../assets/img/shaps-4.png'
import Shaps_1 from '../assets/img/shaps-1.png'
import Shaps_2 from '../assets/img/shaps-2.png'
import Shaps_3 from '../assets/img/shaps-3.png'

function Hero4() {

    return (
        <>
            <section className="hero-section for no-bottom" style={{ backgroundImage: "url('src/assets/img/line-img.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-text sec-title-animation animation-style2">
                                <span>Learn how to market a product</span>
                                <h2 className="title-animation">Need a strong product marketing strategy</h2>
                                <div className="d-flex listing">
                                    <p>Start your business today with a great and strong landing page. </p>
                                </div>
                            </div>
                            <a href="#" className="button btn"><span><span>Try 14 Days for Free</span></span></a>
                        </div>
                        <div className="col-lg-12">
                            <div className="video-fram">
                                <div className="hs-responsive-embed-youtube">
                                    <iframe width="853" height="480" src="https://www.youtube.com/embed/3ThSqm6MOyo" title="How To Get Unlimited Graphic Design Work For a Low Monthly Cost" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
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
        </>
    )
}

export default Hero4 
