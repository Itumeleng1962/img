import React from 'react';
import SubPageTemplate from '../components/SubPageTemplate';
import {
  Wrench,
  Headset,
  ShieldCheck,
  Cloud,
  Laptop,
  Server,
} from 'lucide-react';

const SupportPage = () => (
  <SubPageTemplate
    eyebrow="IT Support"
    title="Proactive support that"
    highlight="predicts problems."
    description="On-site and remote IT support for homes and businesses. Real humans, real fixes — before your team even notices there’s a problem."
    image="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1600&q=80"
    breadcrumb={[
      { label: 'Services', to: '/services' },
      { label: 'IT Support' },
    ]}
    intro={{
      heading: 'Your IT team, on tap.',
      body:
        'Imagine IT Support blends monitoring, patching and human help-desk into a single, predictable monthly cost — so your team can focus on growing the business.',
    }}
    features={[
      { icon: Headset, title: '24/7 help-desk', body: 'Talk to a real technician in under 2 minutes, any time of day or night.' },
      { icon: Wrench, title: 'On-site technicians', body: 'National footprint of engineers dispatched to you — usually within hours.' },
      { icon: ShieldCheck, title: 'Managed security', body: 'Antivirus, EDR and patch management on every managed device.' },
      { icon: Cloud, title: 'Microsoft 365 & Google', body: 'Full email, files, licensing and identity management for your workspace.' },
      { icon: Laptop, title: 'Device lifecycle', body: 'From procurement to imaging, deployment and secure retirement.' },
      { icon: Server, title: 'Server & network care', body: 'Firewalls, switches, servers and cloud infrastructure — all handled.' },
    ]}
    ctaTitle="Free IT audit for new customers."
    ctaBody="Book a no-obligation 60-minute audit — walk away with a report you can action."
    ctaButton={{ label: 'Book my audit', to: '/contact' }}
  />
);

export default SupportPage;
