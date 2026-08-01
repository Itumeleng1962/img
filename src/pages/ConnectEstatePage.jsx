import React from 'react';
import SubPageTemplate from '../components/SubPageTemplate';
import {
  Landmark,
  Users,
  ShieldCheck,
  Zap,
  Wrench,
  Wifi,
} from 'lucide-react';

const ConnectEstatePage = () => (
  <SubPageTemplate
    eyebrow="Estate & Complexes"
    title="Fibre-up your complex,"
    highlight="for free."
    description="Non-intrusive underground open-access fibre infrastructure for multi-dwelling complexes, estates and business parks — at no cost to trustees."
    image="https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1600&q=80"
    breadcrumb={[
      { label: 'Connect', to: '/connect' },
      { label: 'Estate & Complexes' },
    ]}
    intro={{
      heading: 'Blitz Fibre: fully-funded, tenant-ready.',
      body:
        'Imagine partners with Blitz Fibre to build open-access fibre infrastructure throughout your estate at zero cost — residents choose their own ISP and speed.',
    }}
    features={[
      {
        icon: Zap,
        title: 'Zero cost to trustees',
        body: 'We fund, build and maintain the infrastructure. No levies, no capex, no headaches.',
      },
      {
        icon: Wrench,
        title: 'Non-intrusive install',
        body: 'Underground micro-trenching keeps gardens, driveways and paved areas intact.',
      },
      {
        icon: Wifi,
        title: 'Open-access',
        body: 'Residents choose their ISP and package. Full freedom, no lock-in.',
      },
      {
        icon: ShieldCheck,
        title: '25-year lifespan',
        body: 'Enterprise-grade single-mode fibre built to last decades, not years.',
      },
      {
        icon: Users,
        title: 'Community WiFi',
        body: 'Optional communal WiFi for clubhouses, gyms and gate houses included.',
      },
      {
        icon: Landmark,
        title: 'Adds property value',
        body: 'Fibre-enabled estates sell faster and at premium prices — measured evidence.',
      },
    ]}
    ctaTitle="Book a free feasibility survey."
    ctaBody="Our team will visit, map your estate and prepare a proposal within 7 days."
    ctaButton={{ label: 'Request survey', to: '/contact' }}
  />
);

export default ConnectEstatePage;
