import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MortgageCalculator from './pages/MortgageCalculator';
import Start from './pages/Start';
// import { Outlet } from 'react-router-dom';
// import Navigation from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
