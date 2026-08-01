import React from 'react';
import '../App.css';
import Layout from '../components/Layout';
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

const HomePage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default HomePage;
