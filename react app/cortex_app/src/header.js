import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <nav class="navbar navbar-light navbar-expand-md fixed-top bg-dark" style= {{background:'#e4e4e4!important', borderBottomRightRadius: '1.75rem', borderBottomLeftRadius: '1.75rem'}}>
        <div class="container">
            <div style={{display: 'flex'}}>
                <img src="assets/img/Cortex%20Logo.svg" style={{width: '75px'}}></img>
                    <a class="navbar-brand" href="#">&nbsp;Designs</a>
            </div>
            <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto" style={{alignItems: 'flex-end'}}>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Works</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Pricing</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">about us</a></li>
                    <li class="nav-item" role="presentation"></li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active text-dark border-info" href="#" style={{borderRadius: '0.8rem', background: 'white'}} ref={(node) => {
                            }}>Conatct Us</a>
                    </li>               
                </ul>
        </div>
        </div>
        </nav>
        );
    }
  }

export default Header