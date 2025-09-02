import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Volunteers from './pages/Volunteers';
import DropShipStore from './pages/DropShipStore';
import DigitalNewsletter from './pages/DigitalNewsletter';
import Sponsors from './pages/Sponsors';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/store" element={<DropShipStore />} />
            <Route path="/newsletter" element={<DigitalNewsletter />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
