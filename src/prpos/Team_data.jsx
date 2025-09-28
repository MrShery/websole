import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons"


function Team_data(props) {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="team mb-0">
                <div className="expert-icon">
                    <a href="JavaScript:void(0)">
                        <i><FontAwesomeIcon icon={faShareNodes} /></i>
                    </a>
                    <ul className="icon-share">
                        <li><a href="#"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                        <li><a href="JavaScript:void(0)"><i className="flaticon-twitter"></i></a></li>
                    </ul>
                </div>
                <figure>
                    <img src={props.imgsrc} alt="img" />
                </figure>
                <span>{props.text}</span>
                <h4>{props.heading} </h4>
                <a href="callto:+12344502086"><i><FontAwesomeIcon icon={faMobileScreen} /></i><b> +1234 450 2086</b></a>
            </div>
        </div>
    );
}

export default Team_data