import React from 'react';
import SubPageTemplate from '../components/SubPageTemplate';
import { Zap, Wifi, ShieldCheck, Users, Cloud, Router } from 'lucide-react';

const FibrePage = () => (
  <SubPageTemplate
    eyebrow="Ultra-Fast Fibre"
    title="Broadband that’s"
    highlight="out of this world."
    description="Up to 25× the speed of legacy ADSL. Uncapped, unshaped and always on — the connection your home and business deserve."
    image="https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=1600&q=80"
    breadcrumb={[
      { label: 'Services', to: '/services' },
      { label: 'Ultra-Fast Fibre' },
    ]}
    intro={{
      heading: 'Fibre that scales with your life.',
      body:
        'From lightning downloads to lag-free gaming and glass-clear video calls — Imagine Fibre keeps every device online with the speed and reliability you need.',
    }}
    features={[
      { icon: Zap, title: '25× faster than ADSL', body: 'Real-world speeds that redefine what South African broadband can be.' },
      { icon: Wifi, title: 'Truly uncapped', body: 'No caps. No throttling. No fair-usage nonsense. Stream and download freely.' },
      { icon: Router, title: 'Free premium router', body: 'WiFi 6-ready router included on 100 Mbps+ packages. Full-home coverage.' },
      { icon: ShieldCheck, title: '99.9% uptime', body: 'Multi-network redundancy keeps you online, even when networks have issues.' },
      { icon: Cloud, title: 'Optimised routing', body: 'Direct peering with SA & international CDNs for faster streaming and gaming.' },
      { icon: Users, title: 'Multi-user friendly', body: 'Simultaneous 4K streams, video calls and gaming — without a hiccup.' },
    ]}
  />
);

export default FibrePage;
