import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const ContactPage = () => (
  <Layout>
    <PageHero
      eyebrow="Get in touch"
      title="Let’s get you"
      highlight="connected."
      description="Our sales and support team is a phone call or short form away. Real humans, fast responses — 24/7."
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
      breadcrumb={[{ label: 'Contact' }]}
    />
    <Contact />
    <FAQ />
  </Layout>
);

export default ContactPage;
