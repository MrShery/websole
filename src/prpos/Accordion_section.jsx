import { useState } from "react";
import Heading from "./Heading"
import Accordion from "../assets/img/accordion.jpg"
import Shaps from "../assets/img/shaps-3.png"

function Accordion_section() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        { title: "How can a business benefit from using a consultant?", content: "A consultant helps businesses identify problems, optimize operations, and develop strategies to improve efficiency." },
        { title: "Will I learn how to code websites as well?", content: "Yes, you'll learn web development fundamentals, including HTML, CSS, and JavaScript." },
        { title: "Why choose business consulting?", content: "Business consulting provides expert insights and strategic planning to help organizations grow and succeed." },
        { title: "Understand and analyze the information?", content: "Consultants analyze business data to identify trends and provide actionable insights for decision-making." },
        { title: "What is the value of business consulting?", content: "Consulting services can streamline processes, increase revenue, and optimize business performance." },
    ];
    return (
        <section className="gap accordion-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Heading hdclass="heading two sec-title-animation animation-style2" title="frequently asked questions" heading="Got questions? We’ve got answers." />
                        <div className="accordion">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
                                    <button className="heading" onClick={() => toggleAccordion(index)}>
                                        <div className="icon">{activeIndex === index ? "−" : "+"}</div>
                                        <div className="title">{item.title}</div>
                                    </button>
                                    <div className="content" style={{ display: activeIndex === index ? "block" : "none" }}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="accordion-contact">
                            <h4>Phone No: <a href="callto:+1238717662">+1 23871 7662</a></h4>
                            <h4>Email Id: <a href="mailto:info@domainname.com">info@domainname.com</a></h4>
                            <a href="#" className="button btn"><span><span>Contact Us</span></span></a>
                        </div>
                        <div className="accordion-img">
                            <img src={Accordion} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shaps-img">
                <li><img src={Shaps} alt="img" /></li>
            </ul>
        </section>
    );
}

export default Accordion_section
