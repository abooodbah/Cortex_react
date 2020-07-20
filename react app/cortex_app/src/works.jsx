import React from 'react';

function Works() {
    return (
        <section style={{background: 'white', padding: '0rem 1rem', borderRadius: '1.75rem'}}>
            <div class="row">
                <div class="col">   
                    <div class="section-title aos-init aos-animate" data-aos="fade-up">
                        <h2 style={{fontFamily: 'barlow', marginTop: '2rem'}}>Works</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col" style={{textAlign: 'center'}}><img id="Kimg" src="assets/img/K.png"></img><button class="add">Visit</button></div>
                <div class="col" style={{textAlign: 'center'}}><img id="Cortex" src="assets/img/square.png"></img><button class="add">Visit</button></div>
                <div class="col" style={{textAlign: 'center'}}><img id="Worldendimg" src="assets/img/worldend.svg"></img><button class="add">Visit</button></div>
            </div>
        </section>
    );
  }
  
  export default Works;