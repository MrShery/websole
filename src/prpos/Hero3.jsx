import GoogleImg from '../assets/img/google.png'
import Shaps_4 from '../assets/img/shaps-4.png'
import Shaps_1 from '../assets/img/shaps-1.png'
import Shaps_2 from '../assets/img/shaps-2.png'
import Shaps_3 from '../assets/img/shaps-3.png'
import Subscribee from './Subscribee'

function Hero3() {

    return (
        <section class="hero-section two" style={{ backgroundImage: "url('src/assets/img/line-img.jpg')" }}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="hero-text sec-title-animation animation-style2">
                            <span class="title-animation">Learn how to market a product</span>
                            <h2 class="title-animation">Need a strong product marketing strategy</h2>
                            <div class="d-flex listing">
                                <p>Start your business today with a great and strong landing page made to enhance the marketers workflow.</p>
                            </div>
                        </div>
                        <Subscribee />
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

export default Hero3 
