import Heading from "./Heading";
import ChekList from './ChekList';

function Pricing() {
    return (
        <section id="pricing" className="gap no-top">
            <div className="container">
                <Heading hdclassName="heading sec-title-animation animation-style2" title="Plans and Pricing" heading="Honest pricing. No surprises. No credit card required" />
                <div className="row">
                    <PricingText heading="Individuals" pr="$70 " mo="mo" />
                    <PricingText heading="Professionals" pr="$120 " mo="mo" />
                    <PricingText heading="Business" pr="$190 " mo="mo" />
                </div>
            </div>
        </section>
    );
}


export default Pricing

function PricingText(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="pricing">
                <div className="pricing-plans">
                    <span>{props.heading} </span>
                    <h5>{props.pr} <sub>{props.mo} </sub></h5>
                </div>
                <div className="pricing-plans-text">
                    <i className="flaticon-price-tag"></i>
                    <p>A custom logo design is a crucial part of your overall branding process. </p>
                    <ul className="chek">
                        <ChekList title="24x7 Premium support" />
                        <ChekList title="Site Optimisation " />
                        <ChekList title="Monthly Report" />
                        <ChekList title="No Minimum Term" />
                    </ul>
                    <a href="#" className="button btn"><span><span>Purchase Now</span></span></a>
                </div>
            </div>
        </div>
    );
}