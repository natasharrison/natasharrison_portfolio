import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Project></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
