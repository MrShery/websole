import ChekList from './ChekList';
import Heading from './Heading';
import DoStap from './DoStap';
import StapImg from '../assets/img/stap-img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Services() {

    return (
        <section id="services" className="gap how-it-works" style={{ backgroundImage: "url('src/assets/img/shaps-bg.png')" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Heading hdclass="heading two sec-title-animation animation-style2" title="How it Works" heading="How do you get started?" text="component library to build your own components and pieces of UI. Reuse existing Hero, sections component library to build your own components." />
                        <ul className="chek">
                            <ChekList title="When an unknown printer took a galley" />
                            <ChekList title="Blocks & components you need to create a website." />
                            <ChekList title="App gives you the blocks & components" />
                            <ChekList title="Super fast page loading on all device." />
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-6">
                                <DoStap stapclass="how-do-stap" number="1" icon="flaticon-mail" hding="Send us a free email with all the infomration." />
                                <DoStap stapclass="how-do-stap two" number="2" icon="flaticon-team-building" hding="Our team will work full time on your mission." />
                            </div>
                            <div className="col-md-6">
                                <DoStap stapclass="how-do-stap three" number="3" icon="flaticon-security" hding="Pay only if you're satisfied with the result!" />
                                <div className="video">
                                    <img src={StapImg} alt="img" />
                                    <a className="video-pop" data-fancybox="" href="https://www.youtube.com/watch?v=1La4QzGeaaQ"><i><FontAwesomeIcon icon={faPlay} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Services
