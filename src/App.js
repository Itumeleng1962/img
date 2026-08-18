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
import HostingPage from './pages/HostingPage';
import HostingOrderPage from './pages/HostingOrderPage';
import DomainsPage from './pages/DomainsPage';
import WordPressPage from './pages/WordPressPage';
import EmailHostingPage from './pages/EmailHostingPage';
import SecurityPage from './pages/SecurityPage';
import TransferPage from './pages/TransferPage';
import SslPage from './pages/SslPage';
import ResellersPage from './pages/ResellersPage';
import WebDevPage from './pages/WebDevPage';
import SupportPage from './pages/SupportPage';
import CoveragePage from './pages/CoveragePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ComingSoonPage from './pages/ComingSoonPage';
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
        <Route path="/services/hosting" element={<HostingPage />} />
        <Route path="/services/hosting/order" element={<HostingOrderPage />} />
        <Route path="/services/domains" element={<DomainsPage />} />
        <Route path="/services/wordpress" element={<WordPressPage />} />
        <Route path="/services/email" element={<EmailHostingPage />} />
        <Route path="/services/security" element={<SecurityPage />} />
        <Route path="/services/transfer" element={<TransferPage />} />
        <Route path="/services/ssl" element={<SslPage />} />
        <Route path="/services/resellers" element={<ResellersPage />} />
        <Route path="/services/webdev" element={<WebDevPage />} />
        <Route path="/services/support" element={<SupportPage />} />
        <Route path="/coverage" element={<CoveragePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portal" element={<ComingSoonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




