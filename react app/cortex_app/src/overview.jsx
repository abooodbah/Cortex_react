import React from 'react';

function Overviewx() {
    return (
        <section>
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up" class="aos-init aos-animate">Grow your business with Cortex Designs</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">We are a team of talanted designers, programmers, and Analysts  offering high quality web services.</h2>
                        <div data-aos="fade-up" data-aos-delay="800" class="aos-init aos-animate">
                            <a href="#about" class="btn-get-started scrollto" style={{backgroundColor: '#e4e4e4',borderRadius: '0.8rem', background: 'white'}} ref={(node) => {
                            }}>Get Started</a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
                        <div class="caption v-middle text-center">
                            <h1 class="cd-headline clip">
                                <span class="blc">We | </span>
                                <span class="cd-words-wrapper">
                                    <b class="is-visible">Design.</b>
                                    <b>Develop.</b>
                                    <b>Maintain.</b>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    );
  }
  
  export default Overviewx;