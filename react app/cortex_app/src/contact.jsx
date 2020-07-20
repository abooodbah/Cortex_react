import React from 'react';

function Contact() {
    return (
        <section style={{background: '#e4e4e4'}}>      
            <div class="container">
                <div id = "white"  class="section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Contact Us</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div class="contact-about">
                            <h3>Cortex logo here</h3>
                            <p>Craasds fermentum odio eu feugiat. Juascsto eget magna fermeasdntum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fercascmentum csclcasceo. Amet volutpat consequat mauris nunc cosacasngue.</p>
                            <div class="social-links">
                                <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                                <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                                <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-4 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div class="info">
                            <div>
                                <i class="ri-map-pin-line"></i>
                                <p>Abudhabi based Web Design Agencyyy<br />Abudhabi, UAE</p>
                            </div>

                            <div>
                                <i class="ri-mail-send-line"></i>
                                <p>info@example.com</p>
                            </div>

                            <div>
                                <i class="ri-phone-line"></i>
                                <p>+971 56 127 1325</p>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                        <form action="" method="post" role="form" class="php-email-form">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you! (TODO: finish PHP code)</div>
                        </div>
                        <div class="text-center"><button type="submit" style={{padding: '0.5rem', border: 'none', background:'white', borderRadius: '0.7rem'}}>Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
  }
  
  export default Contact;