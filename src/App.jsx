import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importez Navigate pour la redirection
import Home from './pages/Home/Home';
import PlantsList from './pages/PlantsList/PlantsList';
import PlantDetail from './pages/PlantDetail/PlantDetail';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import CartModal from './components/CartModal/CartModal';
import ScrollingNav from './components/ScrollingNav/ScrollingNav';

function App() {
  return (
    <div className="App">
      <ScrollingNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantsList />} />
        <Route path="/plants/:id" element={<PlantDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Route par défaut */}
      </Routes>
      <CartModal />
    </div>
  );
}

export default App;
