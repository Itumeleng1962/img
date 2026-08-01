import React, { useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CoverageBar from '../components/CoverageBar';
import Steps from '../components/Steps';
import ConnectOptions from '../components/ConnectOptions';
import Deals from '../components/Deals';
import WhyImagine from '../components/WhyImagine';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const HomePage = () => {
  useEffect(() => {
    // Reveal on scroll
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
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CoverageBar />
        <Steps />
        <ConnectOptions />
        <Deals />
        <WhyImagine />
        <Testimonials />
        <News />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default HomePage;
