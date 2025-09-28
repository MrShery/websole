import Presenting from "./Presenting"
import Heading from "./Heading"

function About(props) {
    return (
        <section id="about" className="gap">
            <div className="container">
                <Heading hdName="heading sec-title-animation animation-style2" title="Website that brings leads" heading="Presenting the Best No-code Website Solution" />
                <div className="row">
                    <div className="col-lg-6">
                        <Presenting icon="flaticon-maintenance" text="State of the art Facility" title="A custom logo design is a crucial part of your overall branding  process. Your logo design is a significant." />
                        <Presenting icon="flaticon-helpdesk" text="Superior world className services" title="A custom logo design is a crucial part of your overall branding  process. Your logo design is a significant." />
                        <Presenting icon="flaticon-cursor" text="Create professional website" pgap="mb-0" title="A custom logo design is a crucial part of your overall branding  process. Your logo design is a significant." />
                    </div>
                    <div className="col-lg-6">
                        <Presenting icon="flaticon-consulting" text="Certified expert consultants " title="A custom logo design is a crucial part of your overall branding  process. Your logo design is a significant." />
                        <Presenting icon="flaticon-programming" text="No extra code required" title="A custom logo design is a crucial part of your overall branding  process. Your logo design is a significant." />
                        <Presenting icon="flaticon-subscribe" text="All-inclusive subscription" pgap="mb-0" title="A custom logo design is a crucial part of your overall branding  process. Your logo design is a significant." />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About 