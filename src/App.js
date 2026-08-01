import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConnectPage from './pages/ConnectPage';
import ConnectHomePage from './pages/ConnectHomePage';
import ConnectBusinessPage from './pages/ConnectBusinessPage';
import ConnectEstatePage from './pages/ConnectEstatePage';
import ServicesPage from './pages/ServicesPage';
import FibrePage from './pages/FibrePage';
import VoicePage from './pages/VoicePage';
import SupportPage from './pages/SupportPage';
import CoveragePage from './pages/CoveragePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/connect/home" element={<ConnectHomePage />} />
        <Route path="/connect/business" element={<ConnectBusinessPage />} />
        <Route path="/connect/estate" element={<ConnectEstatePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/fibre" element={<FibrePage />} />
        <Route path="/services/voice" element={<VoicePage />} />
        <Route path="/services/support" element={<SupportPage />} />
        <Route path="/coverage" element={<CoveragePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
