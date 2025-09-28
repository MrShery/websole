
import Heading_img from '../assets/img/heading-img.png'
import Sponsor_1 from '../assets/img/sponsor-img-1.png'
import Sponsor_2 from '../assets/img/sponsor-img-2.png'
import Sponsor_3 from '../assets/img/sponsor-img-3.png'
import Sponsor_4 from '../assets/img/sponsor-img-4.png'
import Sponsor_5 from '../assets/img/sponsor-img-5.png'
import Sponsor_6 from '../assets/img/sponsor-img-6.png'
import Sponsor_7 from '../assets/img/sponsor-img-7.png'

function Marquee() {

    return (
        <>
            <div className="gap">
                <div className="container">
                    <div className="heading sec-title-animation animation-style2">
                        <img alt="img" src={Heading_img} />
                        <h5 className="title-animation">Thousands of businesses use Websole</h5>
                    </div>
                    <div className="marquee mt-4">
                        <div className="marquee-icon">
                            <div className="marquee-content">
                                <div className="marquee-item">
                                    <img src={Sponsor_1} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_2} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_3} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_4} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_5} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_6} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_7} alt="img" />
                                </div>
                            </div>
                            <div className="marquee-content">
                                <div className="marquee-item">
                                    <img src={Sponsor_1} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_2} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_3} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_4} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_5} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_6} alt="img" />
                                </div>
                                <div className="marquee-item">
                                    <img src={Sponsor_7} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="marquee-text">
                        <p>Join a growing group of satisfied customers who have made the switch.</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Marquee 