import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      {/* navigation is within the header element */}
      <section className="Hero"></section>
      <main>
        <Project></Project>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
