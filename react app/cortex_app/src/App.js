import React from 'react';
import './App.css';
import './header';
import Header from './header';
import LoadingSection from './loading'
import Overview from './overview'
import Works from './works'
import Pricing from './pricing'
import Tech from './tech'
import Contact from './contact'
import Footer from './footer'

function App() {
  return (
    <>
      <Header />
      <LoadingSection />
      <main>
        <Overview />
        <Works />
        <Tech />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
