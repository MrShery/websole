import CountUp from "react-countup";
import Shaps from "../assets/img/shaps-1.png"
import Shaps2 from "../assets/img/shaps-6.png"

function SectionClient() {

    return (
        <section className="gap no-top section-client ">
            <div className="container">
                <div className="row">
                    <CountStyle classNameN="count-style" number="2" numtext="M" heading="Happy Client’s Satisfaction" text="Customer happiness is the level of loyalty and satisfaction that your customers experience" />
                    <CountStyle classNameN="count-style two" number="164" numtext="K" heading="Website Grow Business" text="Customer happiness is the level of loyalty and satisfaction that your customers experience" />
                </div>
            </div>
            <ul className="shaps-img">
                <li><img src={Shaps} alt="img" /></li>
                <li><img src={Shaps2} alt="img" /></li>
            </ul>
        </section>
    );
}


export default SectionClient


function CountStyle(props) {

    return (
        <div className="col-lg-6">
            <div className={props.classNameN}>
                <h2><CountUp
                    start={0}
                    end={props.number}
                    duration={3}
                /><sup>{props.numtext} </sup></h2>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
}