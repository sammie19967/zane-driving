import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './Main';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import './index.css';
import 'leaflet/dist/leaflet.css';
import Header from './components/Header';
import Navbar from './components/Navbar';





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


      </div>
      <Footer />
    </Router>
  );
}

export default App;
