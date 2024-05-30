import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
