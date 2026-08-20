import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import { Toaster } from './ui/toaster';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Layout;
