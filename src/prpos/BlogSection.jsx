import Heading from "./Heading";
import Shaps_1 from '../assets/img/shaps-3.png'
import Blog1 from '../assets/img/blog-img-1.jpg'
import Blog2 from '../assets/img/blog-img-2.jpg'
import Blog3 from '../assets/img/blog-img-3.jpg'

function BlogSection() {

    return (
        <section className="gap" id="blog">
            <div className="container">
                <Heading hdclass="heading sec-title-animation animation-style2" title="Recent Articles" heading="Explore our featured news and insights" />
                <div className="row">
                    <BlogText classnm="blog" tag="Develoment" date="Dec 24, 2024" imgsrc={Blog1} heading="Components you need to create a professional" text="component library to build your own components of UI. Reuse existing Hero, sections component lie your own components." />
                    <BlogText classnm="blog" tag="Develoment" date="Dec 24, 2024" imgsrc={Blog2} heading="Components you need to create a professional" text="component library to build your own components of UI. Reuse existing Hero, sections component lie your own components." />
                    <BlogText classnm="blog" tag="Develoment" date="Dec 24, 2024" imgsrc={Blog3} heading="Components you need to create a professional" text="component library to build your own components of UI. Reuse existing Hero, sections component lie your own components." />
                </div>
            </div>
            <ul className="shaps-img">
                <li><img src={Shaps_1} alt="img" /></li>
            </ul>
        </section>
    );
}

export default BlogSection

function BlogText(props) {

    return (
        <div className="col-lg-4 col-md-6">
            <div className={props.classnm}>
                <div className="blog-img">
                    <figure>
                        <img src={props.imgsrc} alt="img" />
                    </figure>
                    <div className="tag">
                        <span>{props.tag}</span>
                        <a href="#">{props.date} <span><i className="flaticon-message"></i>26</span></a>
                    </div>
                </div>
                <a href="#">{props.heading} </a>
                <p>{props.text}  </p>
            </div>
        </div>
    );
}