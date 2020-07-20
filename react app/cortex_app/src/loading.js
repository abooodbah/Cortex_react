import React from 'react';

function LoadingSection() {
    return (
        <section id="LoadingSection" style={{maxWidth: '100%', height: '100vh', maxHeight: '100%'}}>
            <div class="container align-middle" id="LoadingPage" style={{width: '100%'}}>
                <div class="row" id="LOADING-ROW">
                    <div class="col-md-12" style={{textAlign: "-webkit-center"}}>
                        <div class="loader" style={{backgroundColor: 'rgb(228,228,228)', maxWidth: '15rem'}}><span>CORTEX</span></div>
                    </div>
                    <div class="col-md-12" style={{paddingTop: '2rem'}}>
                        <div>
                            <div class="circles">
                                <span class="circle c1"></span>
                                <span class="circle c2"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default LoadingSection;