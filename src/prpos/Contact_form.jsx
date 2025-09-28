import Fom_img from '../assets/img/fom-img.png'

function Contact_form() {

    return (

        <form role="form" className="get-a-quote" id="contact-form" method="post">
            <img src={Fom_img} alt="img" />
            <h3>Get a Quote</h3>
            <h6>Development Comprehensive solutions</h6>
            <input type="text" name="Complete Name" placeholder="Complete Name" required="" />
            <input type="email" name="Email Address" placeholder="Email Address" required="" />
            <input type="number" name="Phone No" placeholder="Phone No" required="" />
            <p>Preferred Consult Method: </p>
            <div className="d-flex align-items-center">
                <div className="radio-button">
                    <input type="radio" id="VirtualIn-Office" name="fav_language" value="Virtual" />
                    <label for="Virtual">Virtual</label>
                </div>
                <div className="radio-button">
                    <input type="radio" id="css" name="fav_language" value="In-Office" />
                    <label for="css">In Office</label><br />
                </div>
            </div>
            <button type="submit" className="button btn"><span><span>Submit Now</span></span></button>
        </form>

    )
}

export default Contact_form 