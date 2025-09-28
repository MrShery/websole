import Heading from "./Heading"
import Team_data from "./Team_data";
import Team1 from "../assets/img/team-1.jpg"
import Team2 from "../assets/img/team-2.jpg"
import Team3 from "../assets/img/team-3.jpg"
import Google from "../assets/img/google-w.png"
import Shap3 from "../assets/img/shaps-3.png"
import Shap5 from "../assets/img/shaps-5.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Team() {

    return (
        <section id="team" className="gap team-section">
            <div className="container">
                <Heading hdName="heading sec-title-animation animation-style2" title="Website that brings leads" heading="Meet our awesome people" text="Increase your efficiencies, and create a better experience for everyone involved. Automate your workflows with tools you use every day." />
                <div className="row">
                    <Team_data imgsrc={Team1} text="Expert Consultant" heading="Thomas Willimes" />
                    <Team_data imgsrc={Team2} text="Expert Consultant" heading="Daniella Fermin" />
                    <Team_data imgsrc={Team3} text="Expert Consultant" heading="Margie Sutton" />
                </div>
                <div className="center review">
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
            <ul className="shaps-img">
                <li><img src={Shap3} alt="img" /></li>
                <li><img src={Shap5} alt="img" /></li>
            </ul>
        </section>
    );
}

export default Team

