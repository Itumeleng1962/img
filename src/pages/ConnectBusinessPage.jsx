import React from 'react';
import SubPageTemplate from '../components/SubPageTemplate';
import {
  Building2,
  Cloud,
  ShieldCheck,
  Headset,
  Signal,
  BarChart3,
} from 'lucide-react';

const ConnectBusinessPage = () => (
  <SubPageTemplate
    eyebrow="Business Fibre"
    title="Bandwidth that"
    highlight="means business."
    description="SLA-backed dedicated Fibre for SMEs and enterprises. Empowering teams to do more — for less — with rock-solid uptime."
    image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&q=80"
    breadcrumb={[
      { label: 'Connect', to: '/connect' },
      { label: 'Business' },
    ]}
    intro={{
      heading: 'Fibre engineered for uptime.',
      body:
        'From 10-seat SMEs to 500-seat corporates, Imagine Business Fibre delivers dedicated bandwidth, priority support and the SLAs your operations depend on.',
    }}
    features={[
      {
        icon: Signal,
        title: 'Dedicated bandwidth',
        body: '1:1 contention on business lines. What you pay for is what you get — always.',
      },
      {
        icon: ShieldCheck,
        title: '99.95% SLA',
        body: 'Enterprise-grade Service Level Agreement with response times measured in minutes.',
      },
      {
        icon: Cloud,
        title: 'Cloud + IP transit',
        body: 'Optimised peering with AWS, Azure, GCP and major SA IX exchange points.',
      },
      {
        icon: Headset,
        title: 'Dedicated account manager',
        body: 'One human, one number, one team — who knows your business by name.',
      },
      {
        icon: BarChart3,
        title: 'Usage analytics',
        body: 'Real-time dashboards for bandwidth, latency, and QoS across every site.',
      },
      {
        icon: Building2,
        title: 'Multi-site & MPLS',
        body: 'Connect head office, branches and remote workers on a secure, private network.',
      },
    ]}
    packages={[
      {
        price: 1499,
        title: '50/50 Mbps SLA',
        sub: 'Small offices & shops',
        perks: ['1:1 Uncapped', 'SLA-backed', 'Static IP'],
      },
      {
        price: 2499,
        title: '100/100 Mbps SLA',
        sub: 'Growing SMEs',
        perks: ['1:1 Uncapped', 'SLA-backed', '2 Static IPs'],
        popular: true,
      },
      {
        price: 4499,
        title: '200/200 Mbps SLA',
        sub: 'Corporate offices',
        perks: ['1:1 Uncapped', 'Priority SLA', 'Subnet /29'],
      },
      {
        price: 8999,
        title: '1 Gbps SLA',
        sub: 'Enterprise / campus',
        perks: ['1:1 Uncapped', 'Enterprise SLA', 'Subnet /28'],
      },
    ]}
    ctaTitle="Ready to power your business?"
    ctaBody="Get a tailored quote in one call. Multi-site, MPLS and VoIP bundled available."
    ctaButton={{ label: 'Request a quote', to: '/contact' }}
  />
);

export default ConnectBusinessPage;
