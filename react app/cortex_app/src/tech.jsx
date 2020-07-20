import React from 'react';

function Tech() {
    return (
        <section style={{background: '#e4e4e4', paddingBottom: '60px'}}>
            <div class="row">
                <div class="col">   
                    <div id = "white" class="section-title aos-init aos-animate" data-aos="fade-up">
                        <h2 style={{fontFamily: 'barlow', marginTop: '2rem'}}>What we use</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3" style={{textAlign: 'center'}}><img style= {{background: 'white', borderRadius: '27.5px'}} id="Cortex" src="assets/img/BS.png"></img></div>
                <div class="col-3" style={{textAlign: 'center'}}><img style= {{background: 'white', borderRadius: '27.5px'}} id="Cortex" src="assets/img/react.png"></img></div>
                <div class="col-3" style={{textAlign: 'center'}}><img style= {{background: 'white', borderRadius: '27.5px'}} id="Worldendimg" src="assets/img/html.svg"></img></div>
                <div class="col-3" style={{textAlign: 'center'}}><img style= {{background: 'white', borderRadius: '27.5px'}} id="Worldendimg" src="assets/img/netlify.svg"></img></div>
            </div>
        </section>
    );
  }
  
  export default Tech;