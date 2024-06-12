
import Layout from "@/CustomHooks/Layout";
const Contactus = () => {
    return (
        <>
            <Layout>
                <div className="Contactus ">
                    <h2> CONTACT</h2>
                </div>

                <div className="container">
                    <div className="section1">
                        <div className="getin">
                            <div className="address">

                                <i class="bi bi-house-door"></i>
                                <strong>jaipur</strong>
                                <h6> Opposite Panchayat Samiti , Jhotwara, Jaipur, 302012</h6>

                                <div className="phone">
                                    <i class="bi bi-telephone"></i>
                                    <h6>+91-9983412021</h6>
                                </div>

                                <div className="email">
                                    <i class="bi bi-envelope-at"></i>
                                    <h6> pedivetindia@gmail.com</h6>

                                </div>
                                <p> Send us your query anytime </p>
                            </div>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d56907.87122492876!2d75.758039!3d26.943394!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU2JzM2LjIiTiA3NcKwNDUnMjguOSJF!5e0!3m2!1sen!2sus!4v1716747114252!5m2!1sen!2sus" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                        </div>
                        <div className="location">

                            <div className="message">
                                <h4> SEND US MESSEGE </h4>
                                <form>
                                    <label>Enter your name*</label>
                                    <input type="text" />

                                    <label>Enter your mobile name*</label>
                                    <input type="text" />

                                    <label>your name email*</label>
                                    <input type="email" />

                                    <label> subject*</label>
                                    <input type="text" />

                                    <label>Message</label>
                                    <textarea name="message" id="message"></textarea>

                                    <button> <span> send your message</span> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Contactus;