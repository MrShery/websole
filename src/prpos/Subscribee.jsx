import PaperPlan from "../assets/img/paper-plan.png"
function Subscribee() {

    return (
        <div className="subscribe-text">
            <img src={PaperPlan} alt="img" />
            <div>
                <h3>Subscribe Newsletter </h3>
                <p>Enter your email and get recent news and updates</p>
            </div>
            <form role="form" className="get-subscribee" id="subscribe-form" method="post">
                <input type="email" name="Email_Address" placeholder="Enter your email here" required="" />
                <button type="submit" className="btn button"><span><span>Subscribe Now</span></span></button>
            </form>
        </div>
    );
}


export default Subscribee
