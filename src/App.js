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
import Motto from './components/Motto';
import ApplicationForm from './components/ApplicationForm';
import Catalogue from './components/catalogue';
import Computers from './components/Computers';

import '@fortawesome/fontawesome-free/css/all.min.css';
import DrivingCatalogueSummary from './components/DrivingCatalogueSummary';
import DrivingCatalogue from './DrivingCatalogue';
import Admission from './Admission';
import WhatsAppIcon from './components/WhatsappIcon';
import Team from './components/Team';



function App() {

  return (
    <Router>
    
      <div className="AppContainer">
      <Header/>
        <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ApplicationForm" element={<ApplicationForm />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Computers" element={<Computers />} />
          <Route path="/summary" element={<DrivingCatalogueSummary />} />
          <Route path="/fullcataloguedriving" element={<DrivingCatalogue />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/team" element={<Team />} />

        </Routes>


      </div>
      <WhatsAppIcon/>
      <Motto />
      <Footer />
    </Router>
  );
}


export default App;
