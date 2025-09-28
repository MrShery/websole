import Shaps_1 from '../assets/img/shaps-1.png'
import Shaps_2 from '../assets/img/shaps-2.png'
import Clients1 from '../assets/img/clients-1.jpg'
import Clients2 from '../assets/img/clients-2.jpg'
import Clients3 from '../assets/img/clients-3.jpg'
import Clients4 from '../assets/img/clients-4.jpg'
import Clients5 from '../assets/img/clients-5.jpg'
import Heading from './Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ClientsSection() {

    return (
        <section className="gap clients-section">
            <div className="container">
                <Heading hdclass="heading sec-title-animation animation-style2" title="Client’s Reviews" heading="What our awesome clients say" />
            </div>
            <div className="marquee-two">
                <div className="marquee-box-one">
                    <div className="marquee-content-one">
                        <ClientsText imgsrc={Clients1} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients2} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients3} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                    </div>
                    <div className="marquee-content-one">
                        <ClientsText imgsrc={Clients4} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients5} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients2} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                    </div>
                </div>
            </div>
            <div className="marquee-three">
                <div className="marquee-box-one">
                    <div className="marquee-content-two">
                        <ClientsText imgsrc={Clients4} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients5} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients2} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                    </div>
                    <div className="marquee-content-two">
                        <ClientsText imgsrc={Clients1} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients2} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                        <ClientsText imgsrc={Clients3} name="Luke Maccormick" text="“This is one the most transparent referral programs I ve ever used before. Besides, it s double-sided and it lets me not only share a great service with my friends, but to earn and make them earn as well. I earned money by sharing referral link on Facebook.”" />
                    </div>
                </div>
            </div>
            <ul className="shaps-img">
                <li><img src={Shaps_1} alt="img" /></li>
                <li><img src={Shaps_2} alt="img" /></li>
            </ul>
        </section>
    );
}

export default ClientsSection

function ClientsText(props) {

    return (
        <div className="clients">
            <div className="clients-img">
                <img src={props.imgsrc} alt="img" />
                <div>
                    <div className="d-flex">
                        <h3>{props.name}</h3>
                        <a href="JavaScript:void(0)"><i className="flaticon-twitter"></i></a>
                    </div>
                    <ul className="star">
                        <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                        <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                        <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                        <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                        <li><i><FontAwesomeIcon icon={faStar} /></i></li>
                    </ul>
                </div>
            </div>
            <p>{props.text}</p>
        </div>
    );
}
