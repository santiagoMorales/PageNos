import React from 'react'


function Form() {
    return (
        <div className="cotainer-fluid" data-aos="fade-up">
            <div className="row m-0">
                <div className="col col-sm-12 col-md-6 col-12 ">
                    <div className="inner-form">
                        <div className="wrapper">
                        </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-6 col-12 form-inner">
                    <div className="wrapper">
                        <div className="form-text">
                            FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!
                        </div>
                        <h5 className="title-form">READY TO REQUEST A QUOTE?</h5>

                        <div className="form-div">
                            <form action="#!" method="POST">
                                <input type="text" name="contactName" placeholder="Name" size="40" className="input-form" style={{ color: "#fff" }}></input>
                                <input type="email" name="contactName" placeholder="E-mail" size="40" className="input-form" style={{ color: "#fff" }}></input>
                                <input type="email" name="contactName" placeholder="Subject" size="40" className="input-form" style={{ color: "#fff" }}></input>
                                <textarea name="contact-message" cols="40" rows="3" placeholder="Your Message" className="input-form" style={{ color: "#fff" }}></textarea>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-form">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form